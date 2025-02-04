import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
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
        displayName: `${docSnap.data().first} ${docSnap.data().last}`,
      });
      console.log("### Get User from db ### Successfull!");
    } else {
      console.log("### Get User from db ### User Not Found");
    }
  } catch (e) {
    console.log("Error!!", e);
  }
}

export async function getFarmSize(user) {
  try {
    const docRef = doc(db, "users", user.email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const farmSize = docSnap.data().farmSize;
      console.log("### Get User from db ### Successfull!");
    } else {
      console.log("### Get User from db ### User Not Found");
    }
  } catch (e) {
    console.log("Error!!", e);
  }
}

export async function updateUserName(user, name) {
  try {
    const docRef = doc(db, "users", user.email);
    await updateDoc(docRef, {
      first: name.split(" ")[0],
      last: name.split(" ")[1],
    });
    console.log("### Updated User Successfull!");
  } catch (e) {
    console.log("Error!!", e);
  }
}

export async function updateFarmsize(user, farmSize) {
  try {
    const docRef = doc(db, "users", user.email);
    await updateDoc(docRef, {
      farmSize: farmSize,
    });
    console.log("### Updated Farm size Successfull!");
  } catch (e) {
    console.log("Error!!", e);
  }
}
