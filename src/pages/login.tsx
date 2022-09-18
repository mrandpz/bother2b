import { useMemoizedFn } from "ahooks";

export default () => {
  const handleSubmit = useMemoizedFn((event) => {
    event.preventDefault();
    const values = [...event.target]
      .filter((it) => it.name)
      .reduce((prev, next) => {
        prev[next.name] = next.value;
        return prev;
      }, {});
  });

  return (
    <div className=" h-full w-full flex">
      <form className="w-96 m-auto" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-slate-700">
            Username
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="username"
              id="username"
              className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
            />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">
            Email
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white w-full"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
