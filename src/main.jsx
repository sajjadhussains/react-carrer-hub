import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Root from "./components/Root/Root.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Applied from "./components/Applied/Applied.jsx";
import Blog from "./components/Blog/Blog.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import JobDetails from "./components/JobDetails/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/applied",
        element: <Applied></Applied>,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("../jobs.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
