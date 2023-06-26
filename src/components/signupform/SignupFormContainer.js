import Link from "next/link";
import SignupForm from "./SignupForm";

function SignupFormContainer() {
  return (
    <main className="lg:max-w-lg lg:w-11/12">
      <div className="text-center ">
        <h2 className="text-grey-dark font-bold text-4xl tracking-normal">
          Create an account
        </h2>
        <h4 className="text-grey-dark/80 text-center  tracking-wider text-sm opacity-80">
          Lets get started with creating your community
        </h4>
      </div>

      <SignupForm />
      <div className="text-center mt-4">
        <p className="text-gray-500 text-md">
          Have an account?
          <Link href="/login">
            <span className="text-primary ml-2 font-semibold hover:text-indigo-500">
              Sign in
            </span>
          </Link>
        </p>
      </div>
    </main>
  );
}

export default SignupFormContainer;
