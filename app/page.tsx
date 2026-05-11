import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LatestPostContainer } from "@/components/LatestPostContainer";
// import { blogs } from "@/data/blogs.mock";
import clientPromise from "@/lib/db"
import type { BlogDB } from "@/types/blog";


export default async function Home() {
  const client = await clientPromise;
  const db = client.db("babblr");

  const blogPosts = await db.collection<BlogDB>("posts").find().sort({datePublished: -1}).toArray();
  const blogs = blogPosts.map(blog => ({
    ...blog,
     _id: blog._id.toString(),
    datePublished: blog.datePublished.toLocaleDateString("en-US")
  }))

  return (
    <main>
      <section className="min-h-[40vh] flex flex-col items-center justify-center gap-5">
        <h1 className="font-serif font-bold text-7xl border-b-7 border-accent">babblr.</h1>
        <p>Building things, training hard, and thinking out loud.</p>
        <Link href='/blogs'><Button size='sm' className="bg-foreground hover:bg-accent">Explore the blogs</Button></Link>
        <p className="text-sm text-muted-foreground">A blog by Rowel Timbal</p>
      </section>
      <section>
        <h1 className="text-2xl mb-4">Latest Posts</h1>
        <LatestPostContainer blogs={blogs}/>
      </section>
    </main>
  );
}
