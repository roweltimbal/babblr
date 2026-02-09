import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import type { Blog } from '@/types/blog'

type BlogCardProps = {
    blog: Blog
}

export function BlogCard ({blog}: BlogCardProps) {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0 bg-background border-stone-200">
        <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image
                src={blog.image}
                alt='shoes picture'
                fill
                className="object-cover"
            />
        </div>
        <CardHeader className="flex flex-col gap-2">
            <CardAction className="self-start">
            <Badge variant="secondary" className="bg-accent text-white">{blog.category}</Badge>
            </CardAction>
            <CardTitle className="w-full text-foreground">{blog.title}</CardTitle>
            <CardDescription className="w-full">
            <p>{blog.excerpt}</p>
            <p className="mt-1 text-xs text-muted-foreground">{blog.datePublished}</p>
            </CardDescription>
        </CardHeader>
        <CardFooter>
            <Button className="w-full bg-foreground hover:bg-accent">Read Blog</Button>
        </CardFooter>
        </Card>
    )
}