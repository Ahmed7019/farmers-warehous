import { auth } from "./firebase";
import {
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
  updatePassword,
} from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import Swal from "sweetalert2"; // Sweat alert

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password).catch((err) => {
    console.log(err);
  });
};

export const doSignInWithEmailAndPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password).catch((err) => {
    console.log(err);
  });
};

export const doSignOut = (auth) => {
  return signOut(auth);
};

const user = auth.currentUser;
export const authCurrentUser = () => {
  if (user) {
    // If user is signed in
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    // const uid = user.uid;
    const userInfo = {
      displayName,
      email,
      photoURL,
      emailVerified,
    };
    return userInfo;
  }
};

export const doEmailVerification = (user) => {
  console.log("... email verification called");
  sendEmailVerification(user)
    .then(() => {
      console.log("Verificatoin Email sent Successfully");
    })
    .catch((err) => console.error("Error in sending verification email", err));
};

// Password reset email
export const doSendPasswordResetEmail = async (auth, email) => {
  await sendPasswordResetEmail(auth, email)
    .then(() =>
      Swal.fire(
        "Reset Email",
        "Reset email is sent to your email successfully !",
        "success"
      )
    )
    .catch((err) => {
      Swal.fire("Error", err, "error");
    });
};

// update password
export const doUpdatePassword = async (user, pwd) => {
  await updatePassword(user, pwd)
    .then(() =>
      Swal.fire("Password Update", "Password updated successfully !", "success")
    )
    .catch((err) => {
      Swal.fire("Error updating password", err, "error");
      console.log("ERROR!!!", err);
    });
};
