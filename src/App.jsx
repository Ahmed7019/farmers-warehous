import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Inventory from "./components/Inventory";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Storages from "./components/Storages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Storages" element={<Storages />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
