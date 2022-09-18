import { NavLink, Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export default function App() {
  return (
    <div className="h-screen w-screen flex relative overflow-hidden font-sans">
      <Sidebar />
      <header className="h-16 pl-48 box-border w-full absolute top-0 flex-1 flex justify-between">
        <div>1</div>
        <div>2</div>
      </header>
      asd
      <div className="ml-48 mt-16 relative flex flex-1 overflow-auto">
        <div id="detail" className="flex-1 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
