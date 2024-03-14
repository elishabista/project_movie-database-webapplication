import { useQuery } from "react-query";
import ApiRequest from "../api-request/api-request";

export const movieRequest = {
   searchMovies: {
    controllerName: "search/movie",
    actionName: "SEARCH_MOVIES",
    requestMethod: "GET",
  },
  getGenreList: {
    controllerName: "genre/movie/list",
    actionName: "GENRE_MOVIES",
    requestMethod: "GET",
  },
  
};



export const useSearchMovies = (query?: any) => {
  return useQuery({
    queryKey: [movieRequest.searchMovies.actionName],
    queryFn() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return ApiRequest<any>({
        apiDetails: movieRequest.searchMovies,
        params: { query },
      });
    },
    select(data) {
      return data?.data?.data;
    },
  });
};
export const useGetGenereListMovies = () => {
  return useQuery({
    queryKey: [movieRequest.getGenreList.actionName],
    queryFn() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return ApiRequest<any>({
        apiDetails: movieRequest.getGenreList,
   
      });
    },
    select(data) {
      return data?.data?.data;
    },
  });
};