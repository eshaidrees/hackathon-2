import React from "react";
import Link from "next/link";
import { Sheet, SheetContent,SheetTitle, SheetTrigger } from "../components/ui/sheet";
import { LuAlignJustify } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";



export default function Header() {
  return (

    <div className="flex items-center h-[92px] justify-end gap-[300px] border-b border-blue-900 px-4 lg:px-[30px] w-full">
    {/* Navigations */}
    <ul className="hidden lg:flex items-center gap-[60px] text-black">
      <li className="flex items-center gap-[8px]">
        <Link href="/">Home</Link>
      </li>
      <li className="flex items-center gap-[8px]">
        <Link href="/shop">Shop</Link>
      </li>
      <li className="flex items-center gap-[8px]">
        <Link href="">About</Link>
      </li>
      <li className="flex items-center gap-[8px]">
        <Link href="/contact">Contact</Link>
      </li>
    </ul>

    {/* Icons */}
    <div className="hidden sm:flex gap-6 p-2">
      <Link href="/Account"><FaRegUser className="w-6 h-5" /></Link>
      <IoSearchOutline className="w-6 h-6" />
      <FaRegHeart className="w-6 h-5" />
      <Link href="/Cart"><RiShoppingCart2Line className="w-6 h-5" /></Link>
    </div>

    {/* Mobile Menu */}
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <LuAlignJustify className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>Menu</SheetTitle>
        <ul className="flex flex-col gap-4 mt-5 list-none">
          <li className="flex items-center">
            <Link href="/">Home</Link>
          </li>
          <li className="flex items-center">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="flex items-center">
            <Link href="">About</Link>
          </li>
          <li className="flex items-center">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  </div>
  );
}

