export default function getFromLocalStorage(data) {
  const fetchedData = JSON.parse(localStorage.getItem(data));
  return fetchedData;
}
