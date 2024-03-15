import { useQuery } from "react-query";
import ApiRequest from "../../../api-request/api-request";
import { CommonMovieResponse, TopRatedMovieResponse } from "./home.schema";


export const movieRequest = {
  getNowPlayingMovies: {
    controllerName: "/movie/now_playing",
    actionName: "GET_NOW_PLAYING_MOVIES",
    requestMethod: "GET",
  },
  getTopRatedMovies: {
    controllerName: "/movie/top_rated",
    actionName: "GET_TOP_RATED_MOVIES",
    requestMethod: "GET",
  },
  getUpcomingMovies: {
    controllerName: "/movie/upcoming",
    actionName: "GET_UPCOMING_MOVIES",
    requestMethod: "GET",
  }
};

export const useGetNowPlayingMovies = () => {
    return useQuery({
        queryKey: [movieRequest.getNowPlayingMovies.actionName],
        queryFn() {
            return ApiRequest<CommonMovieResponse>({
                apiDetails: movieRequest.getNowPlayingMovies,
            });
        },
        select(data) {
            return data?.data;
        },
    });
};
export const useGetTopRatedMovies = (currentPage=1) => {
  return useQuery({
    queryKey: [movieRequest.getTopRatedMovies.actionName,currentPage],
    queryFn() {
      return ApiRequest<TopRatedMovieResponse>({
        apiDetails: movieRequest.getTopRatedMovies,
        params:{
          page:currentPage
        }
      });
    },
    select(data) {
      return data?.data;
    },
  });
};

export const useGetUpcomingMovies = (currentPage=1) => {
  return useQuery({
    queryKey: [movieRequest.getUpcomingMovies.actionName,currentPage],
    queryFn() {
      return ApiRequest<CommonMovieResponse>({
        apiDetails: movieRequest.getUpcomingMovies,
        params:{
          page:currentPage
        }
      });
    },
    select(data) {
      return data?.data;
    },
  });
};