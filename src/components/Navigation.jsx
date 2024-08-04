import { Link, Outlet } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <header className="mr-8">
        <nav className="flex flex-col justify-evenly gap-y-2 w-32 text-center bg-green-900 text-neutral-200 fixed left-0 h-full">
          <Link to={"/"} className="bg-green-600 w-full rounded-sm p-2"> Home</Link>
          <Link to={"/Inventory"}  className="bg-green-600 w-full rounded-sm p-2">Inventory</Link>
          <Link to={"/AboutUs"}  className="bg-green-600 w-full rounded-sm p-2">About us</Link>
          <Link to={"/ContactUs"}  className="bg-green-600 w-full rounded-sm p-2">Contact Us</Link>
          <Link to={"/Storages"}  className="bg-green-600 w-full rounded-sm p-2">Storages</Link>
        </nav>
        <Outlet />
      </header>
    </>
  );
}
