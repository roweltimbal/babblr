import { randomBytes, scryptSync, timingSafeEqual } from "crypto";

export function hashPassword(password: string) {
    const salt = randomBytes(16).toString("hex");

    const hashedpassword = scryptSync(password, salt, 64).toString("hex");

    return {
        salt,
        hashedpassword
    }
}