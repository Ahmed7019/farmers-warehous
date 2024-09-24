import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";

import Loading from "./components/Loading";
const Home = lazy(() => import("./components/Home"));
const Navigation = lazy(() => import("./components/Navigation"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Storages = lazy(() => import("./components/Storages"));
const App = () => {
  return (
    <>
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
        </Route>
      </Routes>
    </>
  );
};

export default App;
