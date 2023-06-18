import NavBar from "@/components/Header/NavBar";
import FooterBar from "@/components/common/FooterBar";
import InfoCard from "@/components/common/InfoCard";
import Achele from "../../public/AvatarImages/Achele.jpg";
import Chibuzo from "../../public/AvatarImages/Chibuzo.jpg";
import Neka from "../../public/AvatarImages/Neka.jpg";
import Sheyi from "../../public/AvatarImages/Sheyi.jpg";
import Taylor from "../../public/AvatarImages/Taylor.png";
import SmilingWoman from "../../public/woman-smile.png";
import Image from "next/image";

export default function about() {
  const photo = "/Signupimage.png";
  const height = 100;
  const width = 100;
  const imageHeight = 350;
  const imageWidth = 350;
  const alt = "avatar image";

  return (
    <div>
      <NavBar />
      <main className="grid items-center md:items-stretch md:grid-cols-2 h-screen">
        <section className={`text-center justify-center `}>
          <h2 className="text-4xl font-semibold text-primary mb-8">
            What we Do.
          </h2>
          <div className="flex justify-center ">
            <Image
              src={SmilingWoman}
              width={imageWidth}
              height={imageHeight}
              alt="Woman-smiling"
              className="rounded-lg"
            />
          </div>

          <p>Explain what we do.</p>
        </section>
        <section className="flex max-w-sm justify-center">
          <div className="flex flex-col items-center">
            <h1 className="flex text-4xl font-semibold text-primary justify-center mb-8">
              Our people.
            </h1>
            <div className="grid grid-cols-2 gap-7">
              <InfoCard
                src={Achele}
                height={height}
                width={width}
                alt={alt}
                avatarCustomClass="rounded-full"
                avatarImage="rounded-full overflow-hidden"
                name="Ojoachele Onuh"
                twitter="@ojoachele"
                linkedin="achele"
              />
              <InfoCard
                src={Chibuzo}
                height={height}
                width={width}
                alt={alt}
                avatarCustomClass="rounded-full"
                name="Chibuzo Idia"
                twitter="@Chibuzocaren"
                linkedin="chibuzo-caren-481397bb"
              />
              <InfoCard
                src={Neka}
                height={height}
                width={width}
                alt={alt}
                avatarCustomClass="rounded-full"
                name="Taneka Blair"
                twitter="@nekathedev"
                linkedin="taneka-blair"
              />
              <InfoCard
                src={Sheyi}
                height={height}
                width={width}
                alt={alt}
                avatarCustomClass="rounded-full"
                name="Ajewole Oluwaseyi"
                twitter="@sheyitofunmi"
                linkedin="ajewole-oluwaseyi"
              />
              <InfoCard
                src={Taylor}
                height={height}
                width={width}
                alt={alt}
                avatarCustomClass="rounded-full"
                name="Taylor D. Jones"
                twitter="@TayTechJ"
                linkedin="Taylor D Jones"
              />
              <InfoCard
                src={photo}
                height={height}
                width={width}
                alt={alt}
                avatarCustomClass="rounded-md"
                name="Ibimina Hart"
                twitter="@IbiminaaH"
                linkedin="Taylor D Jones"
              />
            </div>
          </div>
        </section>
      </main>

      <FooterBar />
    </div>
  );
}
