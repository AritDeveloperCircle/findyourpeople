import Link from "next/link";
import Image from "next/image";
import ReusableNavLink from "../common/ReusableNavLink";
import { useCollection } from "@/hook/useCollection";

export default function NavBar({ query, handleInputChange, data, fetchData }) {
  const navList = [
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];

  const { error } = useCollection();

  return (
    <div className=" relative flex items-center justify-evenly sm:text-left md:flex py-4 px-9 lg:flex-row flex-col">
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
      <div className="flex gap-6">
        <ul className="flex items-center justify-between gap-10">
          {navList.map(({ text, href }) => (
            <ReusableNavLink key={href} text={text} href={href} />
          ))}
        </ul>

        <div className=" flex px-3 min-w-fit relative">
          <div className="mr-2 absolute left-5 top-1/2 transform -translate-y-1/2">
            <Image
              src="/search-glass.svg"
              alt="Search Image"
              width={20}
              height={20}
            />
          </div>

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
          {/* <button
            type="submit"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-gradient-lite-blue to-gradient-dark-blue text-white py-2 px-6 rounded-xl hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={() => fetchData(query, data)}
          >
            SEARCH
          </button> */}
        </div>
      </div>
    </div>
  );
}
