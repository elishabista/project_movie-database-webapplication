import { useQuery } from "react-query";
import ApiRequest from "../../api-request/api-request";
import { MovieDetailsById } from "./movieDetail.schema";

const movieDetail = {
  getMovieById: {
    controllerName: "/movie/{id}",
    actionName: "GET_MOVIE_DETAILS_BY_ID",
    requestMethod: "GET",
  },
  getTrendingMovies: {
    controllerName: "trending/movie/day",
    actionName: "GET_TRENDING_MOVIES",
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
export const useGetTrendingMovies = () => {
  return useQuery({
    queryKey: [movieDetail.getTrendingMovies.actionName],
    queryFn() {
      return ApiRequest<any>({
        apiDetails: movieDetail.getTrendingMovies,
      });
    },
    select(data) {
      return data?.data;
    },
  });
};
