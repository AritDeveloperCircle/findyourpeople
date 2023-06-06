import Link from "next/link";
import Image from 'next/image';

function Hero() {
  return (
    <section className="bg-white flex flex-col justify-center">
      <div className="flex items-center relative gap-20 my-8 mx-4">
        <div>
          <Image
            src="/arrow.png"
            className="absolute left-40 top-28 sm:invisible lg:visible"
            height={107}
            width={80}
            alt="looping arrow pointing downwards"
          />
        </div>
        <div className="flex flex-col max-w-4xl mx-auto items-center space-y-10 justify-center md:text-sm">
          <div className="text-6xl  font-medium text-center ">
            <h1>
              Join the <span className="text-primary bold">Tech Community</span>{" "}
              and get to discover people from all around the world!
            </h1>
          </div>
          <p className="px-4 text-xl md:px-2 lg:visible text-center sm:px-20  xl:px-20">
            Get to find different techies across the globe, build connections,
            interactions and networks by joining the community of developers and
            designers.
          </p>
          <div className="flex justify-center">
            <Link
              href="/register"
              className="bg-primary rounded-lg text-white text-2xl px-10 py-3 "
            >
              Click to Register
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="/bulb.png"
            className="absolute right-12 mix-blend-hard-light bottom-20 sm:invisible lg:visible"
            height={108}
            width={105}
            alt="light bulb"
          />
        </div>
      </div>

      <div className="bg-[url('/bkgd-overlay-image.png')] bg-cover bg-no-repeat bg-center ">
        <div className="flex flex-col p-20 justify-evenly gap-6 items-center xl:flex-row">
          <Image
            src="/woman-smile.png"
            height={500}
            width={500}
            className="z-1"
            alt="woman smiling"
          />
          <Image
            src="/laptops.png"
            height={500}
            width={500}
            className="z-1"
            alt="laptops with sitting around table"
          />
          <Image
            src="/sketch.png"
            height={500}
            width={500}
            className="z-1"
            alt="person sketching on notepad"
          />
        </div>
        <div className="flex justify-center pt-1 pb-12 px-14">
          <Image
            src="/hero-text.png"
            height={300}
            width={600}
            alt="descriptive words about hero images"
            className="z-1"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
