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
    <nav className="sticky bg-white drop-shadow-sm  top-0 z-50 w-full h-20 sm:flex sm:justify-between  sm:items-center sm:p-4">
      <img
        src="/images/logo_esgMaster2.svg"
        alt="esg master logo"
        className="h-20 p-2 bg-center bg-cover sm:h-24 sm:ml-2 sm:mr-4 sm:mt-2 sm:mb-2"
      />

      <ul
        className={` ${showMenu ? "block" : "hidden"} sm:flex cursor-pointer`}
      >
        <li
          className={` text-black text-center p-5 hover:font-bold ${
            pathname == "/" ? "font-bold underline" : ""
          }`}
        >
          <Link href="/" className="lg:text-lg">
            Home
          </Link>
        </li>
        <li
          className={` text-center p-5 hover:font-bold ${
            pathname == "/about" ? "font-bold underline" : ""
          }`}
        >
          <Link href="/about" className="lg:text-lg">
            About
          </Link>
        </li>
        <li
          className={` text-center p-5 hover:font-bold ${
            pathname == "/service" ? "font-bold underline" : ""
          }`}
        >
          <Link href="/service" className="lg:text-lg">
            Services
          </Link>
        </li>
        <li
          className={` text-center p-5 hover:font-bold ${
            pathname == "/contact" ? "font-bold underline" : ""
          }`}
        >
          <Link href="/contact" className="lg:text-lg">
            Contact
          </Link>
        </li>
        <li
          className={` text-center p-5 hover:font-bold ${
            pathname == "/esg" ? "font-bold underline" : ""
          }`}
        >
          <Link href="/esg" className="lg:text-lg">
            ESG자가진단
          </Link>
        </li>
      </ul>

      <p className=" absolute top-2 right-2 sm:hidden " onClick={toggleMenu}>
        <HiMenu color="gray" />
      </p>
    </nav>
  );
}
