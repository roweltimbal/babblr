

export default async function signUp(
    prevState: any,
    formData: FormData
) {
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    console.log(`username: ${username} email: ${email} password: ${password}`)
    if(!username || !email || !password) {
        return {error: "Missing fields"}
    }

    return null;
}