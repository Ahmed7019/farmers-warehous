import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export default function Loading() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full bg-green-400 text-neutral-200 absolute">
        <ClimbingBoxLoader color="#ffffff" aria-label="Loading Spinner" data-testid="loader" />;
      </div>
    </>
  );
}
