"use client";

import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="sticky bg-white drop-shadow-sm  top-0 z-50 w-full h-20 sm:flex sm:justify-between sm:mx-2 sm:items-center sm:p-4">
      <img
        src="/images/logo_esgMaster2.svg"
        alt="esg master logo"
        className="h-20 p-2"
      />

      <ul
        className={` border-orange-800 border-8 ${
          showMenu ? "block" : "hidden"
        } sm:flex cursor-pointer`}
      >
        <li
          className={`bg-orange-100 text-black text-center p-5 hover:font-bold ${
            pathname == "/" ? "font-bold underline" : ""
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`bg-orange-200 text-center p-5 hover:font-bold ${
            pathname == "/about" ? "font-bold underline" : ""
          }`}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`bg-orange-300 text-center p-5 hover:font-bold ${
            pathname == "/service" ? "font-bold underline" : ""
          }`}
        >
          <Link href="/service">Services</Link>
        </li>
        <li
          className={`bg-orange-400 text-center p-5 hover:font-bold ${
            pathname == "/contact" ? "font-bold underline" : ""
          }`}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <p className=" absolute top-2 right-2 sm:hidden " onClick={toggleMenu}>
        <HiMenu color="gray" />
      </p>
    </nav>
  );
}
