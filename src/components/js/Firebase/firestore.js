import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
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
