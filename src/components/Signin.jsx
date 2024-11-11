import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
export default function Signin() {
  const [password, setPassword] = useState("password");

  const showPassword = () => {
    // A function for showing / hiding password
    password === "password" ? setPassword("text") : setPassword("password");
  };
  return (
    <>
      <div className="grid place-items-center min-h-[100vh]">
        <div className="relative">
          <form className="bg-green-50 drop-shadow-md w-[400px] shadow-lg rounded-md ">
            <p className="text-green-400 font-bold text-xl p-4 flex justify-center">
              Sign in
            </p>
            <div className="px-4 py-3 flex flex-col gap-x-2 gap-y-3 relative">
              <div className=" w-full">
                <input
                  type="email"
                  name="emai"
                  id="email"
                  placeholder="Email Address"
                  className="ring-1 ring-gray-400 outline-none p-2 rounded-md bg-gray-100 w-full focus:placeholder:gray-5"
                  required
                />
              </div>
              <div className="flex justify-between ring-1 ring-gray-400 p-2 bg-gray-100 w-full focus:placeholder:text-gray-500 rounded-md ">
                <input
                  type={`${password}`}
                  name="password"
                  id="password"
                  placeholder="New Password"
                  className=" outline-none bg-transparent"
                  required
                />
                <span onClick={showPassword}>show password</span>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="remember-me" id="remember-me" />
                <label htmlFor="remember-me">Remember Me</label>
              </div>
              <div className="w-full flex items-center justify-center overflow-hidden relative">
                <button className="px-2 py-3 text-neutral-50 bg-green-400 w-full rounded-md hover:text-neutral-100 hover:bg-green-300">
                  Login
                </button>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 relative">
                <p className="text-gray-500 font-bold text-sm">Or</p>
                <Link
                  to="/Signup"
                  className="text-gray-600 hover:underline hover:text-gray-500 "
                >
                  Create new account
                </Link>
              </div>
            </div>
          </form>
        </div>
        <Outlet />
      </div>
    </>
  );
}
