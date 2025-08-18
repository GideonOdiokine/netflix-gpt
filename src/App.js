import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";

import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import AuthListener from "./components/AuthListener";

function RootLayout() {
  return (
    <>
      <ToastContainer />
      <AuthListener />
      <Outlet />
    </>
  );
}

function App() {
  const appRouter = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        { path: "/", element: <Login /> },
        { path: "/browse", element: <Browse /> },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
