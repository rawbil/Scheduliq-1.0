"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {FaBars, FaChevronDown, FaX} from 'react-icons/fa6'
import {MdArrowDropDown} from 'react-icons/md'

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [signOn, setSignOn] = useState(false);
    const router = useRouter();

  return (
    <nav className="flex items-center justify-between pt-2 px-2">
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          width={60}
          height={60}
          alt="logo"
          priority
          className="h-[60px] object-cover w-[60px] max-540px:w-[40px] max-540px:h-[40px]"
        />
      </Link>
      <ul className={`flex items-center max-540px:block max-540px:fixed max-540px:bg-white max-540px:text-black max-540px:top-16 max-540px:right-4 max-540px:rounded-md max-540px:px-4 max-540px:py-2 ${navbarOpen ? "max-540px:block" : "max-540px:hidden"}`}>
        <li className=" mx-2.5 hover:text-gray font-medium">
          <Link href="/">Home</Link>
        </li>
        <li className="mx-2.5 hover:text-gray font-medium">
          <Link href={"/about"}>About</Link>
        </li>
        <li className="mx-2.5 hover:text-gray font-medium">
          <Link href={"/products"}>Products</Link>
        </li>
        <li className="mx-2.5 hover:text-gray font-medium">
          <Link href={"/contact-us"}>Contact Us</Link>
        </li>
      </ul>
      <div className="max-230px:relative">
        <MdArrowDropDown className="230px:hidden size-6 cursor-pointer" onClick={() => setSignOn(prevSign => !prevSign)} />
      <div className={`flex gap-2.5 items-center max-230px:flex max-230px:flex-col max-230px:absolute ${signOn ? "max-230px:flex max-230px:right-0" : "max-230px:hidden"}`}>
        <button className="bg-purple p-1 rounded-md font-medium px-2 border-2 border-purple hover:bg-purple/50 max-540px:px-1 max-540px:py-0.5 max-230px:whitespace-nowrap" onClick={() => router.push('/choose-user')}>
          Sign In
        </button>
        <button className="border-2 border-red p-1 px-2 hover:bg-red/50 rounded-md font-medium max-540px:px-1 max-540px:py-0.5" onClick={() => router.push('/choose-user')}>
          Guest
        </button>
      </div>
      </div>
      <div className="540px:hidden">
        {navbarOpen ? (<FaX role="button" className="hover:text-gray w-10 h-5" tabIndex={1} onClick={() => setNavbarOpen(prevOpen => !prevOpen)}/>) : (<FaBars role="button" className="hover:text-gray w-10 h-5" tabIndex={1} onClick={() => setNavbarOpen(prevOpen => !prevOpen)}/>)}

      </div>
    </nav>
  );
}
