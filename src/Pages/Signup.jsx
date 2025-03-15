import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { PiEyeClosedLight } from "react-icons/pi";
import { RxEyeOpen } from "react-icons/rx";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUp = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center items-center gap-3">
          <FaUser className=" size-10" />
          <h1 className="text-3xl block text-center font-semibold ">Sign-Up</h1>
        </div>
        <hr className="mt-3" />
        <div className="mt-3">
          <label htmlFor="Email" className="block text-base mb-2">
            Enter Your Email
          </label>
          <input
            type="text"
            id="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border text-base py-1 px-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Email Address"
          />
        </div>
        <div className="mt-3">
          <label htmlFor="create-Password" className="block text-base mb-2">
            Create Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="create-password"
              className="w-full border text-base py-1 px-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <RxEyeOpen
                className="size-6 absolute right-4 top-[25%] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <PiEyeClosedLight
                className="w-6 h-6 absolute right-3 top-[25%] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>
        <div className="mt-3">
          <label htmlFor="Confirm-Password" className="block text-base mb-2">
            Confirm Password
          </label>
          <input
            type="Password"
            id="confirm-password"
            className="w-full border text-base py-1 px-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Confirm Password"
          />
        </div>
        <div className="mt-5">
          <button
            className="w-full  border-2 border-indigo-700 bg-indigo-800 text-white text-base py-1 mt-4 rounded-md text-center"
            onClick={() => signUp(email, password)}
          >
            <a href="#">Sign-Up</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
