import Link from "next/link";
import SignupForm from "./SignupForm";

function SignupFormContainer() {
  return (
<<<<<<< HEAD
    <main>
=======
    <main className="lg:max-w-lg lg:w-11/12">
>>>>>>> dfc64872e92804367f16b6e1c3f4e1f8b7ec5801
      <div className="text-center ">
        <h2 className="text-grey-dark font-bold text-4xl tracking-normal">
          Create an account
        </h2>
        <h4 className="text-grey-dark text-center  tracking-wider text-sm opacity-80">
          Lets get started with creating your community
        </h4>
      </div>

      <SignupForm />
      <div className="text-center mt-4">
        <p className="text-gray-500 text-md">
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
