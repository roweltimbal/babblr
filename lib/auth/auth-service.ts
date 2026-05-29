import { SignUpSchema } from "./schema"
import clientPromise from "../db"
import { hashPassword } from "./password";


export async function signUpUser(userObject: SignUpSchema) {
     try {
    // Properties we will recieve from userObject:  username, email, password
   
    // connect to the db
    const client = await clientPromise;
    const db = client.db("babblr")
    const {username, email, password} = userObject;

    // Check if email exist
    const emailExist = await db.collection<SignUpSchema>("users").findOne({email: email})
    if(emailExist != null) {
        return {error: "email already exists"}
    }

    // creating salt and hashing password
    const {salt, hashedpassword} = hashPassword(password);
    const newUser = {
        username: username,
        email: email,
        salt: salt,
        hashedpassword: hashedpassword,
        role: "user"
    }
   
      const response =  await db.collection("users").insertOne(newUser)
      return {
        message: "user created",
        user: {
            _id: response.insertedId,
            role: newUser.role
        }
      }
      
    } catch (error) {
        console.dir(error, { depth: null })
    }

    return {
        error: "Error occurred in sign up",
    }
}