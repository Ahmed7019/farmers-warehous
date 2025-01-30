import { useState } from "react";
import { useAuth } from "../contexts/authContext";
import Swal from "sweetalert2";
import { doUpdatePassword } from "./js/Firebase/auth";
import { getAuth } from "firebase/auth";
export default function UpdateInfo() {
  const { currentUser } = useAuth();
  const [email, setEmail] = useState(currentUser.email);
  const [pwd, setPwd] = useState();
  const [confPwd, setconfPwd] = useState();

  const auth = getAuth();
  const user = auth.currentUser;
  //  check if the passwords matches
  const checkPasswords = () => {
    if (pwd !== confPwd)
      Swal.fire("Error!", "Passwords doesn't match", "error");
    else doUpdatePassword(user, pwd);
  };

  function handleSubmit(e) {
    e.preventDefault();
    checkPasswords();
  }
  return (
    <>
      <div className="max-w-screen-md">
        <form
          className="flex flex-col gap-2 bg-slate-200 p-4 rounded-md border border-black"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-neutral-700 p-2 outline-none rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter your New password"
            className="border border-neutral-700 p-2 outline-none rounded-md"
            onChange={(e) => setPwd(e.target.value)}
            name="password"
            required
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="border border-neutral-700 p-2 outline-none rounded-md"
            onChange={(e) => setconfPwd(e.target.value)}
            name="password"
            required
          />
          <button
            type="submit"
            className="p-2 border border-black rounded hover:text-slate-300 hover:bg-black transition-colors"
          >
            Confirm
          </button>
        </form>
      </div>
    </>
  );
}
