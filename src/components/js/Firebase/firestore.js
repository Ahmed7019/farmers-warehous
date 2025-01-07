import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { getAuth, updateProfile } from "firebase/auth";
export default async function addUsersToDatabase(user) {
  try {
    await setDoc(
      doc(db, "users", user.email),
      {
        first: user.firstName,
        last: user.lastName,
        email: user.email,
        born: `${user.birthYear} ${user.birthMonth} ${user.birthday}`,
        gender: user.gender,
      },
      { merge: true }
    );
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log("Error", e);
  }
}

export async function getUser(user) {
  const docRef = doc(db, "users", user.email);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: docSnap.data().first,
    });
  } else {
    console.log("Error!!");
  }
}
