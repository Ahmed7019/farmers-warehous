import { Navigate, Outlet } from "react-router";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// Firebase
// js functions
import saveToLocalStorage from "./js/signup/saveUsersToLocaleStorage";
import getFromLocalStorage from "./js/signup/loadFromLocalStorage";
import { doCreateUserWithEmailAndPassword } from "./js/Firebase/auth";
import { useAuth } from "../contexts/authContext";
// import Home from "./Home";
export default function Signup() {
  const [password, setPassword] = useState("password");

  const showPassword = () => {
    // A function for showing / hiding password
    password === "password" ? setPassword("text") : setPassword("password");
  };

  const { userLoggedIn } = useAuth();
  // Form submittion

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState({});
  const [isUserRegistering, setisUserRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  // On render load from local storage
  useEffect(() => {
    if (data.length > 0) {
      getFromLocalStorage("user");
    }
  });

  useEffect(() => {
    if (data.length > 0) {
      saveToLocalStorage(data);
    }
  }, [data]);

  // const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!isUserRegistering) {
      setisUserRegistering(true);
      return await doCreateUserWithEmailAndPassword(email, pwd);
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to={"../"} replace={true} />}
      <div className=" w-full h-full">
        <div className="flex gap-x-72">
          <Navigation />
          <div className="relative top-8 left-40">
            <form
              className="bg-white drop-shadow-md shadow-lg max-w-[432px] rounded-md"
              onSubmit={handleFormSubmit}
            >
              <p className="text-green-400 font-bold text-xl p-4">Register</p>
              <div className="px-4 py-3 flex flex-col gap-x-2 gap-y-3">
                <div className="flex gap-2">
                  <input
                    {...register("firstName")}
                    required
                    placeholder="First Name"
                    className="ring-1 ring-gray-400 outline-none p-2 rounded-md bg-gray-100"
                  />
                  <input
                    {...register("lastName")}
                    placeholder="Surname"
                    className="ring-1 ring-gray-400 outline-none p-2 rounded-md bg-gray-100 "
                    required
                  />
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Email Address"
                    className="ring-1 ring-gray-400 outline-none p-2 rounded-md bg-gray-100 w-full focus:placeholder:gray-5"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-between items-center ring-1 ring-gray-400 p-2 rounded-md bg-gray-100 w-full focus:placeholder:text-gray-500">
                  <input
                    type={password}
                    {...register("password")}
                    placeholder="New Password"
                    className=" outline-none bg-transparent w-[70%]"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    required
                  />
                  <span
                    className="text-sm text-gray-400 hover:underline hover:underline-offset-2 cursor-pointer"
                    onClick={showPassword}
                  >
                    Show password
                  </span>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-2">Date of birth</p>
                  <div className="flex gap-2">
                    <select
                      {...register("birthday")}
                      className="text-md flex-1 px-1 py-1.5 ring-1 ring-gray-400 rounded-md outline-none"
                      required
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                      <option>13</option>
                      <option>14</option>
                      <option>15</option>
                      <option>16</option>
                      <option>17</option>
                      <option>18</option>
                      <option>19</option>
                      <option>20</option>
                      <option>21</option>
                      <option>22</option>
                      <option>23</option>
                      <option>24</option>
                      <option>25</option>
                      <option>26</option>
                      <option>27</option>
                      <option>28</option>
                      <option>29</option>
                      <option>30</option>
                      <option>31</option>
                    </select>
                    <select
                      {...register("birthMonth")}
                      className="text-md flex-1 px-1 py-1.5 ring-1 ring-gray-400 rounded-md outline-none"
                      required
                    >
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                      <option>April</option>
                      <option>May</option>
                      <option>June</option>
                      <option>July</option>
                      <option>August</option>
                      <option>September</option>
                      <option>October</option>
                      <option>November</option>
                      <option>December</option>
                    </select>
                    <select
                      {...register("birthYear")}
                      className="text-md flex-1 px-1 py-1.5 ring-1 ring-gray-400 rounded-md outline-none"
                      required
                    >
                      <option>1990</option>
                      <option>1991</option>
                      <option>1992</option>
                      <option>1993</option>
                      <option>1994</option>
                      <option>1995</option>
                      <option>1996</option>
                      <option>1997</option>
                      <option>1998</option>
                      <option>1999</option>
                      <option>2000</option>
                      <option>2001</option>
                      <option>2002</option>
                      <option>2003</option>
                      <option>2004</option>
                      <option>2005</option>
                      <option>2006</option>
                      <option>2007</option>
                      <option>2008</option>
                      <option>2009</option>
                      <option>2010</option>
                      <option>2011</option>
                      <option>2012</option>
                      <option>2013</option>
                      <option>2014</option>
                      <option>2015</option>
                      <option>2016</option>
                      <option>2017</option>
                      <option>2018</option>
                      <option>2019</option>
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                    </select>
                  </div>
                </div>
                {/* Gender */}
                <div className="flex flex-col">
                  <p className="text-gray-500 text-sm mb-2">Gender</p>
                  <div className="flex gap-2">
                    <label htmlFor="female" className="flex gap-2">
                      <span>Female</span>
                      <input
                        type="radio"
                        {...register("gender")}
                        required
                        value="female"
                      />
                    </label>
                    <label htmlFor="male" className="flex gap-2">
                      <span>Male</span>
                      <input
                        type="radio"
                        {...register("gender")}
                        id="male"
                        required
                        value="male"
                      />
                    </label>
                  </div>
                </div>

                {/* Information */}

                <div>
                  <p className="text-gray-500 text-sm">
                    People who use our service may have uploaded your contact
                    information to Facebook.
                  </p>
                  <Link
                    to={""}
                    className="text-sm font-bold text-green-400 hover:underline hover:underline-offset-2 "
                  >
                    Learn more
                  </Link>
                  <p className="text-gray-500 text-sm font-bold">
                    By clicking Sign Up, you agree to our Terms, Privacy Policy
                    , Cookies Policy. You may receive SMS notifications from us
                    and can opt out at any time.
                  </p>
                </div>

                <div className="w-full flex items-center justify-center">
                  <button
                    type="submit"
                    className="px-2 py-3 text-neutral-50 bg-green-400 w-full rounded-md hover:text-neutral-100 hover:bg-green-300"
                  >
                    Sign Up
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
