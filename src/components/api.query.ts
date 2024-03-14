 import { useQuery } from "react-query";
import ApiRequest from "../api-request/api-request";
 
export const movieRequest = {
    getChequeCollectorDocumentEnum: {
      controllerName: "/movie/now_playing",
      actionName: "GET_CHEQUE_COLLECTOR_DOCUMENT_ENUM",
      requestMethod: 'GET',
    },
    searchMovies: {
      controllerName: "search/keyword",
      actionName: "SEARCH_MOVIES",
      requestMethod: 'GET',
    },
  };
 
export const useGetNowPlayingMovies = () => {
    return useQuery({
      queryKey: [movieRequest.getChequeCollectorDocumentEnum.actionName],
      queryFn() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return ApiRequest<any>({
          apiDetails: movieRequest.getChequeCollectorDocumentEnum,
        });
      },
      select(data) {
        return data?.data?.data;
      },
    });
  }; 

  export const useSearchMovies= (query?:any) => {
    return useQuery({
      queryKey: [movieRequest.searchMovies.actionName],
      queryFn() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return ApiRequest<any>({
          apiDetails: movieRequest.searchMovies,
          params:{query}
        });
      },
      select(data) {
        return data?.data?.data;
      },
    });
  }; 
