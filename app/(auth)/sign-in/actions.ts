"use server"

export default async function signIn(
    prevState: any,
    formData: FormData
) {
   
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    console.log(`email: ${email}, password: ${password}`)

    if(!email || !password) {
        return {error: "Missing fields"}
    }

    return {error: null};
}