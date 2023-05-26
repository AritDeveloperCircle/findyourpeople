import Link from "next/link";
import LoginForm from "./LoginForm";

function LoginFormContainer() {
    return(
        <main>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
               <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-grey-dark/90">
                Hello! Welcome Back.
               </h2>
               <p className="text-center mt-2">Please enter your login details to continue</p>
           </div>

           <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <LoginForm />
            <p className=" text-center text-sm text-gray-500 mt-[70px]">
            Dont have an account?{' '}
             <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign Up
             </a>
            </p>
           </div> 

        </main>  
    )
}

export default LoginFormContainer;


