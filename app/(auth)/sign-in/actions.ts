"use server"
import { signInUser } from "@/lib/auth/auth-service"
import { signInSchema } from "@/lib/auth/schema"
import { createUserSession } from "@/lib/auth/session"
import { redirect } from "next/navigation"

export default async function signIn(
    prevState: any,
    formData: FormData
) {
   
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    if(!email || !password) {
        return {error: "Missing fields"}
    }

    const rawDataObject = {
        email,
        password
    }

    const validatedFormData = signInSchema.safeParse(rawDataObject);

    if(!validatedFormData.success) return {
        error: validatedFormData.error.issues[0].message
    }

    const result = await signInUser(validatedFormData.data)
    if(result.error) {
        return {error: result.error}
    }

    // create session
    await createUserSession({id: result.user!.userId.toString()})

    redirect("/add-blog")
}