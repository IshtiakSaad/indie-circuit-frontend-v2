import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "../layout/MainLayout";
import AuthPage from "../pages/AuthPage";
import MentorsPage from "../pages/MentorsPage";
import Mentor from "../components/Mentor/Mentor";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

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
        loader: async () => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );
          if (!response.ok) {
            throw new Error("Failed to fetch mentors");
          }
          return response.json();
        },
        element: <MentorsPage />,
      },
      {
        path: "/mentors/:id",
        loader: async ({ params }) => {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${params.id}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch mentor details");
          }
          return response.json();
        },
        element: <Mentor />,
      },
    ],
  },
]);

export default router;
