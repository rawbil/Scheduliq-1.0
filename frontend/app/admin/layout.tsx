import AdminSidebar from "@/components/AdminSidebar"
 
export default function AdminLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="flex gap-2">
            <AdminSidebar /> 
            <main className="admin-children 768px:pt-5 px-4 max-768px:mt-10">{children}</main>
        </div>
    )
}