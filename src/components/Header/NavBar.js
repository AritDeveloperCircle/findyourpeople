import Link from "next/link";
import Image from "next/image";
import ReusableNavLink from "../common/ReusableNavLink";
import { useCollection } from "@/hook/useCollection";
import { useState } from "react";

export default function NavBar({ fetchData }) {
  const navList = [
    { text: "About", href: "/about" },
    { text: "Login", href: "/login" },
    { text: "Sign up", href: "/signup" },
  ];
  const [open, setOpen] = useState(false);
  const { error } = useCollection();

  return (
    <div className=" relative grid grid-cols-5 items-center gap-4 sm:text-left md:flex py-4 px-3 md:flex-row md:justify-between md:px-10">
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
      <div className="col-span-5">
        <div className="relative">
          <Image
            src="/search-glass.svg"
            alt="Search Image"
            width={20}
            height={20}
            className="mr-2 absolute left-3 top-1/2 transform -translate-y-1/2"
          />
          {error && <p>{error}</p>}
          <input
            className="pl-8 w-full px-4 py-2 border-2 border-solid border-gray-300 rounded-lg "
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
        } md:relative md:block md:h-auto md:w-auto md:top-auto md:left-auto`}
      >
        <ul className=" md:flex md:items-center md:justify-between md:gap-10">
          {navList.map(({ text, href }) => (
            <ReusableNavLink key={href} text={text} href={href} />
          ))}
        </ul>
      </nav>
      <button
        onClick={() => setOpen(!open)}
        className={`z-50 col-start-5 self-end row-start-1 w-10 h-6 bg-no-repeat bg-center md:hidden ${open ? "bg-close-icon":"bg-menu-icon"}` }
        aria-label={open ? "close menu" : "open menu"}
      ></button>
    </div>
  );
}
