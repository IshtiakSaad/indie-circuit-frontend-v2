import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "../layout/MainLayout";
import AuthPage from "../pages/AuthPage";
import MentorsPage from "../pages/MentorsPage";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import MentorDetailsPage from "../pages/MentorDetailsPage";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About />,
          </PrivateRoute>
        ),
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      {
        path: "/all-mentors",
        element: <MentorsPage />,
      },
      {
        path: "/mentors/:uid",
        element: <MentorDetailsPage/>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
