import TeacherSidebar from "@/components/TeacherSidebar";


export default function TeacherLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
    <div className="flex gap-1">
        <TeacherSidebar />
        <main className="admin-children 768px:pt-20 px-4 max-768px:mt-10">{children}</main> 
    </div>
    )
}