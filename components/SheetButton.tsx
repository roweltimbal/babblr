import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { Menu } from "lucide-react"
import { ModeToggle } from "./darkmodeToggler"
import { logOut } from "@/lib/auth/session"

type SheetButtonProps = {
  isSignedIn: boolean
}

export function SheetButton({ isSignedIn }: SheetButtonProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><Menu/></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-5 p-4">
            <ModeToggle/>
            <Link href="/">Blogs</Link>
            <Link href="/">Contact us</Link>
            {isSignedIn ? (
                <form action={logOut}>
                    <button type="submit" className="cursor-pointer">Sign out</button>
                </form>
            ) : (
                <Link href="/sign-in">Sign in</Link>
            )}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
