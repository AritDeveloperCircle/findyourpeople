import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
    return (
        <div className="text-7xl py-80 text-footer-grey font-light flex flex-col justify-center items-center gap-20 bg-gradient-to-r from-blue-500 min-h-screen">
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
            <h1>404 - Page Not Found</h1>
            <Link href={"/"}> Go Home</Link>
        </div>
    )
    
}