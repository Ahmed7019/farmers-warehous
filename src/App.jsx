import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import Signin from "./components/Signin";
const Home = lazy(() => import("./components/Home"));
const Inventory = lazy(() => import("./components/Inventory"));
const Navigation = lazy(() => import("./components/Navigation"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Storages = lazy(() => import("./components/Storages"));
const Signup = lazy(() => import("./components/Signup"));
import { AuthProvider } from "./contexts/authContext";
const App = () => {
  return (
    <>
      <div>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route
                exact
                path="/"
                element={
                  <Suspense fallback={<Loading />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path="/Inventory"
                element={
                  <Suspense fallback={<Loading />}>
                    <Inventory />
                  </Suspense>
                }
              />
              <Route
                path="/AboutUs"
                element={
                  <Suspense fallback={<Loading />}>
                    <AboutUs />
                  </Suspense>
                }
              />
              <Route
                path="/ContactUs"
                element={
                  <Suspense fallback={<Loading />}>
                    <ContactUs />
                  </Suspense>
                }
              />
              <Route
                path="/Storages"
                element={
                  <Suspense fallback={<Loading />}>
                    <Storages />
                  </Suspense>
                }
              />
              <Route
                path="/Signup"
                element={
                  <Suspense fallback={<Loading />}>
                    <Signup />
                  </Suspense>
                }
              />
              <Route
                path="/Signin"
                element={
                  <Suspense fallback={<Loading />}>
                    <Signin />
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </AuthProvider>
      </div>
    </>
  );
};

export default App;
