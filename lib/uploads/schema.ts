import { z } from "zod";

export const addBlogSchema = z.object({
    slug: z.string().min(1),
    title: z.string().min(1),
    author: z.string().min(1),
    category: z.enum(["sports-and-fitness", "tech-and-games", "food-and-life"]),
    image: z.string().min(1),
    excerpt: z.string().min(1),
    body: z.string().min(1),
})

export type AddBlogSchema = z.infer<typeof addBlogSchema>