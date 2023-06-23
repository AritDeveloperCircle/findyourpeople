import { useState } from "react";
import CustomizableButton from "../common/CustomizableButton";
import { useAuthLogIn } from "@/composables/authLogIn";

function LoginForm() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { firebaseError, LogIn } = useAuthLogIn();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      LogIn(user);
      setUser({ email: "", password: "" });
    } else {
      console.log(firebaseError);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="container w-full max-w-lg bg-white px-2 rounded-md mx-auto"
    >
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
        {firebaseError.includes("Firebase: Error (auth/user-not-found).") && (
          <span className="text-red-800 text-xs">Wrong Email</span>
        )}
      </div>
      {/* password */}
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-dark capitalize mt-2"
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
        {firebaseError.includes("Firebase: Error (auth/wrong-password).") && (
          <span className="text-red-800 text-xs">Wrong password</span>
        )}
        <div className="flex justify-between mt-6">
          <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-primary hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>
        </div>
      </div>

      <div>
        <CustomizableButton
          customClass="flex w-full cursor-pointer justify-center rounded-md bg-gradient-to-r from-gradient-lite-blue to-gradient-dark-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-10"
          text="Sign in"
          aria-label="Login button"
        />
      </div>
    </form>
  );
}

export default LoginForm;
