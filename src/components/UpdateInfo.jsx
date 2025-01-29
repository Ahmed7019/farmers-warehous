export default function UpdateInfo() {
  return (
    <>
      <div className="max-w-screen-md">
        <form className="flex flex-col gap-2 bg-slate-200 p-4 rounded-md border border-black">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-neutral-700 p-2 outline-none rounded-md"
          />
          <input
            type="password"
            placeholder="Enter your current password"
            className="border border-neutral-700 p-2 outline-none rounded-md"
          />
          <input
            type="password"
            placeholder="Enter your New password"
            className="border border-neutral-700 p-2 outline-none rounded-md"
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="border border-neutral-700 p-2 outline-none rounded-md"
          />
          <button
            type="submit"
            className="p-2 border border-black rounded hover:text-slate-300 hover:bg-black transition-colors"
          >
            Confirm
          </button>
        </form>
      </div>
    </>
  );
}
