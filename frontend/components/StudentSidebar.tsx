"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, Speaker, TrendingUp } from "react-feather";
import { BsArrowBarLeft } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import {
  FaUserTie,
  FaClipboardUser,
  FaBookOpen,
  FaListCheck,
  FaUser,
} from "react-icons/fa6";
import {
  MdArrowBack,
  MdMenu,
  MdCalendarMonth,
  MdNotifications,
} from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { TfiBlackboard } from "react-icons/tfi";
import OutsideClickHandler from "react-outside-click-handler";

export default function StudentSidebar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="pt-[10px] relative">
      <MdMenu
        className="fixed bg-default left-6 outline rounded-md outline-slate-500 z-10 size-7 hover:bg-purple/50 hover:text-black cursor-pointer 768px:hidden"
        onClick={() => setSidebarOpen(true)}
      />
      <OutsideClickHandler onOutsideClick={() => setSidebarOpen(false)}>
        <div
          className={`sidebar relative max-w-[300px] ${sidebarOpen ? "sidebar-open" : ""}`}
        >
          <button className="absolute top-3 left-2 gap-1 hover:text-white cursor-pointer text-gray flex items-center border p-1 rounded-md">
            <BsArrowBarLeft />
            Logout
          </button>
          <MdArrowBack
            className="absolute top-3 right-2 size-6 cursor-pointer hover:w-10 hover:h-8 hover:text-gray 768px:hidden"
            onClick={() => setSidebarOpen(false)}
            tabIndex={1}
          />
          <ul className="768px:pt-20 max-768px:pt-[60px] px-2 flex flex-col gap-5 pb-5">
            <li>
              <Link
                href={"/students"}
                className={`flex items-center py-1 rounded-lg px-1 gap-2 hover:text-gray ${pathname === "/students" ? "bg-purple" : ""}`}
              >
                <Home className="size-5" /> <span>Student Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                href={"/students/classes"}
                className={`flex items-center py-1 rounded-lg px-1 gap-2 hover:text-gray ${pathname === "/students/classes" ? "bg-purple" : ""}`}
              >
                <TfiBlackboard className="size-5" /> <span>Classes</span>
              </Link>
            </li>

            <li>
              <Link
                href={"/students/assignments"}
                className={`flex items-center py-1 rounded-lg px-1 gap-2 hover:text-gray ${pathname === "/students/assignments" ? "bg-purple" : ""}`}
              >
                <FaClipboardUser className="size-5" /> <span>Assignments</span>
              </Link>
            </li>

            <li>
              <Link
                href={"/students/exams"}
                className={`flex items-center py-1 rounded-lg px-1 gap-2 hover:text-gray ${pathname === "/students/exams" ? "bg-purple" : ""}`}
              >
                <FaBookOpen className="size-5" /> <span>Exams</span>
              </Link>
            </li>

            <li>
              <Link
                href={"/students/performance"}
                className={`flex items-center py-1 rounded-lg px-1 gap-2 hover:text-gray ${pathname === "/students/performance" ? "bg-purple" : ""}`}
              >
                <TrendingUp className="size-5" /> <span>Performance </span>
              </Link>
            </li>

            <li>
              <Link
                href={"/students/attendance"}
                className={`flex items-center py-1 rounded-lg px-1 gap-2 hover:text-gray ${pathname === "/students/attendance" ? "bg-purple" : ""}`}
              >
                <FaListCheck className="size-5" /> <span>Attendance</span>
              </Link>
            </li>

            <li>
              <Link
                href={"/students/event-calender"}
                className={`flex items-center py-1 rounded-lg px-1 gap-2 hover:text-gray ${pathname === "/students/event-calender" ? "bg-purple" : ""}`}
              >
                <MdCalendarMonth className="size-5" />{" "}
                <span>Event Calender</span>
              </Link>
            </li>

            <li>
              <Link
                href={"/students/library"}
                className={`flex items-center py-1 rounded-lg px-1 gap-2 hover:text-gray ${pathname === "/students/library" ? "bg-purple" : ""}`}
              >
                <SiBookstack className="size-5" /> <span>Library</span>
              </Link>
            </li>

            <li>
              <Link
                href={"/students/announcements"}
                className={`flex items-center py-1 rounded-lg px-1 gap-2 hover:text-gray ${pathname === "/students/announcements" ? "bg-purple" : ""}`}
              >
                <MdNotifications className="size-5" />{" "}
                <span>Announcements</span>
              </Link>
            </li>

            <li>
              <Link
                href={"/students/profile"}
                className={`flex items-center py-1 rounded-lg px-1 gap-2 hover:text-gray ${pathname === "/students/profile" ? "bg-purple" : ""}`}
              >
                <FaUser className="size-5" />{" "}
                <span>Settings &amp; Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </OutsideClickHandler>
    </div>
  );
}
