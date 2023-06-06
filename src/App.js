import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";

import Login from "./components/login/Login";
import Protected from "./components/security/protected/Protected";
import { useState } from "react";
import PageNotFound from "./components/security/pageNotFound/PageNotFound";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };
  const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/login" /> },
    {
      path: "/login",
      element: <Login loginHandler={loginHandler} />,
    },
    {
      path: "/home",
      element: (
        <Protected isSignedIn={isLoggedIn}>
          <Dashboard />
        </Protected>
      ),
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
