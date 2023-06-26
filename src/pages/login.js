import LoginAside from "@/components/loginform/loginAside";
import LoginFormContainer from "@/components/loginform/LoginFormContainer";
import Image from "next/image";
import Link from "next/link";

export default function login() {
  const AVATAR_HEIGHT = 350;
  const AVATAR_WIDTH = 350;
  const photo = "/SignIn.png";
  const header = "Start your";
  const span = " Tech Community!";
  const info = "Find your people in tech, connect, brainstorm and create.";

  return (
    <>
      <main className="grid items-center md:items-stretch md:grid-cols-2 h-screen">
        <section className="hidden  md:bg-cover  md:bg-[url('/AsideBackground.png')] md:flex lg:justify-center">
          <div className="flex flex-col max-w-sm items-center justify-center">
            <LoginAside
              height={AVATAR_HEIGHT}
              width={AVATAR_WIDTH}
              alt="Sign Up Logo"
              src={photo}
              avatarCustomClass="mt-20"
              headerText={header}
              spanText={span}
              paragraphText={info}
              headerClassName="font-semibold text-white  text-5xl leading-[3.625rem]"
              spanClassName="font-semibold text-5xl leading-15 tracking-wide text-accent-blue block whitespace-nowrap overflow-hidden overflow-ellipsis"
              paragraphClassName="text-white/80 text-base self-start  tracking-wider mt-2 whitespace-nowrap overflow-hidden overflow-ellipsis"
            />
          </div>
        </section>

        <section className={`flex items-center justify-center `}>
          <LoginFormContainer />
        </section>
      </main>
    </>
  );
}
