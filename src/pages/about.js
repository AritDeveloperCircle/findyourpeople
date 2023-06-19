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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque venenatis auctor pellentesque. Suspendisse potenti.
              Duis et felis porttitor, dignissim neque in, blandit risus. Nunc
              eu pharetra urna. Nam lacinia at sapien eu tempor. Vivamus eget
              neque id lorem dapibus bibendum. Nunc et mauris scelerisque,
              malesuada tellus quis, maximus dolor. Sed lectus augue, gravida eu
              velit vitae, maximus semper diam. Curabitur rutrum nisi sed velit
              ultricies varius. Vestibulum eget nunc velit. Nulla ullamcorper
              sodales tellus, eget malesuada ante luctus a. In efficitur lacus
              sed massa hendrerit, et pharetra ante bibendum. Sed at massa
              sollicitudin, placerat nulla sit amet, maximus mauris. Fusce
              interdum condimentum consequat.
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
