import Link from "next/link";
import Image from "next/image";
import ReusableNavLink from "../common/ReusableNavLink";
import { useCollection } from "@/hook/useCollection";

export default function NavBar({ fetchData }) {

  const navList = [
    { text: "About", href: "/about" },
    { text: "home", href: "/" },
    { text: "Contact", href: "/contact" },   
  ];

  const { error } = useCollection();

  return (
    <div className="grid grid-cols-4 p-4 items-center gap-3">
      <Link href="/" className="">
        <Image
          src="/LOGO.png"
          alt="Find Your People Tech Logo"
          className="sm:h-full"
          width={80}
          height={28}
          priority
        />
      </Link>

      <div className="relative mt-2  col-span-4 row-span-2 md:col-span-2 md:mt-0 md:row-span-1">
        <Image
          src="/search-glass.svg"
          alt="Search Image"
          width={20}
          height={20}
          className="absolute top-4 left-3"
        />
        {error && <p>{error}</p>}
        <input
          className="px-8 py-2 w-full border-2 border-solid border-gray-300 rounded-lg "
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
      <div className="flex gap-6 ">
        <ul className="flex items-center justify-between gap-10">
          {navList.map(({ text, href }) => (
            <ReusableNavLink key={href} text={text} href={href} />
          ))}
        </ul>
      </div>
    </div>
  );
}
