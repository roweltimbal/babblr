import { redirect } from "next/navigation";
import { validateSession } from "@/lib/auth/auth-service";


type Session = {
    userId: string;
    role: "admin" | "user";
};

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await validateSession();
    if(!session) {
        redirect("/sign-in")
    }

    if(session.role !== "admin") {
        redirect("/")
    }

    return <>{children}</>;
}