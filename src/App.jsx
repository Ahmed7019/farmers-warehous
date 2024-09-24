import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router";
import Inventory from "./components/Inventory";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Storages from "./components/Storages";
import Loading from "./components/Loading";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./components/Home"));
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
