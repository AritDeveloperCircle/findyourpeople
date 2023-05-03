import React from 'react';
import Image from 'next/image';
import { Inter } from "next/font/google";
import styles from "./login.module.css";
import CustomizableAside from "../../components/customizableAside";
// import CustomizableAvatar from "@/components/customavatar/CustomizableAvatar"


const { useState } = React;

function LoginForm() {

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState(undefined);
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/login", values);
            console.log(response.data);
            // handle success.
        } catch (error) {
            console.error(error);
            // handle error (example).
            setError("An error occurred, try again...");
        }
        

    }
    // const asideImage = ()=> {
    //     return < CustomizableAvatar
    //     src={src}
    //     height={height}
    //     width={width}
    //     alt={alt}

    //     />
    // }
    
    return (
        <div className={styles.loginPage}>

            <div className={styles.asideContainer}>
            <CustomizableAside
                    className={styles.some.css.file}
                    asideImage={"path/to/img"}
                    width={110}
                    height={110}
                    alt={"avatar"}
                    h2Content={"Lorem ipsum lorem ipsum"}
                    pContent={"Sed ut perspiciatis  Nemo enim ipsam voluptatem  fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam "}
/>
            </div>

            <div className={styles.loginContainer}>
                    <div className={styles.loginImage} >
                        <Image src="/images/customizableAvatar.svg" width="70" height="70" priority  alt=''/>
                    </div>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.field}>
                            <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                            <input
                            className={styles.input}
                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                            value={values.email}
                            type="text"
                            name="email"
                            placeholder="joe.deo@gmail.com"
                            />
                        </div>
                        <div className= {styles.field}>
                            <label htmlFor="password" className={styles.formLabel}>Password</label>
                            <input
                            className={styles.input}
                            onChange={(e) => setValues({ ...values, password: e.target.value })}
                            value={values.password}
                            type="password"
                            name="password"
                            placeholder="*********"
                            />
                            <p className={styles.que}>Forgot Password?</p>
                        </div>
                        {error ? <p className= {styles.error}>{error}</p> : <></>}

                        <div className={styles.loginBtn}>
                            <button type="submit" className={styles.btn}>LOGIN</button>
                        </div>
                    </form>
                    <div className={styles.footer}>
                        <h4 className={styles.footer1}>Dont have an account yet?<a href="#">Sign Up</a></h4>
                    </div>


                
            </div>

        
        </div>
    );
}



export default LoginForm
