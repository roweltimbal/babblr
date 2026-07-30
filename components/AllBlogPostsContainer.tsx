'use client'
import { BlogCard } from "./Card"
import type { Blog } from "@/types/blog";
import BlogToolBar from "./BlogToolbar";
import { useSearchParams } from "next/navigation";

type AllBlogPostsProps = {
  blogs: Blog[];
};

export function AllBlogPostContainer ({blogs}: AllBlogPostsProps) {
    const searchParams = useSearchParams();
    const searchKeyword = searchParams?.get('search') || '';
    const filteredBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(searchKeyword))

    return(
        <div className="w-full">
            <BlogToolBar/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-6">
                {
                    filteredBlogs.map(blog => (
                        <BlogCard key={blog._id} blog={blog}/>
                    ))
                }
            </div>
        </div>
    )
}