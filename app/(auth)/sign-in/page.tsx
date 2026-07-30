"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import  signIn  from "./actions"
import { useActionState } from "react";


export default function SignInPage() {
    const [state, action, pending] = useActionState(signIn, null)
    return(
        <section className="w-full flex justify-center py-15">
            <div className="max-w-lg border-2 rounded p-4 md:p-8 shadow-md">
                {state?.error && (
                    <p className="text-red-500 text-sm">{state.error}</p>
                )}
                <form action={action} className="space-y-6">    
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input name="email" type="email" placeholder="example@email.com"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Password</label>
                        <Input name="password" type="password" placeholder="********"/>
                    </div>
                    <div>
                        <p className="text-sm">Don't have an account? <Link className="underline text-accent" href="/sign-up">Sign up</Link> here.</p>
                    </div>
                    <div className="flex justify-center">
                        <Button className="bg-foreground hover:bg-accent" type="submit" disabled={pending}>
            {pending ? "Signing in..." : "Submit"}
          </Button>
                    </div>
                </form>
                <div className="mt-6 rounded bg-green-500/10 border border-green-500/30 p-3 text-sm text-center">
                    <p className="font-medium">Demo credentials</p>
                    <p>Username: demo@gmail.com</p>
                    <p>Password: Demopass</p>
                </div>
            </div>
        </section>
    )
}