import styles from "./signupcontainer.module.css";
import CustomizableAvatar from "../common/customavatar/CustomizableAvatar";
import SignupForm from "./SignupForm";

function SignupFormContainer() {
  const AVATAR_HEIGHT = 50;
  const AVATAR_WIDTH = 50;
  return (
    <main>
      <CustomizableAvatar
        customClass="flex justify-center items-center mb-5"
        height={AVATAR_HEIGHT}
        width={AVATAR_WIDTH}
        src="/image-placeholder.png"
        alt="main avatar"
      />

      <h2 className={styles.header}>Create an account</h2>
      <h4 className={styles.sub}>
        Lets get started with creating your community!
      </h4>
      <SignupForm />
      <div className="text-center mt-4">
        <p>
          Have an account?
          <a className="text-sky-600 ml-1" href="#">
            Login
          </a>
        </p>
      </div>
    </main>
  );
}

export default SignupFormContainer;
