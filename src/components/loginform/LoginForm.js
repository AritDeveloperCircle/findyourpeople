import { useState } from "react";
import CustomizableButton from "../common/CustomizableButton";
import regexValidation from "../signupform/helperFunctions/regexValidation";
import { useAuthLogIn } from "@/composables/authLogIn";

function LoginForm() {

    const [user, setUser] = useState({
        email: '',
        password: '',
      });

      const { firebaseError, LogIn } = useAuthLogIn();
      const [error, setError] = useState({});
    
      const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value.trim()})
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const errors = regexValidation(user);
        if (Object.keys(errors).length === 0){
         LogIn(user);
         setUser({ email: "", password: "" });
        }else {
          setError(errors)
        }
      }
    return (
      
        <form  onSubmit={handleSubmit} 
          className="container w-full max-w-lg bg-white px-2 rounded-md mx-auto" >
             {/* email */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium leading-6 text-gray-dark capitalize"
                >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Enter your email ..."
                  required
                  className="w-full py-4 px-2 rounded-lg bg-white border border-gray-300"
                />
              </div>
              {firebaseError && (
                <span className="text-red-800 text-xs">Wrong Email</span>
              )}
              {error.email && (
                <span className="text-red-800 text-xs"> {error.email} </span>
              )}  
            </div>
                    {/* password */}
            <div>
              <div className="flex items-center justify-between">
                <label 
                  htmlFor="password" 
                  className="block text-sm font-medium leading-6 text-gray-dark capitalize"
                  >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="**********"
                  required
                  className="w-full py-4 px-2 rounded-lg bg-white border border-gray-300"
                />
              </div>
              {firebaseError && (
                <span className="text-red-800 text-xs">Wrong password</span>
              )}
              {error.password && (
                <span className="text-red-800 text-xs"> {error.password} </span>
              )}  
              <div className="flex justify-between mt-6">
              <div className="flex  gap-1 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-indigo-600"
                    />
                    <label htmlFor="candidates" className="font-medium text-base">
                Remember Me.
                
                    </label>
              </div>
              <div className="text-sm">
                  <a href="#" className="font-semibold text-primary hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>

            <div>
              <CustomizableButton
                customClass="flex w-full cursor-pointer justify-center rounded-md bg-gradient-to-r from-gradient-lite-blue to-gradient-dark-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-10"
                text= "Sign in"
                aria-label="Login button"
              />
            </div>
          </form>
    
      
      
    );
  }

export default LoginForm;


