import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LatestPostContainer } from "@/components/LatestPostContainer";
import clientPromise from "@/lib/db"
import type { BlogDB } from "@/types/blog";
import { Mail } from "lucide-react";


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
      <footer className="mt-16 py-12 border-t border-border flex flex-col items-center gap-3">
        <h2 className="font-serif font-bold text-5xl">babblr.</h2>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Mail className="w-4 h-4" />
          <span className="text-sm">rowel_babblr@gmail.com</span>
        </div>
        <p className="text-xs text-muted-foreground">©2026 babblr. All rights reserved.</p>
      </footer>
    </main>
  );
}
