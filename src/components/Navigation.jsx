import { Link, Outlet } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <header className="mr-8">
        <nav className="flex flex-col justify-evenly gap-y-2 w-32 text-center bg-green-900 text-neutral-200 fixed left-0 h-full font-bold">
          <Link to={"/"} className="bg-green-600 w-full rounded-sm p-2 hover:text-green-600 hover:bg-neutral-200 hover:shadow-lg hover:scale-90 transition-all"> Home</Link>
          <Link to={"/Inventory"}  className="bg-green-600 w-full rounded-sm p-2 hover:text-green-600 hover:bg-neutral-200 hover:shadow-lg hover:scale-90 transition-all">Inventory</Link>
          <Link to={"/AboutUs"}  className="bg-green-600 w-full rounded-sm p-2 hover:text-green-600 hover:bg-neutral-200 hover:shadow-lg hover:scale-90 transition-all">About us</Link>
          <Link to={"/ContactUs"}  className="bg-green-600 w-full rounded-sm p-2 hover:text-green-600 hover:bg-neutral-200 hover:shadow-lg hover:scale-90 transition-all">Contact Us</Link>
          <Link to={"/Storages"}  className="bg-green-600 w-full rounded-sm p-2 hover:text-green-600 hover:bg-neutral-200 hover:shadow-lg hover:scale-90 transition-all">Storages</Link>
        </nav>
        <Outlet />
      </header>
    </>
  );
}
