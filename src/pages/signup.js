import CustomizableAside from "@/components/common/customizableAside";
import SignupFormContainer from "@/components/signupform/SignupFormContainer";

export default function signup() {
  const AVATAR_HEIGHT = 350;
  const AVATAR_WIDTH = 350;
  const photo = "/Signupimage.png";
  const header = "You are just a step away from an";
  const span = " amazing experience!";
  const info = "Let's get you started with finding your community";

  return (
    <>
      <main className="grid items-center md:items-stretch md:grid-cols-2 h-screen">
        <section className={`flex items-center justify-center `}>
          <SignupFormContainer />
        </section>
        <section className="hidden  md:bg-cover  md:bg-[url('/AsideBackground.png')] md:flex lg:justify-center">
          <div className="flex flex-col max-w-sm items-center justify-center">
            <CustomizableAside
              height={AVATAR_HEIGHT}
              width={AVATAR_WIDTH}
              alt="Sign Up Logo"
              src={photo}
              avatarCustomClass="mb-20"
              asideCustomClass="flex justify-center flex-col items-center justify-center"
              headerText={header}
              spanText={span}
              paragraphText={info}
              headerClassName="font-semibold text-4xl text-left leading-10 text-white"
              spanClassName="font-semibold block text-4xl leading-15  text-accent-blue"
              paragraphClassName="text-white/80 text-base text-left self-start tracking-wider mt-2"
            />
          </div>
        </section>
      </main>
    </>
  );
}
