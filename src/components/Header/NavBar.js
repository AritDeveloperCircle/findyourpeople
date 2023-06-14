import Link from "next/link";
import Image from "next/image";
import ReusableNavLink from "../common/ReusableNavLink";
import { useCollection } from "@/hook/useCollection";

export default function NavBar({ fetchData }) {

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

        </div>
      </div>
    </div>
  );
}
