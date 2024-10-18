"use client"
import { useRouter } from "next/navigation";

export default function ChooseUser() {
    const router = useRouter();
  return (
    <div className="flex max-420px:flex-col max-420px:gap-5 max-420px:items-center justify-between max-w-lg mx-auto mt-10">
      <section>
        <button className="bg-purple p-2 rounded-md hover:text-gray transition-all duration-300 shadow-sm shadow-white" onClick={() => router.push('/admin-auth')}>Sign-in as admin</button>
      </section>
      <section>
        <button className="bg-purple p-2 rounded-md hover:text-red transition-all duration-300 shadow-sm shadow-white" onClick={() => router.push('/student-auth')}>Sign-in as Student</button>
      </section>
      <section>
        <button className="bg-purple p-2 rounded-md hover:text-orange transition-all duration-300 shadow-sm shadow-white" onClick={() => router.push('/teacher-auth')}>Sign-in as Teacher</button> 
      </section>
    </div>
  );
}
