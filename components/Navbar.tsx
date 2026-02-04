import Link from "next/link"
import { ModeToggle } from "./darkmodeToggler"
import { SheetButton } from "./SheetButton"

export default function Navbar() {
    return (
        <nav className="w-full shadow-[0_2px_4px_-2px_rgba(0,0,0,0.12)]">
            <div className="w-full max-w-270 h-16 flex justify-center items-center relative p-4 mx-auto">
                <div className="flex justify-center items-center">
                    <h1 className="text-4xl font-serif">babblr.</h1>
                </div>
                <div className="md:flex hidden justify-center items-center absolute right-0 p-4 gap-2 text-accent">
                    <Link href="/">Blogs</Link>
                    <Link href="/">Contact us</Link>
                    <ModeToggle/>
                </div>
                <div className="flex md:hidden justify-center items-center absolute right-0 p-4 mr-2">
                    <SheetButton/>
                </div>
            </div>
        </nav>
    )
}

type BlogDataShape = [
    {
        id: number,
        title: string,
        category: string,
        image: string,
        body: string,
        datePublished: string
    }
]

/*
Features:
1. Display 4 latest blogpost card under the hero page section, this will be the 'Latest blogs' Section. Underneath will be 'Go to blogs' button that will take them to the blogs route

2. In this blog route, they can search for a title of the blog, they can filter by date (oldest, latest) or by category (tech and games, sports and fitness, food and life)

*/