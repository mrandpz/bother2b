import { NavLink } from "react-router-dom";
// import { appMenus } from "../routes";

export const Sidebar = () => {
  return (
    <div id="sidebar" className="h-full w-48 absolute left-0 z-50">
      <ul className="list-none mx-4 mt-8">
        {/* {appMenus.map((menu) => (
          <li className="my-2" key={menu.path}>
            <NavLink
              to={menu.path}
              className={({ isActive, isPending }) => {
                let classnames =
                  "w-full box-border block pl-2 py-1 cursor-pointer rounded-md hover:bg-blue-100 hover:text-blue-500 ";

                if (isActive) {
                  classnames += "bg-blue-100 text-blue-500";
                } else {
                  classnames += "text-gray-500";
                }
                if (isPending) {
                  console.info("isPending", isPending);
                }
                return classnames;
              }}
            >
              {menu.name}
            </NavLink>
          </li>
        ))} */}
      </ul>
    </div>
  );
};
