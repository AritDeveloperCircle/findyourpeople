import Link from "next/link";

function ReusableNavLink({ href, text }) {
  return (
      <Link
        className="block mb-4 hover:text-amber-200 active:font-bold, active:text-amber-500 visited:text-purple-500"
        href={href}
      >
        {text}
      </Link>
  );
}

export default ReusableNavLink;
