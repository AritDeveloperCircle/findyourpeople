import Link from "next/link";
import Image from "next/image";
import ReusableNavLink from "../common/ReusableNavLink";
import { useCollection } from "@/hook/useCollection";
import { useState } from "react";

export default function NavBar({ fetchData }) {
  const navList = [
    { text: "About", href: "/about" },
    { text: "Home", href: "/" },
    { text: "Contact", href: "/contact" },
    { text: "Login", href: "/login" },
    { text: "Sign up", href: "/signup" },
  ];
  const [open, setOpen] = useState(false);
  const { error } = useCollection();

  return (
    <div className=" relative grid grid-cols-5 gap-4 sm:text-left md:flex py-4 px-3 lg:flex-row lg:justify-between">
      <Link href="/">
        <Image
          src="/LOGO.png"
          alt="Find Your People Tech Logo"
          className="sm:h-full"
          width={80}
          height={28}
          priority
        />
      </Link>
      <div className="flex gap-6 col-span-5">
        <div className=" flex min-w-fit relative">
          <Image
            src="/search-glass.svg"
            alt="Search Image"
            width={20}
            height={20}
            className="mr-2 absolute left-3 top-1/2 transform -translate-y-1/2"
          />
          {error && <p>{error}</p>}
          <input
            className="pl-8 h-10 border-2 border-solid border-gray-300 rounded-lg "
            id="searchInputBar"
            type="text"
            placeholder="Search for..."
            name="search"
            aria-label="Search through communities"
            size="35"
            required
            onChange={fetchData}
          />
        </div>
      </div>
      <nav
        className={`${
          open ? "fixed left-0 top-0 h-full w-full p-3 z-50 bg-white" : "hidden"
        } lg:relative lg:block lg:h-auto lg:w-auto lg:top-auto lg:left-auto`}
      >
        <ul className=" lg:flex lg:items-center lg:justify-between lg:gap-10">
          {navList.map(({ text, href }) => (
            <ReusableNavLink key={href} text={text} href={href} />
          ))}
        </ul>
      </nav>
      <button
        onClick={() => setOpen(!open)}
        className="z-50 grid- col-start-4 col-span-2 row-start-1 lg:hidden "
      >
        {open ? "close menu" : "open menu"}
      </button>
    </div>
  );
}
