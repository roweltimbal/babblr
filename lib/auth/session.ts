"use server"
import { z } from "zod";
import crypto from "crypto";
import { cookies } from "next/headers";
import {  redis } from "../redis/redis";
import clientPromise from "../db";
import { ObjectId } from "mongodb";

// Session Expiration and Cookie Session Key
const SESSION_EXPIRATION_SECONDS = 60*60*24*7;
const COOKIE_SESSION_KEY = "session-id"

// zod session schema
const sessionSchema = z.object({
    id: z.string(),
    role: z.string()
})

export async function createUserSession(user: {id: string}) {
    const client = await clientPromise;
    const db = client.db("babblr");

    // create new session id
    const sessionId = crypto.randomBytes(64).toString("hex");

    // get role from db
    const dbUser = await db.collection("users").findOne(
    { _id: new ObjectId(user.id) },
    { projection: { role: 1 } })

    if(!dbUser) {
        throw new Error("User not found")
    }
    
    // userSessionObject to be passed in redis
    const userSessionObject = {
        id: user.id,
        role: dbUser.role
    } 

    // store session data to redis
    await redis.set(`session:${sessionId}`, sessionSchema.parse(userSessionObject), {
        ex: SESSION_EXPIRATION_SECONDS
    })

    // setting data in cookies
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_SESSION_KEY, sessionId, {
        secure: true,
        httpOnly: true,
        sameSite: "lax",
        expires: new Date(Date.now() + SESSION_EXPIRATION_SECONDS * 1000),
        path: "/",
    })

}

// remove user from session - for sign out

export async function removeUserFromSession () {
    const cookieStore = await cookies()
    const sessionId = cookieStore.get(COOKIE_SESSION_KEY);
    if(sessionId === null) return null;

    // deleting seesion in redis
    await redis.del(`session:${sessionId?.value}`);

    // deleting cookies
    cookieStore.delete(COOKIE_SESSION_KEY)
}

// logout function

export async function logOut() {
    await removeUserFromSession();
}