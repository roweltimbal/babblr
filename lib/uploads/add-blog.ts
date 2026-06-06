import { AddBlogSchema } from "./schema";
import clientPromise from "../db";
import { validateSession } from "../auth/auth-service";

export async function addBlogToDbNow (blogToAdd: AddBlogSchema) {
   
        const session = await validateSession();
        if (!session || session.role !== "admin") {
            throw new Error("Unauthorized");
        }

        const client = await clientPromise;
        const db = client.db("babblr")

        const blog = {
            ...blogToAdd,
            datePublished: new Date()
        }

        const response = await db.collection("posts").insertOne(blog);
        return {
            message: "Blog upload complete",
            blogId: response.insertedId
          }
}