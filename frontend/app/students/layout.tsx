import StudentSidebar from "@/components/StudentSidebar";

 
export default function StudentLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="flex gap-2">
            <StudentSidebar /> 
            <main className="admin-children 768px:pt-20 px-4 max-768px:mt-10">{children}</main>
        </div>
    )
}