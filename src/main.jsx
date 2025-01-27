import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import Signin from "./components/Signin";
import { AuthProvider } from "./contexts/authContext";

// Lazy load components
const Home = lazy(() => import("./components/Home"));
const Inventory = lazy(() => import("./components/Inventory"));
const Navigation = lazy(() => import("./components/Navigation"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Storages = lazy(() => import("./components/Storages"));
const Signup = lazy(() => import("./components/Signup"));
const Profile = lazy(() => import("./components/Profile"));
const ForgotPassword = lazy(() => import("./components/ForgotPassword"));

// Create the router
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/Inventory",
          element: (
            <Suspense fallback={<Loading />}>
              <Inventory />
            </Suspense>
          ),
        },
        {
          path: "/AboutUs",
          element: (
            <Suspense fallback={<Loading />}>
              <AboutUs />
            </Suspense>
          ),
        },
        {
          path: "/ContactUs",
          element: (
            <Suspense fallback={<Loading />}>
              <ContactUs />
            </Suspense>
          ),
        },
        {
          path: "/Storages",
          element: (
            <Suspense fallback={<Loading />}>
              <Storages />
            </Suspense>
          ),
        },
        {
          path: "/Signup",
          element: (
            <Suspense fallback={<Loading />}>
              <Signup />
            </Suspense>
          ),
        },
        {
          path: "/Signin",
          element: (
            <Suspense fallback={<Loading />}>
              <Signin />
            </Suspense>
          ),
        },
        {
          path: "/Profile",
          element: (
            <Suspense fallback={<Loading />}>
              <Profile />
            </Suspense>
          ),
        },
        {
          path: "/ForgotPassword",
          element: (
            <Suspense fallback={<Loading />}>
              <ForgotPassword />
            </Suspense>
          ),
        },
      ],
    },
  ],
  {
    basename: "/farmers-warehous", // Add basename for GitHub Pages
  }
);

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
