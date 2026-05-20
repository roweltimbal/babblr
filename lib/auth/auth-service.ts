import { SignUpSchema } from "./schema"


export async function signUpUser(userObject: SignUpSchema) {

    const userObjectToDb = userObject

    return userObjectToDb
}