"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, TrendingDown, TrendingUp, } from "react-feather";
import { MdArrowBack, MdMenu, MdEmojiPeople, MdFilePresent, MdBook, MdCalendarMonth, MdChat, MdQuestionAnswer } from "react-icons/md";
import OutsideClickHandler from "react-outside-click-handler";

export default function AdminSidebar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="pt-[10px] relative">
      <MdMenu
        className="absolute left-6 outline rounded-md outline-slate-500 z-10 size-7 hover:bg-purple/50 hover:text-black cursor-pointer 768px:hidden"
        onClick={() => setSidebarOpen(true)}
      />
      <OutsideClickHandler onOutsideClick={() => setSidebarOpen(false)}>
        <div
          className={`sidebar relative max-w-[300px] ${sidebarOpen ? "sidebar-open" : ""}`}
        >
          <MdArrowBack
            className="absolute top-3 right-2 size-6 cursor-pointer hover:w-10 hover:h-8 hover:text-gray 768px:hidden"
            onClick={() => setSidebarOpen(false)}
            tabIndex={1}
          />
          <ul className="768px:pt-5 max-768px:pt-[60px] px-2">
            <li>
              <Link
                href={"/admin"}
                className={`flex items-center py-1 rounded-lg px-1 gap-2 hover:text-gray ${pathname === "/admin" ? "bg-purple" : ""}`}
              >
                <Home className="size-5" /> <span>Admin Dashboard</span>
              </Link>
            </li>
          </ul>
        </div>
      </OutsideClickHandler>
    </div>
  );
}
