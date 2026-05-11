import { AllBlogPostContainer } from "@/components/AllBlogPostsContainer"
// import { blogs } from "@/data/blogs.mock"
import clientPromise from "@/lib/db"
import type { BlogDB } from "@/types/blog";

export default async function BlogPosts() {
    const client = await clientPromise;
  const db = client.db("babblr");

  const blogPosts = await db.collection<BlogDB>("posts").find().sort({datePublished: -1}).toArray();
  const blogs = blogPosts.map(blog => ({
    ...blog,
     _id: blog._id.toString(),
    datePublished: blog.datePublished.toLocaleDateString("en-US")
  }))
    return(
        <div>
        <section>
            <AllBlogPostContainer blogs={blogs}/>
        </section>
        </div>
    )
}