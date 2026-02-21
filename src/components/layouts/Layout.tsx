import { Outlet } from "react-router-dom";
import clsx from "clsx";
import {
  FaLinkedin,
  FaGithub,
  FaChevronRight,
  FaChevronLeft,
  FaDownload,
} from "react-icons/fa";

import { useState } from "react";

function Layout() {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div className="h-full flex flex-col">
      <header>
        <h1>H</h1>
        <h1>E</h1>
        <h1>A</h1>
        <h1>D</h1>
        <h1>E</h1>
        <h1>R</h1>
      </header>
      <main className="relative flex flex-1 min-h-0 overflow-hidden bg-emerald-500">
        <section className="flex-1 max-w-[200px]">SECTION</section>
        <div
          className={clsx("flex flex-1 h-full page-content", {
            active: sidebarActive,
          })}
        >
          <button
            type="button"
            className={clsx("page-content-button", {
              active: sidebarActive,
            })}
            onClick={() => {
              setSidebarActive(!sidebarActive);
            }}
          >
            {sidebarActive ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
          <Outlet />
        </div>
      </main>
      <footer className="h-[5dvh] flex items-center bg-blue-700">FOOTER</footer>
    </div>
  );
}

export default Layout;
