import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Inventory from "./components/Inventory.jsx";
import InventoryLevels from "./components/InventoryLevels.jsx";
import Navigation from "./components/Navigation.jsx";
import Search from "./components/Search.jsx";
import Signup from "./components/Signup.jsx";
import Storages from "./components/Storages.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {
    path:'/Signup',
    element:<Signup/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
