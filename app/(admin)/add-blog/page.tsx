"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useActionState } from "react";
import { addBlogToDb } from "./actions";
import { Textarea } from "@/components/ui/textarea"


export default function AddBlog() {
    const [state, action, pending] = useActionState(addBlogToDb, null)
    
    return(
        <section className="w-full flex justify-center py-15">
            <div className="max-w-lg border-2 rounded p-4 md:p-8 shadow-md">
                {state?.error && (
                    <p className="text-red-500 text-sm">{state.error}</p>
                )}
                <form action={action} className="space-y-6">    
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">slug</label>
                        <Input name="slug" type="text" placeholder=""/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">title</label>
                        <Input name="title" type="text" placeholder=""/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">author</label>
                        <Input name="author" type="text" placeholder=""/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">category</label>
                        <p className="text-sm text-accent">options: sports and fitness, tech and games, food and life</p>
                        <Input name="category" type="text" placeholder=""/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">image path</label>
                        <Input name="image" type="text" placeholder=""/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">excerpt</label>
                        <Textarea
                            name="excerpt"
                            placeholder="Short summary of the blog post..."
                            rows={3}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">body</label>
                         <Textarea
                                name="body"
                                placeholder="Write blog content here..."
                                rows={12}
                        />
                    </div>
                    <div className="flex justify-center">
                        <Button className="bg-foreground hover:bg-accent" type="submit" disabled={pending}>
                            {pending ? "Uploading..." : "Submit"}
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    )
}