import { useQuery } from "react-query";
import ApiRequest from "../../api-request/api-request";
import { MovieDetailsById } from "./movieDetail.schema";

const getMovieById = {
  controllerName: "/movie/{id}",
  actionName: "GET_MOVIE_DETAILS_BY_ID",
  requestMethod: "GET",
};

export const useGetMovieDetailsById = (id: string | number) => {
  return useQuery({
    queryKey: [getMovieById.actionName, id],
    queryFn() {
      return ApiRequest<MovieDetailsById>({
        apiDetails: getMovieById,
        pathVariables: { id },
      });
    },
    select(data) {
      return data?.data;
    },
    enabled: !!id,
  });
};
