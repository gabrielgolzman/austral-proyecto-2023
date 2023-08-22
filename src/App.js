import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";

import Login from "./components/login/Login";
import Protected from "./components/security/protected/Protected";
import { useContext, useState } from "react";
import PageNotFound from "./components/security/pageNotFound/PageNotFound";
import { ThemeContext } from "./services/theme/theme.context";
import { APIContext } from "./services/api/api.context";
import Spinner from "./components/ui/Spinner/Spinner";

const App = () => {
  const { theme } = useContext(ThemeContext);
  const { isLoading } = useContext(APIContext);

  const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/login" /> },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: (
        <Protected>
          <Dashboard />
        </Protected>
      ),
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <div
      className={`${theme === "dark" && "dark-theme"} ${
        isLoading && "opacity-80"
      }`}
    >
      {isLoading && <Spinner />}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
