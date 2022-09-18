import { Link, Outlet, useLoaderData } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        sidervar
        <nav></nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
