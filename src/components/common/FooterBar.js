import ReusableNavLink from "./ReusableNavLink";

function FooterBar() {
  const navList = [
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
    { text: "Terms of use", href: "/terms of use" },
  ];

  return (
    <footer className="bg-primary-dark flex justify-between">
      <span className="text-primary uppercase text-s mt-6">Logo</span>
      <section className="navItem mt-8  uppercase text-xs flex flex-row space-x-12 ">
        {navList.map(({ text, href }) => (
          <ReusableNavLink key={href} text={text} href={href} />
        ))}
      </section>
    </footer>
  );
}

export default FooterBar;
