import { Link, Outlet } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <header className="mr-8">
        <nav className="flex flex-col gap-y-4 justify-center w-32 text-center bg-neutral-500/50 backdrop-blur-lg text-neutral-100 fixed left-0 h-full my-8 font-bold rounded-lg overflow-hidden px-2">
          <Link
            to={"/"}
            className="bg-green-600 w-full rounded-sm p-2 hover:text-green-600 hover:bg-neutral-200 hover:shadow-lg hover:scale-90 transition-all"
          >
            {" "}
            Home
          </Link>
          <Link
            to={"/Inventory"}
            className="bg-green-600 w-full rounded-sm p-2 hover:text-green-600 hover:bg-neutral-200 hover:shadow-lg hover:scale-90 transition-all"
          >
            Inventory
          </Link>
          <Link
            to={"/AboutUs"}
            className="bg-green-600 w-full rounded-sm p-2 hover:text-green-600 hover:bg-neutral-200 hover:shadow-lg hover:scale-90 transition-all"
          >
            About us
          </Link>
          <Link
            to={"/ContactUs"}
            className="bg-green-600 w-full rounded-sm p-2 hover:text-green-600 hover:bg-neutral-200 hover:shadow-lg hover:scale-90 transition-all"
          >
            Contact Us
          </Link>
          <Link
            to={"/Storages"}
            className="bg-green-600 w-full rounded-sm p-2 hover:text-green-600 hover:bg-neutral-200 hover:shadow-lg hover:scale-90 transition-all"
          >
            Storages
          </Link>
        </nav>
        <Outlet />
      </header>
    </>
  );
}
