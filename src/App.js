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

const App = () => {
  const { theme } = useContext(ThemeContext);

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
    <div className={theme === "dark" && "dark-theme"}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
