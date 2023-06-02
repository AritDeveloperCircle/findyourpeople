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
            
            <FooterBar />
        </>
    )
};

export default SingleListing;