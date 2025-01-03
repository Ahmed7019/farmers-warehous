import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export default async function addUsersToDatabase(user) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: user.firstName,
      last: user.lastName,
      email: user.email,
      born: `${user.birthYear} ${user.birthMonth} ${user.birthday}`,
      gender: user.gender,
      id: Date.now(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log("Error", e);
  }
}
