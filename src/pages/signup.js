import CustomizableAside from "@/components/common/customizableAside";
import SignupFormContainer from "@/components/signupform/SignupFormContainer";

export default function signup() {
  const AVATAR_HEIGHT = 350;
  const AVATAR_WIDTH = 350;
  const photo = "/Signupimage.png";
  const header = "You're just one step away from an amazing experience";
  const info = "Let's get you started with joining our community";

  return (
    <main className="grid grid-cols-2 min-h-screen">
      <section>
        <SignupFormContainer />
      </section>
      <section className="bg-cover bg-[url('/SignupBackground.jpg')]">
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
