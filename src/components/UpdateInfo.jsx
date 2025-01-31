import { useState } from "react";
import { useAuth } from "../contexts/authContext";
import Swal from "sweetalert2";
import { doUpdateEmail, doUpdatePassword } from "./js/Firebase/auth";
import { getAuth } from "firebase/auth";
import { updateUserName } from "./js/Firebase/firestore";
export default function UpdateInfo() {
  const { currentUser } = useAuth();
  const [email, setEmail] = useState(currentUser.email);
  const [userName, setUserName] = useState(currentUser.displayName);
  const [pwd, setPwd] = useState();
  const [confPwd, setconfPwd] = useState();
  const [changePass, setChangePass] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;
  //  check if the passwords matches
  const checkPasswords = () => {
    if (pwd !== confPwd)
      Swal.fire("Error!", "Passwords doesn't match", "error");
    else doUpdatePassword(user, pwd);

    if (pwd !== "" && confPwd !== "") setChangePass(true);
  };
  function checkInfo() {
    if (email !== user.email) doUpdateEmail(user, email);
    if (userName !== user.displayName && userName !== "")
      updateUserName(user, userName);
  }
  function handleSubmit(e) {
    e.preventDefault();
    checkPasswords();
    checkInfo();
  }
  return (
    <>
      <div className="max-w-screen-md">
        <form
          className="flex flex-col gap-2 bg-slate-200 p-4 rounded-md border border-black"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="userName"
            className="border border-neutral-700 p-2 outline-none rounded-md"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
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
            required={changePass}
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="border border-neutral-700 p-2 outline-none rounded-md"
            onChange={(e) => setconfPwd(e.target.value)}
            name="password"
            required={changePass}
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
