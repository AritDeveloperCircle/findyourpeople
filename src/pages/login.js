import LoginAside from "@/components/loginform/loginAside";
import LoginFormContainer from "@/components/loginform/LoginFormContainer";
import Image from "next/image";
import Link from "next/link";

export default function login() {
  const AVATAR_HEIGHT = 500;
  const AVATAR_WIDTH = 500;
  const photo = "/SignIn.png";
  const header = "Join Our";
  const span = " Tech Community!";
  const info = "Find your people in tech, connect, brainstorm and create.";

  
    return (
      <>
        <Link href="/"> home</Link>
        <Link href="/signup"> signup</Link>
        <main className="flex min-h-screen font-[var(--font-urbanist)]">
          <section className="relative w-1/2">
            <Image
              src="/AsideBackground.png"
              alt=""
              width="600"
              height="600"
              className="absolute inset-0 h-full z-0 w-full object-cover"
            />
            <div className="relative flex flex-col justify-center z-[2] pt-[5rem] px-12 pb-10">
              <LoginAside
                height={AVATAR_HEIGHT}
                width={AVATAR_WIDTH}
                alt="Sign Up Logo"
                src={photo}
                avatarCustomClass="mt-[90px]"
                headerText={header}
                spanText={span}
                paragraphText={info}
                headerClassName="text-white  text-[3.25rem] leading-[3.625rem]"
                spanClassName="font-semibold text-5xl leading-15 tracking-wide text-accent-blue block"
                paragraphClassName="text-white/80 text-base tracking-wider mt-2"
              />
            </div>
          </section>

          <section className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <LoginFormContainer />
          </section>
        </main>
      </>
    );
};



