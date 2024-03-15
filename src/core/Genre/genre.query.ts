import { useQuery } from "react-query";
import ApiRequest from "../../api-request/api-request";
import { GenreListResponse } from "./genre.schema";
import { HeaderSearchResponse } from "../../components/Header/header.schema";

export const movieByGenre = {
  getGenreList: {
    controllerName: "genre/movie/list",
    actionName: "GET_MOVIES_BY_GENRE",
    requestMethod: "GET",
  },
  discoverMovie: {
    controllerName:"discover/movie",
    actionName:"DISCOVER_MOVIE_BY_GENRE",
    requestMethod:"GET"
  }
  
};




export const useGetGenreList = () => {
  return useQuery({
    queryKey: [movieByGenre.getGenreList.actionName],
    queryFn() {
      return ApiRequest<GenreListResponse>({
        apiDetails: movieByGenre.getGenreList,
   
      });
    },
    select(data) {
      return data?.data;
    },
  });
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDiscoverMovies = (query?: any) => {
    return useQuery({
      queryKey: [movieByGenre.discoverMovie.actionName,query],
      queryFn() {
        return ApiRequest<HeaderSearchResponse>({
          apiDetails: movieByGenre.discoverMovie,
          params: query,
        });
      },
      select(data) {
        return data?.data;
      },
    });
  };