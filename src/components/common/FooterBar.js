import ReusableNavLink from "./ReusableNavLink";

function FooterBar() {
  const navList = [
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
    { text: "Terms of use", href: "/terms of use" },
  ];

  return (
    <footer className="bg-blue-1000 ">
      <span className="text-blue-500 uppercase text-s mt-6">Logo</span>
      <section className="navItem mt-6 flex flex-row space-x-6 space-x">
        {navList.map(({ text, href }) => (
          <ReusableNavLink key={href} text={text} href={href} />
        ))}
      </section>
    </footer>
  );
}

export default FooterBar;
