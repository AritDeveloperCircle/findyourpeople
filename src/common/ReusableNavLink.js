import Link from "next/link";

function ReusableNavLink({ href, text }) {
  return (
    <nav>
      <Link href={href}>{text}</Link>
    </nav>
  );
}

export default ReusableNavLink;
