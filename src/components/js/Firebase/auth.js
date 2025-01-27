import { auth } from "./firebase";
import {
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

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
export const doSendPasswordResetEmail = (auth, email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("Password reset email sent successfully!");
    })
    .catch((err) => {
      console.err("Error while sending password reset email !", err);
    });
};
