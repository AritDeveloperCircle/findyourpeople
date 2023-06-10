import ReusableNavLink from "./ReusableNavLink";

function FooterBar() {
  const navList = [
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
    { text: "Terms of use", href: "/terms of use" },
  ];
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark px-3 md:px-8">
      <div className="flex justify-between items-center">
        <span className="text-logo-blue uppercase text-s mt-6">
          Logo
        </span>
        <section className="navItem mt-8 text-footer-gray uppercase text-xs flex flex-row space-x-12 ">
          {navList.map(({ text, href }) => (
            <ReusableNavLink key={href} text={text} href={href} />
          ))}
        </section>
      </div>
      <div className="flex items-center gap-4 md:gap-12  py-3 border-solid border-t-2 mt-6 border-footer-gray text-footer-gray">
        <span>Find your people.tech {year}</span>
        <span>Privacy policy</span>
      </div>
    </footer>
  );
}

export default FooterBar;
