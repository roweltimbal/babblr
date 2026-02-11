import { blogs } from "@/data/blogs.mock"

type BlogParams = {
    params: Promise<{blogSlug: string}>
}


export default async function BlogPage ({params}: BlogParams) {
    const {blogSlug} = await params;
    const selectedBlog = blogs.filter(blog => blog.slug === blogSlug);
    return(
        <section>
            <div className="w-full flex flex-col justify-center items-center">
                <div>
                    <h1>{selectedBlog[0].title}</h1>
                </div>
            </div>
        </section>
    )
}