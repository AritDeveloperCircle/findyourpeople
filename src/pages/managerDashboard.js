import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterBar from "@/components/common/FooterBar";
import DashboardListing from "@/components/singledashboardlisting/DashboardListing";
import useAuthContext from "@/context/useAuthContext";
import { firebaseAuth } from "@/firebase/config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import useManagerCollection from "@/hook/useManagerCollection";

function ManagerDashboard() {
  const { state, dispatch } = useAuthContext();
  const router = useRouter();
  const { listings } = useManagerCollection();
  const logout = () => {
    signOut(firebaseAuth).then(() => {
      dispatch({ type: "LOGOUT" });
      router.push("/");
    });
  };

  return (
    <div>
      {!state.authState && (
        <div className="flex items-center justify-center h-screen">
          <p className="text-center">loading...</p>
        </div>
      )}
      {state?.user?.userid === "" ||
        (state?.user === null && (
          <>
            <div className="bg-slate-200 h-screen flex items-center justify-center">
              <div className="w-4/12 bg-white p-6 text-center rounded">
                <h1 className="font-medium text-2xl mb-4">Manager Dashboard</h1>
                <p>
                  To view this page{" "}
                  <Link href="/login" className="text-violet-600">
                    login
                  </Link>{" "}
                </p>

                <p>or</p>
                <p>
                  Go to community listings page{" "}
                  <Link href="/" className="text-violet-600">
                    listings
                  </Link>
                </p>
              </div>
            </div>
          </>
        ))}
      {state?.user?.userid?.length > 0 && (
        <>
          <header className="flex items-center justify-between px-4 py-4">
            <h1>Findyourpeople.tech</h1>
            <ul className="flex items-center gap-3">
              <li className="bg-yellow-200 px-4 py-2 rounded">
                <button onClick={logout}>logout</button>
              </li>
            </ul>
          </header>
          <main className="bg-white container mx-auto  max-w-xs md:max-w-2xl lg:max-w-4xl">
            <div className="bg-primary-lite lg:my-10 lg:pt-10 rounded-md flex flex-col lg:flex-row sm-text-center">
              <div className="flex flex-col gap-5 p-10  lg:text-left">
                <h1 className="text-5xl text-blue-800">
                  Welcome Back, {state?.user?.displayName}
                </h1>
                <div className="mt-2">
                  <Link
                    href="#"
                    className="text-slate-700  hover:text-blue-500 cursor-pointer text-2xl"
                  >
                    Edit Profile
                  </Link>
                </div>
              </div>
              <div className=" md:flex lg:shrink-0 w-full max-w-lg h-40 lg:h-80 mx-auto relative ">
                <Image
                  className="min-[320px]:text-center max-[1240px]:inherit "
                  src="/manager-dashboard-character.png"
                  alt="manager character"
                  fill
                />
              </div>
            </div>

            <div className="bg-grey-lite p-4 rounded-md mb-8">
              <h1 className="text-lg lg:text-3xl p-2 text-center">
                Community Dashboard
              </h1>
              {listings?.length === 0 ? (
                <h2 className="text-2xl text-center my-8">No listings yet</h2>
              ) : (
                <div className="grid auto-rows-max grid-cols-1 md:grid-cols-2 md:max-w-3xl md:mx-auto gap-10 my-10">
                  {listings?.map((community, index) => (
                    <DashboardListing key={index} community={community} />
                  ))}
                </div>
              )}
              <Link
                href="/managerForm"
                className="text-2xl text-center block mx-auto  w-max"
              >
                + Add new community
              </Link>
            </div>
          </main>
        </>
      )}
      <FooterBar />
    </div>
  );
}

export default ManagerDashboard;
