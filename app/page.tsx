import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="min-h-[40vh] flex flex-col items-center justify-center gap-5">
      <h1 className="font-serif font-bold text-7xl border-b-7 border-accent">babblr.</h1>
      <p>Building things, training hard, and thinking out loud.</p>
      <Link href='/'><Button size='sm' className="bg-foreground hover:bg-accent">Explore the blog</Button></Link>
      <p className="text-sm text-muted-foreground">A blog by Rowel Timbal</p>
    </section>
  );
}
