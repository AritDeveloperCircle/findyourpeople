import Link from "next/link";
import Image from 'next/image';
import styles from "./hero.module.css";
function Hero() {
  return (
    <section className="bg-white">
      <div className="flex flex-row items-center gap-20 px-96 py-36 sm:text-left md:text-left ">
        <div className="">
          <Image 
            src="/arrow.png"
            className="pt-44 overflow sm:overflow-hidden lg:visible"
            height={100}
            width={150}
            alt="looping arrow pointing downwards"
          />
        </div>
        <div className="flex flex-col items-center gap-12 justify-center">
          <div className="text-6xl text-center">
            <h1>Join the <span className="text-primary bold">Tech Community</span>and get to discover people from all around the world!</h1>
          </div>
          <p className="px-44 text-xl md:px-2 lg:visible text-center">Get to find different techies across the globe, build connections, interactions and networks by joining the community of developers and designers.</p>
          <div className="flex justify-center">
            <Link href="/register" className="bg-primary rounded-lg text-white text-2xl px-10 py-3 ">
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
      
      <div className="bg-blue-background bg-cover       bg-no-repeat  bg-center flex p-20 justify-evenly gap-6">
        <Image 
              src="/woman-smile.png"
              height={500}
              width={500}
              className="z-1"
            />
            <Image 
              src="/laptops.png"
              height={500}
              width={500}
              className="z-1"
            />
            <Image 
              src="/sketch.png"
              height={500}
              width={500}
              className="z-1"
            />
          </div>
          <div className="flex justify-center py-12">
            <Image 
            src="/hero-text.png"
            height={300}
            width={600}
            alt="descriptive words about hero images"
            />
          </div>
      </div>
    </section>
  );
}

export default Hero;
