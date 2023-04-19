import Link from "next/link";

function Navigation(props) {
  return (
    <nav>
      <Link href={props.href}>{props.text}</Link>
    </nav>
  );
}

export default Navigation;
