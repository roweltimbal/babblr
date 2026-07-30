import clientPromise from "@/lib/db"
import type {BlogDB} from "@/types/blog"
import Image from "next/image";

type BlogParams = {
    params: Promise<{blogSlug: string}>
}


export default async function BlogPage ({params}: BlogParams) {
    const {blogSlug} = await params;
    const client = await clientPromise;
    const db = client.db("babblr");
    const blog = await db.collection<BlogDB>("posts").findOne({slug: blogSlug})

    if(!blog) {
        return <div>Blog not found</div>
    }

    const selectedBlog = {
        ...blog,
        _id: blog?._id.toString(),
        datePublished: blog?.datePublished.toLocaleDateString("en-US")
    }
    console.log(selectedBlog)
    return(
        <section>
            <div className="max-w-4xl mx-auto px-4 py-10">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="relative w-full aspect-video overflow-hidden rounded-xl mb-10">
                                <Image
                                    src={selectedBlog.image}
                                    alt='shoes picture'
                                    fill
                                    className="object-cover"
                                />
                            </div>
                    <div className="mb-6 text-center">
                        <h1 className="text-3xl font-bold tracking-wide">{selectedBlog.title.toUpperCase()}</h1>
                    </div>
                    <div>
                        <p className="italic text-lg">by {selectedBlog.author}</p>
                    </div>
                    <div className="w-full mt-20 flex flex-col items-start text-left gap-2">
                        <p className="text-sm underline">{selectedBlog.datePublished}</p>
                        <p className="text-lg">{selectedBlog.body}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}