import Link from "next/link";
import styles from "./signupcontainer.module.css";
import CustomizableAvatar from "../common/customavatar/CustomizableAvatar";
import SignupForm from "./SignupForm";

function SignupFormContainer() {
  const AVATAR_HEIGHT = 100;
  const AVATAR_WIDTH = 100;
  return (
    <main>
      <div className={styles.div}>
        <CustomizableAvatar
          height={AVATAR_HEIGHT}
          width={AVATAR_WIDTH}
          src="/image-placeholder.png"
          alt="main avatar"
        />
      </div>
      <h2 className={styles.header}>Create an account</h2>
      <h4 className={styles.sub}>
        Lets get started with creating your community!
      </h4>
      <SignupForm />
      <div className={styles.login}>
        <p>
          Have an account? <a href="#">Login</a>{" "}
        </p>
      </div>
    </main>
  );
}

export default SignupFormContainer;
