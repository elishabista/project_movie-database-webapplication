import { useQuery } from "react-query";
import ApiRequest from "../../api-request/api-request";
import { MovieDetailsById } from "./movieDetail.schema";

const movieDetail = {
  getMovieById: {
    controllerName: "/movie/{id}",
    actionName: "GET_MOVIE_DETAILS_BY_ID",
    requestMethod: "GET",
  },
  getTopRatedMovie: {
    controllerName:
      "/movie/top_rated?api_key=9a1f0154eb285e11c3dbc34456557692",

    actionName: "GET_MOVIE_DETAILS_BY_ID",
    requestMethod: "GET",
  },
};

export const useGetMovieDetailsById = (id: string | number) => {
  return useQuery({
    queryKey: [movieDetail.getMovieById.actionName, id],
    queryFn() {
      return ApiRequest<MovieDetailsById>({
        apiDetails: movieDetail.getMovieById,
        pathVariables: { id },
      });
    },
    select(data) {
      return data?.data;
    },
    enabled: !!id,
  });
};

export const useGetTopRatedMovies = () => {
  return useQuery({
    queryKey: [movieDetail.getTopRatedMovie.actionName],
    queryFn() {
      return ApiRequest<MovieDetailsById>({
        apiDetails: movieDetail.getTopRatedMovie,
     
      });
    },
    select(data) {
      return data?.data;
    },
  
  });
};
