"use server"
import { addBlogSchema } from "@/lib/uploads/schema"
import { redirect } from "next/navigation"
import { addBlogToDbNow } from "@/lib/uploads/add-blog"

export async function addBlogToDb(prevState: any, formData:FormData) {
    const slug = formData.get("slug")
    const title = formData.get("title")
    const author = formData.get("author")
    const category = formData.get("category")
    const image = formData.get("image")
    const excerpt = formData.get("excerpt")
    const body = formData.get("body")

    if(!slug || !title || !author || !category || !image || !excerpt || !body) {
        return {
            error: "Missing fields"
        }
    }
    const validatedFormData = addBlogSchema.safeParse({
      slug,
      title,
      author,
      category,
      image,
      excerpt,
      body
    })

    if(!validatedFormData.success) {
        return {error: validatedFormData.error.issues[0].message}
    }
    const blogToAdd = {
        ...validatedFormData.data
    }

    await addBlogToDbNow(blogToAdd);

    redirect("/")
}