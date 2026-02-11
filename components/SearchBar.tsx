import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputInline() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="Search..."  />
      <Button size='sm' className="bg-foreground hover:bg-accent">Search</Button>
    </Field>
  )
}
