import CustomizableAside from "../customizableAside";
import CustomizableAvatar from "../common/customavatar/CustomizableAvatar";
import LoginForm from "./LoginForm";
import styles from "./loginpage.module.css";


function LoginPage() {

    return(
        <div className= {styles.login}>
            {/* aside content */}
            <div className= {styles.asideContainer}>
                <CustomizableAside
                src='/image-placeholder.png'
                width={110}
                height={110}
                alt={"avatar"}
                asideCustomClass={styles.asideContain}
                headerText={"Nulla dolore dolor velit pariatur"}
                paragraphText={"lorem occaecat ipsum caliqua."}
                 />
            </div>
            {/* login page */}
            <div className= {styles.loginContainer}>
                {/* avatar */}
                <div className= {styles.image}>
                    <CustomizableAvatar
                    height={100}
                    width={100}
                    src= '/image-placeholder.png'
                    alt={"main avatar"}
                     />
                </div>
                {/* login form */}
                <LoginForm />
                <div className= {styles.loginFooter}>
                    <p>
                    Dont have an account yet? <a href='#'>Sign up</a>{' '}
                    </p>
                </div>


            </div>
        </div>
    )
}

export default LoginPage;