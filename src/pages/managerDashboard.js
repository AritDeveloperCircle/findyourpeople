import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/Header/NavBar";
import FooterBar from "@/components/common/FooterBar";
import DashboardListing from "@/components/singledashboardlisting/DashboardListing";
import CustomizableButton from "@/components/common/CustomizableButton";
import useAuthContext from "@/context/useAuthContext";
import { firebaseAuth, firebaseDb } from "@/firebase/config";
import { getDocs, collection } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

function ManagerDashboard() {
  const { state, dispatch } = useAuthContext();
  const [listings, setListings] = useState([]);
  const router = useRouter();

  const logout = () => {
    
    signOut(firebaseAuth).then(() => {
      dispatch({ type: "LOGOUT" });
      router.push("/");
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(
        collection(
          firebaseDb,
          "MANAGERS",
          `${state?.user?.userid}`,
          "MANAGER_LISTINGS"
        )
      );
      setListings(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, [state?.user?.userid]);

  return (
    <div>
      {!state.authState && (
        <div className="flex items-center justify-center h-36">
          <p className="text-center">loading...</p>
        </div>
      )}
      {state?.user?.userid === "" ||
        (state.user === null && (
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
          <CustomizableButton
            customClass="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
            onClickProp={logout}
            text="Logout"
          />

          <main className="bg-white container mx-auto  max-w-xs md:max-w-2xl lg:max-w-4xl">
            <div className="bg-primary-lite my-10 pt-10 rounded-md flex flex-col lg:flex-row sm-text-center">
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
              <div className=" md:flex lg:shrink-0 w-full max-w-lg h-80 mx-auto relative ">
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
              {listings.length === 0 ? (
                <h2 className="text-2xl text-center my-8">No listings yet</h2>
              ) : (
                <div className="grid auto-rows-max grid-cols-1 md:grid-cols-2 md:max-w-3xl md:mx-auto gap-10 my-10">
                  {listings.map((community) => (
                    <DashboardListing key={index} community={community} />
                  ))}
                </div>
              )}
              <Link href="/create" className="text-2xl text-center block mx-auto  w-max">+ Add new community</Link>
            </div>
          </main>
        </>
      )}
      <FooterBar />
    </div>
  );
}

export default ManagerDashboard;
