export default function saveToLocalStorage(user) {
  localStorage.setItem("user", JSON.stringify(user));
}
