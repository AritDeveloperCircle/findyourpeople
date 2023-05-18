import Link from "next/link";
import LoginForm from "./LoginForm";
import styles from "./logincontainer.module.css"


function LoginFormContainer() {
    return(
        <main>
            <h2 className={styles.header}>Hello! Welcome back</h2>
            <h4 className={styles.sub}>
               Please Enter your login details to continue
            </h4>
            <LoginForm />
            <div div className="text-center mt-4">
                <p>Dont have an account? <Link href="/">SignUp</Link></p>
            </div>
        </main>
        
                


        
    )
}

export default LoginFormContainer;

