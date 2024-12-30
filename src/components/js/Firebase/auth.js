import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password).catch((err) => {
    console.log(err);
  });
};

export const doSignOut = (auth) => {
  return signOut(auth);
};
