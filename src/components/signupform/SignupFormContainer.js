import styles from "./signupcontainer.module.css";
import SignupForm from "./SignupForm";

function SignupFormContainer() {
  return (
    <main>
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
