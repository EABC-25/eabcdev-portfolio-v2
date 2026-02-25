import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import clsx from "clsx";
import {
  FaLinkedin,
  FaGithub,
  FaChevronRight,
  FaChevronLeft,
  FaDownload,
} from "react-icons/fa";

type SideContentPath = "/projects" | "/tools";

const SIDECONTENT_PATHS: SideContentPath[] = ["/projects", "/tools"];

function Layout() {
  const location = useLocation();
  const [sideActive, setSideActive] = useState(false);

  return (
    <div className="h-full flex flex-col">
      <header>
        <div className="header-container">
          <div className="title-container">
            <h1 className="title-letter">E</h1>
            <h1 className="title-letter">A</h1>
            <h1 className="title-letter">B</h1>
            <h1 className="title-letter">C</h1>
            <h1 className="title-letter">D</h1>
            <h1 className="title-letter">E</h1>
            <h1 className="title-letter">V</h1>
          </div>
          <div className="slider-relative">
            <div className="slider-absolute">
              <div className="slider-mark" />
            </div>
          </div>
        </div>
      </header>
      <main className="relative flex flex-1 min-h-0 overflow-hidden bg-emerald-500">
        <section className="flex-1 max-w-[200px]">
          <h1>Section</h1>
        </section>

        {/* SideContent */}

        <div
          className={clsx("flex flex-1 h-full page-content", {
            active: sideActive,
          })}
        >
          <button
            type="button"
            className={clsx("page-content-button", {
              active: sideActive,
            })}
            onClick={() => {
              setSideActive(!sideActive);
            }}
          >
            {sideActive ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
          <Outlet />
        </div>
      </main>
      <footer className="h-[5dvh] flex items-center bg-blue-700">FOOTER</footer>
    </div>
  );
}

export default Layout;
