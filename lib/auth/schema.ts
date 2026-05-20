import { z } from "zod"

// We will get from the form: username, email, password

export const signUpSchema = z.object({
    username: z.string().min(3),
    email: z.email(),
    password: z.string().min(8)
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
