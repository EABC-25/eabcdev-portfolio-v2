import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="h-full flex flex-col px-[10px]">
      <header className="h-[8dvh] bg-blue-700">
        <h1 className="h-full flex items-center">HEADER</h1>
      </header>
      <main className="flex flex-1 min-h-0 overflow-auto bg-emerald-500">
        <section className="flex-1 max-w-[200px]">SECTION</section>
        <Outlet />
      </main>
      <footer className="h-[5dvh] flex items-center bg-blue-700">FOOTER</footer>
    </div>
  );
}

export default Layout;
