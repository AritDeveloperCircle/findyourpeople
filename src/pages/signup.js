import CustomizableAside from "@/components/common/customizableAside";
import SignupFormContainer from "@/components/signupform/SignupFormContainer";

export default function signup() {
  const AVATAR_HEIGHT = 100;
  const AVATAR_WIDTH = 100;
  const photo = "/image-placeholder.png";
  const header = "Lorem ipsum dolor sit amet";
  const info =
    "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet";

  return (
    <main className="grid grid-cols-2 mt-10">
      <section>
        <SignupFormContainer />
      </section>
      <section className="bg-zinc-300">
        <div className="text-center">
          <CustomizableAside
            height={AVATAR_HEIGHT}
            width={AVATAR_WIDTH}
            alt="Sign Up Logo"
            src={photo}
            headerText={header}
            paragraphText={info}
          />
        </div>
      </section>
    </main>
  );
}
