import { AllBlogPostContainer } from "@/components/AllBlogPostsContainer"
import { blogs } from "@/data/blogs.mock"

export default function BlogPosts() {
    return(
        <div>
        <section>
            <AllBlogPostContainer blogs={blogs}/>
        </section>
        </div>
    )
}