import type { Blog } from "@/types/blog";



export const blogs: Blog[] = [
  {
    id: 1,
    slug: "building-consistency",
    title: "Building Consistency Without Burning Out",
    category: "sports-and-fitness",
    image: "/assets/blogs/imageOne.jpg",
    excerpt:
      "Consistency isn’t about intensity. It’s about showing up even when motivation is gone.",
    body: "Full blog content goes here...",
    datePublished: new Date(),
  },
  {
    id: 2,
    slug: "thinking-in-public",
    title: "Thinking in Public as a Developer",
    category: "tech-and-games",
    image: "/assets/blogs/imageTwo.jpg",
    excerpt:
      "Writing is how I slow down my thinking and sharpen my decisions.",
    body: "Full blog content goes here...",
    datePublished: new Date(),
  },
  {
    id: 3,
    slug: "simple-food-rituals",
    title: "Simple Food Rituals That Ground My Day",
    category: "food-and-life",
    image: "/assets/blogs/imageThree.jpg",
    excerpt:
      "Small food rituals can turn chaos into something human again.",
    body: "Full blog content goes here...",
    datePublished: new Date(),
  },
  {
    id: 4,
    slug: "training-with-intent",
    title: "Training With Intent, Not Ego",
    category: "sports-and-fitness",
    image: "/assets/blogs/imageFour.jpg",
    excerpt:
      "Progress comes faster when you stop trying to impress anyone.",
    body: "Full blog content goes here...",
    datePublished: new Date(),
  },
  {
    id: 5,
    slug: "building-consistency",
    title: "Building Consistency Without Burning Out",
    category: "sports-and-fitness",
    image: "/assets/blogs/imageFive.jpg",
    excerpt:
      "Consistency isn’t about intensity. It’s about showing up even when motivation is gone.",
    body: "Full blog content goes here...",
    datePublished: new Date(),
  },
  {
    id: 6,
    slug: "thinking-in-public",
    title: "Thinking in Public as a Developer",
    category: "tech-and-games",
    image: "/assets/blogs/imageSix.jpg",
    excerpt:
      "Writing is how I slow down my thinking and sharpen my decisions.",
    body: "Full blog content goes here...",
    datePublished: new Date(),
  },
  {
    id: 7,
    slug: "simple-food-rituals",
    title: "Simple Food Rituals That Ground My Day",
    category: "food-and-life",
    image: "/assets/blogs/imageSeven.jpg",
    excerpt:
      "Small food rituals can turn chaos into something human again.",
    body: "Full blog content goes here...",
    datePublished: new Date(),
  },
  {
    id: 8,
    slug: "training-with-intent",
    title: "Training With Intent, Not Ego",
    category: "sports-and-fitness",
    image: "/assets/blogs/imageEigth.jpg",
    excerpt:
      "Progress comes faster when you stop trying to impress anyone.",
    body: "Full blog content goes here...",
    datePublished: new Date(),
  },
]

/*

db.createCollection("posts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["slug", "title", "author", "category", "image", "excerpt", "body", "datePublished"],
      properties: {
        slug: {
          bsonType: "string",
          description: "Must be a string and is required"
        },
         author: {
          bsonType: "string",
          description: "Must be a string and is required"
        },
        title: {
          bsonType: "string",
          description: "Must be a string and is required"
        },
        category: {
          enum: ["tech-and-games", "sports-and-fitness", "food-and-life"],
          description: "Must be one of the predefined categories"
        },
        image: {
          bsonType: "string",
          description: "Must be a string and is required"
        },
        excerpt: {
          bsonType: "string",
          description: "Must be a string and is required"
        },
        body: {
          bsonType: "string",
          description: "Must be a string and is required"
        },
         datePublished: {
          bsonType: "date",
          description: "Must be a date and is required"
        }
      }
    }
  }
})


test:
 {
    slug: "building-consistency",
    title: "Building Consistency Without Burning Out",
    author: "Rowel Timbal",
    category: "sports-and-fitness",
    image: "/assets/blogs/imageOne.jpg",
    excerpt:
      "Consistency isn’t about intensity. It’s about showing up even when motivation is gone.",
    body: "Full blog content goes here...",
    datePublished: new Date(),
  },

app/api/blogposts/route.js
export async function GET(req) {
 try {
  consts blogPosts = getDb()
  .collection("posts")
  .find()
  .sort({datePublished: -1})
  .toArray();
  return NextResponse.json({blogPosts}, {status: 200});
 } 
 catch(err) {
  return NextResponse.json({message: err.message}, {status: 500}))
 }
}

export async function GET() {
try {
 const blogs = await getDb()
 .collection('posts')
 .find()
 .sort({datePublished: -1})
 .toArray()

 const blogPosts = blogs.map(blog => ({
  ...blog,
  datePublished: blog.datePublished.toLocaleDateString("en-US")
}));

 return NextResponse({blogPosts}, {status: 200})
} catch(err) {
  return NextResponse({message: err.message}, {status: 500})
}  
} 


app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LatestPostContainer } from "@/components/LatestPostContainer";



export default async function Home() {
  const res = await fetch("http://localhost:3000/api/blogposts");
  const data = await res.json();
  const blogs = data.blogPosts;

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

db.posts.insertMany([
{
    slug: "thinking-in-public",
    title: "Thinking in Public as a Developer",
    author: "Rowel Timbal",
    category: "tech-and-games",
    image: "/assets/blogs/imageTwo.jpg",
    excerpt:
      "Writing is how I slow down my thinking and sharpen my decisions.",
    body: "Full blog content goes here...",
    datePublished: new Date(),
  },
  {
    slug: "simple-food-rituals",
    title: "Simple Food Rituals That Ground My Day",
    author: "Rowel Timbal",
    category: "food-and-life",
    image: "/assets/blogs/imageThree.jpg",
    excerpt:
      "Small food rituals can turn chaos into something human again.",
    body: "Full blog content goes here...",
    datePublished: new Date(),
  }
])


*/