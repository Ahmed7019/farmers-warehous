import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
export default function Signin() {
  return (
    <>
      <div className="bg-gray-300 w-full h-full">
        <div className="flex gap-x-72">
          <Navigation />
          <div className="relative top-8 left-40">
            <form className="bg-white drop-shadow-md shadow-lg max-w-[432px] rounded-md">
              <p className="text-green-400 font-bold text-xl p-4 flex justify-center">
                Sign in
              </p>
              <div className="px-4 py-3 flex flex-col gap-x-2 gap-y-3">
                <div className="w-full">
                  <input
                    type="email"
                    name="emai"
                    id="email"
                    placeholder="Email Address"
                    className="ring-1 ring-gray-400 outline-none p-2 rounded-md bg-gray-100 w-full focus:placeholder:gray-5"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="New Password"
                    className="ring-1 ring-gray-400 outline-none p-2 rounded-md bg-gray-100 w-full focus:placeholder:gray-5"
                    required
                  />
                </div>
                <div className="w-full flex items-center justify-center">
                  <button className="px-2 py-3 text-neutral-50 bg-green-400 w-full rounded-md hover:text-neutral-100 hover:bg-green-300">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
