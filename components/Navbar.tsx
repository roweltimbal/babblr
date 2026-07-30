"use server"
import Link from "next/link"
import { ModeToggle } from "./darkmodeToggler"
import { SheetButton } from "./SheetButton"
import { cookies } from "next/headers";
import { logOut } from "@/lib/auth/session";


export default async function Navbar() {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get("session-id")
    const isSignedIn = !!sessionId
    return (
        <nav className="w-full shadow-[0_2px_4px_-2px_rgba(0,0,0,0.12)]">
            <div className="w-full max-w-270 h-16 flex justify-center items-center relative p-4 mx-auto">
                <div className="flex justify-center items-center">
                    <Link href='/'><h1 className="text-4xl font-serif">babblr.</h1></Link>
                </div>
                <div className="md:flex hidden justify-center items-center absolute right-0 p-4 gap-2 text-accent">
                    <Link href="/" className="hover:text-foreground">Blogs</Link>
                    <Link href="/" className="hover:text-foreground">Contact us</Link>
                    {isSignedIn ? (
                        <form action={logOut}>
                            <button type="submit" className="hover:text-foreground cursor-pointer">Sign out</button>
                        </form>
                    ) : (
                        <Link href="/sign-in" className="hover:text-foreground">Sign in</Link>
                    )}
                    <ModeToggle/>
                </div>
                <div className="flex md:hidden justify-center items-center absolute right-0 p-4 mr-2">
                    <SheetButton isSignedIn={isSignedIn}/>
                </div>
            </div>
        </nav>
    )
}

