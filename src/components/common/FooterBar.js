import ReusableNavLink from "./ReusableNavLink";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function FooterBar() {
  const router = useRouter();
  const navList = [
    { text: "About", href: "/about" },
    {
      text: "Terms of use",
      href: "/documents/terms",
      query: { from: router.asPath },
    },
  ];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark px-3 md:px-8 table-fixed w-[90] h-32">
      <div className="flex justify-between items-center">
        <span className="text-logo-blue uppercase text-s mt-6">
          <Link href="/">
                <Image
                src="/find-your-people-logo.png"
                alt="Find Your People Tech Logo"
                className="sm:h-full"
                width={150}
                height={50}
                priority
                />
          </Link>
        </span>
        <section className="navItem mt-8 text-footer-gray uppercase text-xs flex flex-row space-x-12 ">
          {navList.map(({ text, href }) => (
            <ReusableNavLink key={href} text={text} href={href} />
          ))}
        </section>
      </div>
      <div className="flex items-center gap-4 md:gap-12  py-3 border-solid border-t-2 mt-6 border-footer-gray text-footer-gray">
        <span>Findyourpeople.tech {year}</span>
        <span>Privacy policy</span>
      </div>
    </footer>
  );
}

export default FooterBar;
