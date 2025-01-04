import { collection, setDoc } from "firebase/firestore";
import { db } from "./firebase";
export default async function addUsersToDatabase(user, creds) {
  try {
    const docRef = await setDoc(
      collection(db, "users", creds.uid),
      {
        first: user.firstName,
        last: user.lastName,
        email: user.email,
        born: `${user.birthYear} ${user.birthMonth} ${user.birthday}`,
        gender: user.gender,
        id: Date.now(),
      },
      { merge: true }
    );
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log("Error", e);
  }
}
