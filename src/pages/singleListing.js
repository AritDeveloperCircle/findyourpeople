import Link from "next/link";
import NavBar from "@/components/Header/NavBar";
import CustomizableAvatar from "@/components/common/customavatar/CustomizableAvatar";
import CustomizableButton from "@/components/common/CustomizableButton";
import FooterBar from "@/components/common/FooterBar";
import styles from "../styles/singleListing.module.css";


function SingleListing(className, text) {
    return (
        <>
            <NavBar />
            <h2 className="HomePage">
                <Link href="/">Home </Link>
            </h2>
            <h1>Single Community Listing</h1>
            <div className={styles.overallContainer}>
                <container>
                    <CustomizableAvatar 
                        Image
                            className={"style.image"}
                            src={"/mainAvatar.png"}
                            height={"50"}
                            width={"50"}
                            alt={"avatar image"}
                    />
                    <div>
                        <h3>Community Name</h3>
                        <h3>Community Manager</h3>
                    </div>
                    <h3>Number of members</h3>
                </container>
                    
                <container>
                    <CustomizableButton
                    text={"Community Vision"} 
                    />
                    <CustomizableButton
                    text={"Community Description"} 
                    />
                </container>
                
                <h3>Labels</h3>
                <div>
                    <CustomizableButton
                        text={"Gender"} 
                    />
                    <CustomizableButton
                        text={"Industry"} 
                    />
                </div>
                
                <h3><Link href={"#"} >Website URL</Link></h3>
            </div>

            <div className="bg-gradient-lite-grey flex justify-between w-auto p-[70px] align-middle">

                  <h2 
                   className="text-grey-dark leading-12 text-3xl word-xl px-5 break-normal"
                  >
                    Would you like to be a part of this community?
                  </h2>
                
                <Link 
                href="/" 
                className =" flex align-middle  cursor-pointer justify-center rounded-md w-[280px] text-center bg-gradient-lite-blue px-9 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 "
                >
                      Visit Community
                </Link>
                
            </div>
        
            
            <FooterBar />
        </>
    )
};

export default SingleListing;