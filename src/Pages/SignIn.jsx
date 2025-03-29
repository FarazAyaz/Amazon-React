import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { PiEyeClosedLight } from "react-icons/pi";
import { RxEyeOpen } from "react-icons/rx";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../Firebase"; 
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response.user) {
        toast.success("Login successful");
        navigate("/")
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center items-center gap-3">
          <FaUser className="size-10" />
          <h1 className="text-3xl block text-center font-semibold">Login</h1>
        </div>
        <hr className="mt-3" />

        <div className="mt-3">
          <label htmlFor="Email" className="block text-base mb-2">
            Email
          </label>
          <input
            type="email"
            id="Email"
            className="w-full border text-base py-1 px-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>

        <div className="mt-3">
          <label htmlFor="password" className="block text-base mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword1 ? "text" : "password"}
              id="password"
              className="w-full border text-base py-1 px-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            {showPassword1 ? (
              <RxEyeOpen
                className="size-6 absolute right-4 top-[25%] cursor-pointer"
                onClick={() => setShowPassword1(!showPassword1)}
              />
            ) : (
              <PiEyeClosedLight
                className="size-6 absolute right-4 top-[25%] cursor-pointer"
                onClick={() => setShowPassword1(!showPassword1)}
              />
            )}
          </div>
        </div>

        <div className="flex mt-6 justify-between items-center">
          <div className="space-x-2">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Remember Me</label>
          </div>
          <div>
            <a href="#" className="text-indigo-800 font-semibold">
              Forgot Password?
            </a>
          </div>
        </div>

        <div className="mt-5">
          <button
            className="w-full border-indigo-700 bg-indigo-800 text-white text-base py-1 mt-4 rounded-md text-center"
            onClick={signIn} // Fixed: Added onClick to trigger sign-in
          >
            Login
          </button>

          <NavLink to={"/sign-up"}>
            <button className="w-full border-green-700 bg-green-700 text-white text-base py-1 mt-4 rounded-md text-center">
              SIGN UP HERE 
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignIn;


