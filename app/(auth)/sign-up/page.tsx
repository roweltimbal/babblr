"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useActionState } from "react"
import signUp from "./actions"

export default function SignUp() {
    const [state, action, pending] = useActionState(signUp, null)

    return(
        <section className="w-full py-15 flex justify-center">
            <div className="w-max-lg rounded border-2 p-4 md:p-8 shadow-md">
                {state?.error && (<p className="text-sm text-red-500">{state.error}</p>)}
                <form action={action} className="space-y-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Username</label>
                        <Input
                            name="username"
                            type="text"
                            placeholder="Enter Username"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input
                            name="email"
                            type="email"
                            placeholder="example@email.com"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Password</label>
                        <Input
                            name="password"
                            type="password"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="flex justify-center">
                    <Button className="bg-foreground hover:bg-accent" disabled={pending}>{pending ? "Signing up..." : "Sign up"}</Button>
                    </div>
                </form>
            </div>
        </section>
    )
}