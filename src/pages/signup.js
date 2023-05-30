import CustomizableAside from "@/components/common/customizableAside";
import SignupFormContainer from "@/components/signupform/SignupFormContainer";

export default function signup() {
  const AVATAR_HEIGHT = 300;
  const AVATAR_WIDTH = 300;
  const photo = "/Signupimage.png";
  const header = "You are just a step away from an";
  const span = " amazing experience!";
  const info = "Let's get you started with joining our community";

  return (
    <main className="grid items-center md:items-stretch md:grid-cols-2 h-screen">
      <section className={`flex items-center justify-center `}>
        <SignupFormContainer />
      </section>
      <section className="hidden  md:bg-cover  md:bg-[url('/AsideBackground.png')] md:flex lg:justify-center">
        <div className="flex flex-col items-center justify-center px-14">
          <CustomizableAside
            height={AVATAR_HEIGHT}
            width={AVATAR_WIDTH}
            alt="Sign Up Logo"
            src={photo}
            avatarCustomClass="flex justify-center mb-5"
            headerText={header}
            spanText={span}
            paragraphText={info}
            headerClassName="font-semibold text-5xl leading-15 tracking-wide text-white"
            spanClassName="font-semibold text-5xl leading-15 tracking-wide text-accent-blue"
            paragraphClassName="text-white text-base tracking-wider mt-2"
          />
        </div>
      </section>
    </main>
  );
}
