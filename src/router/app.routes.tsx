import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MovieDetail from "../core/MovieDetails/MovieDetail";

const Layout = lazy(() => import("../core/Layout"));

const Home = lazy(() => import("../core/HomePage/Home"));
const Error = lazy(() => import("../components/Error"));


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
    ],
  },
]);
