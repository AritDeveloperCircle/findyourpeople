import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <section className="bg-white flex flex-col justify-center">
      <div className="flex items-center relative my-8 mx-4">
        <div>
          <Image
            src="/arrow.png"
            className="absolute md:left-30 md:top-16 hidden md:block lg:left-40 lg:top-28 lg:block"
            height={107}
            width={80}
            alt="looping arrow pointing downwards"
          />
        </div>
        <div className="flex flex-col max-w-4xl mx-auto items-center space-y-10 justify-center md:text-sm">
          <div className="font-bold md:text-3xl lg:text-6xl  text-center ">
            <h1>
              Discover various{" "}
              <span className="text-primary bold">Tech Communities</span> and
              connect with people from all around the world!
            </h1>
          </div>
          <p className="px-4 lg:text-xl md:px-2 lg:visible text-center sm:px-20  xl:px-20">
            Locate different techies across the globe; build your connections
            and network by browsing our directory of tech communities
          </p>

          <Link
            href="/signup"
            className="bg-primary rounded-lg text-white text-2xl block px-6 text-center py-3 "
          >
            Add Your Tech Community
          </Link>
        </div>
        <div>
          <Image
            src="/bulb.png"
            className="absolute md:right-8 md:bottom-6  lg:right-12 mix-blend-hard-light lg:bottom-20 hidden md:block"
            height={108}
            width={105}
            alt="light bulb"
          />
        </div>
      </div>

      <div className="bg-[url('/bkgd-overlay-image.png')] bg-cover bg-no-repeat bg-center  ">
        <div className="flex p-14  gap-6 items-center xl:flex-row overflow-scroll">
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
