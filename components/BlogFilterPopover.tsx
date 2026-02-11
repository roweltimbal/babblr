'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"

const categories = [
  { id: "sports-and-fitness", label: "Sports & Fitness" },
  { id: "tech-and-games", label: "Tech & Games" },
  { id: "food-and-life", label: "Food & Life" },
]

export function CategoryFilter() {
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((c) => c !== id)
        : [...prev, id]
    )
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-35 justify-between">
          {selected.length > 0
            ? `${selected.length} selected`
            : "Filter categories"}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-56 bg-background text-foreground">
        <div className="grid gap-3">
          {categories.map((cat) => (
            <div key={cat.id} className="flex items-center space-x-2">
              <Checkbox
                id={cat.id}
                checked={selected.includes(cat.id)}
                onCheckedChange={() => toggle(cat.id)}
              />
              <Label htmlFor={cat.id}>{cat.label}</Label>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}