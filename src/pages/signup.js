import CustomizableAside from "@/components/common/customizableAside";
import SignupFormContainer from "@/components/signupform/SignupFormContainer";

export default function signup() {
  const AVATAR_HEIGHT = 350;
  const AVATAR_WIDTH = 350;
  const photo = "/Signupimage.png";
  const header = "You are just a step away from an";
  const span = " amazing experience!";
  const info = "Let's get you started with joining our community";

  return (
    <main className="grid grid-cols-2 h-screen">
      <section>
        <SignupFormContainer />
      </section>
      <section className="bg-cover bg-[url('/AsideBackground.png')] flex justify-center">
        <div className="flex flex-col items-center justify-center px-14">
          <CustomizableAside
            height={AVATAR_HEIGHT}
            width={AVATAR_WIDTH}
            alt="Sign Up Logo"
            src={photo}
            avatarCustomClass="flex justify-center"
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
