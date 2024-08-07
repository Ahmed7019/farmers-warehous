/* eslint-disable react/no-unescaped-entities */
import InventoryLevels from "./InventoryLevels";
export default function Home() {
  return (
    <>
      <div className="ml-40 relative grid place-items-center justify-center ">
        <header className="mt-8">
          <p className="font-bold text-3xl ">Farmers Warehouse</p>
          <div className=" my-2 flex justify-center">
            <div className="flex flex-col gap-y-4 pr-4">
              <h1>
                At Our Farmers Warehouse, we take pride in offering premium
                storage solutions for your valuable crops. With a focus on
                quality and excellence, we provide a secure and reliable
                environment to store your produce, ensuring that it maintains
                its freshness and value.
              </h1>
              <div className="flex flex-col gap-y-4 justify-start items-start">
                <p>
                  We are a dedicated team committed to supporting farmers by
                  providing top-notch storage facilities for their crops. With
                  years of experience in the industry, we understand the
                  importance of proper storage in preserving the quality of your
                  harvest.
                </p>
                <button className="p-2 rounded font-semibold bg-neutral-200">
                  Get started
                </button>
              </div>
            </div>
            <img
              src="https://plus.unsplash.com/premium_photo-1661849446191-8793e93a27c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGNyb3BzJTIwc3RvcmFnZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="crops"
              className="rounded-md"
            />
          </div>
        </header>

        <main className="my-8">
          <section>
            <div className="flex my-2 justify-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1664297166040-4f5dd279f234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGNyb3BzJTIwc3RvcmFnZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="storing crops"
                className="rounded-md"
              />
              <p className="pl-8">
                Our primary goal is to offer farmers a trusted space to store
                their crops with the highest standards of care. From
                temperature-controlled environments to vigilant security
                measures, we ensure that your produce remains in optimal
                condition until it's ready for market. Experience peace of mind
                knowing that your crops are in safe hands at Our Farmers
                Warehouse. Let us help you safeguard your harvest and maintain
                its quality for the market ahead.
              </p>
            </div>
          </section>

          <section className="my-10">
            <InventoryLevels />
          </section>
        </main>
        <footer className=" w-full overflow-hidden bg-green-600 rounded-t-xl">
          <section className="text-neutral-200 grid p-4 grid-cols-3">
            <div>
              <p>Phone: 123-456-7890</p>
              <p>Email: info@farmerswarehouse.com</p>
              <p>Address: 123 Main Street, City, Country</p>
            </div>
            <div className="flex flex-col items-center justify-center font-bold">
              <p>&copy; 2024 Farmer's Warehouse. All Rights Reserved.</p>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
}
