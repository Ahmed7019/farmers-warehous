import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { getAuth, updateProfile } from "firebase/auth";

export default async function addUsersToDatabase(user) {
  if (!user || !user.email) {
    throw new Error("Invalid user data: email is required");
  }

  try {
    await setDoc(
      doc(db, "users", user.email),
      {
        first: user.firstName || "",
        last: user.lastName || "",
        username: `${user.firstName} ${user.lastName}` || "",
        email: user.email,
        born: new Date(`${user.birthYear}-${user.birthMonth}-${user.birthday}`), // Use a Date object
        gender: user.gender || "unknown",
      },
      { merge: true }
    );
    console.log("Added Successfully");
  } catch (e) {
    console.log("Error :", e);
  }
}

export async function getUser(user) {
  const auth = getAuth();
  try {
    const docRef = doc(db, "users", user.email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      await updateProfile(auth.currentUser, {
        displayName: docSnap.data().first,
        username: `${docSnap.data().first} ${docSnap.data().last}`,
      });
      console.log("### Get User from db ### Successfull!");
    } else {
      console.log("### Get User from db ### User Not Found");
    }
  } catch (e) {
    console.log("Error!!", e);
  }
}
