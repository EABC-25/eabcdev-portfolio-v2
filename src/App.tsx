import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import SideContent from "./components/pages/SideContent";
import About from "./components/pages/About";
import Error from "./components/pages/Error";
import Projects from "./components/pages/Projects";
import Tools from "./components/pages/Tools";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <SideContent /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "tools", element: <Tools /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
