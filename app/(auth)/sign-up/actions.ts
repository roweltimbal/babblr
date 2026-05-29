"use server"
import { signUpUser } from "@/lib/auth/auth-service";
import { signUpSchema } from "@/lib/auth/schema";
import { createUserSession } from "@/lib/auth/session"
import { redirect } from "next/navigation";

export default async function signUp(
    prevState: any,
    formData: FormData
) {
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if(!username || !email || !password) {
        return {error: "Missing fields"}
    }
    const rawDataObject = {
        username,
        email,
        password
    }

   const validatedFormData = signUpSchema.safeParse(rawDataObject)

   if(!validatedFormData.success) {
    return {
        error: validatedFormData.error.issues[0].message
    }
   }

   const result = await signUpUser(validatedFormData.data)
    
    if(result.error) {
        return {error: result.error}
    }

    //TODO: Create session here using the result
    const userObject = {
        id: result.user!._id.toString(),
    }
    await createUserSession(userObject)

    redirect("/")
}