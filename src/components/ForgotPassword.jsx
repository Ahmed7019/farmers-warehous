import { getAuth } from "firebase/auth";
import { useState } from "react";
import { doSendPasswordResetEmail } from "./js/Firebase/auth";
import { useNavigate } from "react-router";
export default function ForgotPassword() {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    doSendPasswordResetEmail(auth, email).then(() => {
      setEmail("");
      nav("../");
    });
  };
  return (
    <>
      <div className="mt-32 relative grid justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-2 border border-neutral-400 p-3 rounded-md">
            <label htmlFor="Email">Enter Your Email</label>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none border border-neutral-800 rounded p-2 "
            />
            <button
              type="submit"
              className="bg-green-500 rounded-sm p-3 text-neutral-200"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
