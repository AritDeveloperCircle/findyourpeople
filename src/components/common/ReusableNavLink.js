import Link from "next/link";

function ReusableNavLink({ href, text }) {
  return (
    <nav className = "hover:text-amber-200 active:font-bold, active:text-amber-500 visited:text-purple-500">
      <Link href={href}>{text}</Link>
    </nav>
  );
}

export default ReusableNavLink;
