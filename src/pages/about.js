import NavBar from "@/components/Header/NavBar";
import FooterBar from "@/components/common/FooterBar";
import InfoCard from "@/components/common/InfoCard";
import Achele from "../../public/AvatarImages/Achele.jpg";
import Chibuzo from "../../public/AvatarImages/Chibuzo.jpg";
import Neka from "../../public/AvatarImages/Neka.jpg";
import Sheyi from "../../public/AvatarImages/Sheyi.jpg";
import Taylor from "../../public/AvatarImages/Taylor.png";
import Ibimina from "../../public/AvatarImages/Ibimina.jpg";
import SmilingWoman from "../../public/woman-smile.png";
import Image from "next/image";

export default function about() {
  const height = 100;
  const width = 100;
  const imageHeight = 350;
  const imageWidth = 350;
  const alt = "avatar image";

  return (
    <div>
      <NavBar />
      <main className="grid  md:grid-cols-2 min-h-screen ">
        <section className="flex  justify-center md:col-span-1">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl text-center font-semibold text-primary mb-4">
              What we Do.
            </h2>
            <div className="flex justify-center">
              <Image
                src={SmilingWoman}
                width={imageWidth}
                height={imageHeight}
                alt="Woman-smiling"
                className="rounded-lg mt-8"
              />
            </div>

            <p className="p-10 text-center mx-auto">
              Findyourpeople is a remarkable platform that empowers individuals
              to seamlessly discover and join various technology communities.
              Created with the vision of fostering collaboration and growth
              within the tech ecosystem, Findyourpeople is especially notable as
              it was developed by an inspiring group of women. These talented
              developers saw a gap in the market and decided to create a
              solution that would bridge the divide, enabling tech enthusiasts,
              professionals, and beginners alike to find communities that
              resonate with their interests and aspirations. Findyourpeople not
              only serves as a tool for finding tech communities but also stands
              as a testament to the power of diversity and female representation
              in the tech industry.
            </p>
          </div>
        </section>
        <section className="flex  justify-center md:col-span-1">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-semibold text-primary text-center justify-center mb-10">
              Our people.
            </h1>
            <div className="grid grid-cols-2 gap-7 pb-4 ">
              <InfoCard
                src={Achele}
                height={height}
                width={width}
                alt={alt}
                name="Ojoachele Onuh"
                twitter="@ojoachele"
                linkedin="achele"
              />
              <InfoCard
                src={Chibuzo}
                height={height}
                width={width}
                alt={alt}
                name="Chibuzo Idia"
                twitter="@Chibuzocaren"
                linkedin="chibuzo-caren-481397bb"
              />
              <InfoCard
                src={Neka}
                height={height}
                width={width}
                alt={alt}
                name="Taneka Blair"
                twitter="@nekathedev"
                linkedin="taneka-blair"
              />
              <InfoCard
                src={Sheyi}
                height={height}
                width={width}
                alt={alt}
                name="Ajewole Oluwaseyi"
                twitter="@sheyitofunmi"
                linkedin="ajewole-j-oluwaseyi-71b726235"
              />
              <InfoCard
                src={Taylor}
                height={height}
                width={width}
                alt={alt}
                name="Taylor D. Jones"
                twitter="@TayTechJ"
                linkedin="-taylor-d-jones"
              />
              <InfoCard
                src={Ibimina}
                height={height}
                width={width}
                alt={alt}
                name="Ibimina Hart"
                twitter="@IbiminaaH"
                linkedin="ibimina-hart"
              />
            </div>
          </div>
        </section>
      </main>

      <FooterBar />
    </div>
  );
}
