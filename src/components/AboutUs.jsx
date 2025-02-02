/* eslint-disable react/no-unescaped-entities */
export default function AboutUs() {
  return (
    <>
      <div className="relative  mx-4 mt-4">
        <h1 className="font-bold text-xl my-2 relative top-10">
          Our Solutions
        </h1>
        <div className=" mt-32 grid sm:grid-cols-2">
          <section className="bg-green-600 text-neutral-200 p-2 rounded-t-md row-start-1 col-span-2 flex flex-col sm:flex-row gap-2">
            <div className="flex flex-col">
              <p className="text-2xl font-bold my-2">About us</p>
              <p className="text-lg">
                We are a dedicated team committed to supporting farmers by
                providing top-notch storage facilities for their crops. With
                years of experience in the industry, we understand the
                importance of proper storage in preserving the quality of your
                harvest.
              </p>
            </div>
            <div className="overflow-hidden ">
              <img
                src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNyb3BzfGVufDB8fDB8fHww"
                alt="warehoues"
                className="rounded sm:w-[1080px]"
              />
            </div>
          </section>
          <section className="bg-green-500 text-neutral-200 p-2 rounded-b-md  col-span-2 flex flex-col sm:flex-row gap-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1661295675442-f151fdf7ba52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRydXN0fGVufDB8fDB8fHww"
              alt="shaking with trust"
              className="rounded"
            />
            <p className="text-lg mx-8">
              Our primary goal is to offer farmers a trusted space to store
              their crops with the highest standards of care. From
              temperature-controlled environments to vigilant security measures,
              we ensure that your produce remains in optimal condition until
              it's ready for market. Experience peace of mind knowing that your
              crops are in safe hands at Our Farmers' Warehouse. Let us help you
              safeguard your harvest and maintain its quality for the market
              ahead.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
