import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
export default function Main() {
  // eslint-disable-next-line no-unused-vars

  const [farmsData, setFarmsData] = useState([]);

  useEffect(() => {
    const farmsData = JSON.parse(localStorage.getItem("farm"));
    if (farmsData) {
      setFarmsData(farmsData);
    }
  }, []);
  return (
    <main>{farmsData.length > 0 ? <Dashboard /> : <h1>No data found</h1>}</main>
  );
}
