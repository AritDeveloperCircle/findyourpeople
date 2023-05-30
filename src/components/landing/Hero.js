import Link from "next/link";
import Image from 'next/image';
import styles from "./hero.module.css";
function Hero() {
  return (
    <section className="bg-white text-center ">
      <div className="flex flex-row justify-center items-center gap-20 px-96 py-36 md:text-left">
        <div>
          <Image 
            src="/arrow.png"
            className="pt-15 sm:invisible lg:visible"
            height={100}
            width={150}
            alt="looping arrow pointing downwards"
          />
        </div>
        <div className="flex flex-col gap-12 justify-center">
          <div className="text-6xl">
            <h1>Join the <span className="text-primary bold">Tech Community</span>and get to discover people from all around the world!</h1>
          </div>
          <p className="px-44 text-xl md:px-2 overflow-hidden md:visible">Get to find different techies across the globe, build connections, interactions and networks by joining the community of developers and designers.</p>
          <div>
            <Link href="/register" className="bg-primary rounded-lg text-white text-2xl px-10 py-3">
              Click to Register
            </Link>
          </div>
          
        </div>
        <div>
          <Image
            src="/bulb.png"
            className="pt-44 sm:invisible lg:visible"
            height={175}
            width={175}
            alt="light bulb"
          />
        </div>
          
      </div>
    </section>
  );
}

export default Hero;
