import { BlogCard } from "./Card"
import type { Blog } from "@/types/blog";
import BlogToolBar from "./BlogToolbar";

type AllBlogPostsProps = {
  blogs: Blog[];
};

export function AllBlogPostContainer ({blogs}: AllBlogPostsProps) {
    return(
        <div className="w-full">
            <BlogToolBar/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-6">
                {
                    blogs.map(blog => (
                        <BlogCard key={blog.id} blog={blog}/>
                    ))
                }
            </div>
        </div>
    )
}