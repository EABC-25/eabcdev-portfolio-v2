import { NavLink } from "react-router-dom";

function SideContent() {
  return (
    <div className="h-full flex-1 bg-emerald-600 border">
      <div className="flex h-full w-full">
        <nav className="flex flex-col gap-1 pt-[100px]">
          <NavLink
            className="text-3xl p-[15px] bg-slate-500 cursor-pointer"
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            className="text-3xl p-[15px] bg-slate-500 cursor-pointer"
            to="/tools"
          >
            Tools
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default SideContent;
