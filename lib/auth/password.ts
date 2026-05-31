import { randomBytes, scryptSync, timingSafeEqual } from "crypto";

export function hashPassword(password: string) {
    const salt = randomBytes(16).toString("hex");

    const hashedpassword = scryptSync(password, salt, 64).toString("hex");

    return {
        salt,
        hashedpassword
    }
}

export function comparePasswords (hashedpassword: string, salt: string, passwordInput: string) {
    const comparedHashedPassword = scryptSync(passwordInput, salt, 64).toString("hex");
    if(comparedHashedPassword === hashedpassword) {
        return true
    } else {
        return false
    }
}