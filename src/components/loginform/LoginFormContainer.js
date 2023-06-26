import Link from "next/link";
import LoginForm from "./LoginForm";

function LoginFormContainer() {
  return (
    <main className="lg:max-w-lg lg:w-11/12">
      <div>
        <h2 className="text-grey-dark font-bold text-4xl tracking-normal text-center">
          Hello! Welcome Back.
        </h2>
        <p className="text-grey-dark/80 text-center mb-12 tracking-wider text-sm opacity-80 ">
          Please enter your login details to continue
        </p>
      </div>
      <LoginForm />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <p className=" text-center text-md text-gray-500 mt-4">
          Dont have an account?
          <Link
            href="/signup"
            className="font-semibold ml-1 text-primary hover:text-indigo-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}

export default LoginFormContainer;
