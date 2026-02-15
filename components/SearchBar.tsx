'use client'
import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputInline() {
  const params = useSearchParams();
  const router = useRouter();

  const [keyword, SetKeyword] = useState(params.get('search') || '');
  const handleClick = () => {
    const newParams = new URLSearchParams(params.toString());
    if(keyword) {
      newParams.set('search', keyword)
    } else {
      newParams.delete('search')
    }
    router.push(`?${newParams.toString()}`)
  }

  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="Search..." value={keyword}
      onChange={(e) => {
        SetKeyword(e.target.value.toLowerCase());
      }}
      onKeyDown={(e) => {
        if(e.key === 'Enter') handleClick()
      }}
      />
      <Button size='sm' className="bg-foreground hover:bg-accent" onClick={handleClick}>Search</Button>
    </Field>
  )
}
