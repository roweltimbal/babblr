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
    const selectedCategories = searchParams?.get('category')?.split(',').filter(Boolean) ?? [];

    const filteredBlogs = blogs.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchKeyword);
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(blog.category);
        return matchesSearch && matchesCategory;
    })

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