import Link from 'next/link';
import Image from 'next/image';
import ReusableNavLink from '../common/ReusableNavLink';

export default function NavBar() {
    const navList = [
        { text: "Login", href: "/login" },
        { text: "Sign up", href: "/signup" },
      ];

    return (
      <div className=" relative flex items-center justify-between place-content-center sm:text-left md:flex py-8 px-8 ">
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

        <form className="flex relative  rounded-xl" role="search">
          <Image
            src="/search-glass.svg"
            alt="Search Image"
            width={20}
            height={20}
            className="absolute left-2 top-3 mix-blend-difference"
          />
          <input
            className="border-2 p-2 px-6 border-solid border-gray-300 rounded-l-xl w-4/5 border-r-0"
            id="searchInputBar"
            type="text"
            placeholder="Search for..."
            name="search"
            aria-label="Search through communities"
            size="40"
            required
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-800 to-sky-950 text-white py-2 px-6 rounded-r-xl  hover:bg-gray-500 active:bg-gray-600 focus: outline-none focus:ring-2 focus:ring-blue-300"
          >
            SEARCH
          </button>
        </form>
        <ul className="flex items-center justify-between gap-10">
          {navList.map(({ text, href }) => (
            <ReusableNavLink key={href} text={text} href={href} />
          ))}
        </ul>
      </div>
    );
}
