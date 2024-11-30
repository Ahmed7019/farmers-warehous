/* eslint-disable react/no-unescaped-entities */
export default function AboutUs() {
  return (
    <>
      <div className="relative  ml-40">
        <h1 className="font-bold text-xl my-2 relative top-10">
          Our Solutions
        </h1>
        <div className=" mt-32 grid grid-cols-2 gap-2">
          <section className="bg-green-200 p-2 rounded-md row-start-1 row-span-2 ">
            <p className="text-2xl font-bold">About us</p>
            <p>
              We are a dedicated team committed to supporting farmers by
              providing top-notch storage facilities for their crops. With years
              of experience in the industry, we understand the importance of
              proper storage in preserving the quality of your harvest.
            </p>
          </section>
          <section className="bg-green-200 p-2 rounded-md row-start-4 col-start-2">
            <p className="text-2xl font-bold">What We Do:</p>
            <p>
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
