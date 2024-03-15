import { useQuery } from "react-query";
import { HeaderSearchResponse } from "./header.schema";
import ApiRequest from "../../api-request/api-request";


 const getSearchMovieByValue = {
    controllerName: "/search/movie",
    actionName: "GET_SEARCH_MOVIES_BY_VALUE",
    requestMethod: "GET",
  }


export const useGetSearchMoviesByValue = (value: string | number) => {
  return useQuery({
    queryKey: [getSearchMovieByValue.actionName, value],
    queryFn() {
      return ApiRequest<HeaderSearchResponse>({
        apiDetails: getSearchMovieByValue,
        params: { query:value },
      });
    },
    select(data) {
      return data?.data;
    },
    enabled: !!value,
  });
};
