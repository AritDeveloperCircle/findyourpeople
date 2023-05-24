import Link from "next/link";
import SignupForm from "./SignupForm";

function SignupFormContainer() {
  return (
    <main className="mt-24 h-screen">
      <div className="text-center ">
        <h2 className="text-grey-dark font-bold text-4xl tracking-normal">
          Create an account
        </h2>
        <h4 className="text-grey-dark tracking-wider text-sm">
          Lets get started with <br /> creating your community
        </h4>
      </div>

      <SignupForm />
      <div className="text-center mt-4">
        <p className="text-gray-500 text-md mt-40">
          Have an account?
          <Link href="/">
            <span className="text-primary ml-2 font-semibold">Sign in</span>
          </Link>
        </p>
      </div>
    </main>
  );
}

export default SignupFormContainer;
