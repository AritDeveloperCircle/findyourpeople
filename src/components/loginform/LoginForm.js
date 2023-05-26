import { useState } from "react";
import CustomizableButton from "../common/CustomizableButton";
import regexValidation from "../signupform/helperFunctions/regexValidation";
import { useAuthLogIn } from "@/composables/authLogIn";

function LoginForm() {

    const [user, setUser] = useState({
        email: '',
        password: '',
      });

      const { addUser, firebaseError, LogIn } = useAuthLogIn();
      const [error, setError] = useState({});
    
      const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value.trim()})
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const errors = regexValidation(user);
        if (Object.keys(errors).length === 0){
          LogIn(user);
          resetForm()
        }else {
          setError(errors)
        }
      }
      const resetForm = () => {
        setUser({ email: "", password: "" });
      };
      console.log(user);

    return (
      <div>
        <form  onSubmit={handleSubmit} className="space-y-6" >
             {/* email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
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
                  className="block w-full rounded-lg border-0 py-4 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={user.password}
                  onChange={handleChange}s
                  placeholder="**********"
                  required
                  className="block w-full rounded-lg border-0 py-4 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="candidates" className="font-medium text-gray-900">
                Remember Me
                    </label>
              </div>
              <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>

            <div>
              <CustomizableButton
                customClass="flex w-full justify-center rounded-md bg-gradient-to-b from-[#2D65B4] to-[#182978]  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                text= "Sign in"
                aria-label="Login button"
              />
            </div>
          </form>
      </div>
      
      
    );
  }

export default LoginForm;


