import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { Menu } from "lucide-react"
import { ModeToggle } from "./darkmodeToggler"

export function SheetButton() {
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
        </nav>
      </SheetContent>
    </Sheet>
  )
}
