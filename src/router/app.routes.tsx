import { createBrowserRouter } from "react-router-dom";
import MovieDetail from "../core/MovieDetails/MovieDetail";
import Home from "../core/HomePage/Home";
import Error from "../components/Error";
import Layout from "../core/Layout";
import TopRatedListAll from "../core/TopRated/TopRatedListAll";
import UpcomingMovieList from "../core/Upcoming/UpcomingMovieList";

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
  {
    path: "/top-rated",
    element: <TopRatedListAll />,
  },
  {
    path: "/upcoming-movies",
    element: <UpcomingMovieList />,
  },
]);
