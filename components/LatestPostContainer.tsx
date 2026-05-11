import { BlogCard } from "./Card"
import type { Blog } from "@/types/blog";

type LatestPostContainerProps = {
  blogs: Blog[];
};

export function LatestPostContainer ({blogs}: LatestPostContainerProps) {
    return(
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    blogs.slice(0,3).map(blog => (
                        <BlogCard key={blog._id} blog={blog}/>
                    ))
                }
            </div>
        </div>
    )
}