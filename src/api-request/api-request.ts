/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
import { access_token, baseURL } from "../constatnts/constants";


const headers = {
  accept: "application/json",
  Authorization: "Bearer " + access_token,
};

interface GenericDataType {
  [key: string]: string | number;
}

interface ApiRequestProps {
  apiDetails: any;
  reqData?: GenericDataType;
  params?: GenericDataType;
  pathVariables?: GenericDataType | undefined;
}

export const pathParamSanitizer = (
  path: string,
  params: GenericDataType | undefined,
  identifier: "{}" | ":" = ":"
) => {
  return Object.entries(params || {}).reduce(
    // eslint-disable-next-line no-return-assign
    (acc, [key, value]) =>
      // eslint-disable-next-line no-param-reassign,no-return-assign
      (acc = acc.replace(
        identifier === "{}" ? `{${key}}` : `:${key}`,
        String(value)
      )),
    path
  );
};

const ApiRequest = async <TData>({
  apiDetails,
  reqData,
  params,
  pathVariables,
}: ApiRequestProps): Promise<AxiosResponse<TData> | undefined> => {
  const { controllerName, requestMethod } = apiDetails;
  let axiosPayload: any = {
    baseURL:baseURL,
    url: pathParamSanitizer(controllerName, pathVariables, "{}"),
    method: requestMethod,
    headers: headers,
    data: reqData,
  };
  if (params) {
    axiosPayload = {
      ...axiosPayload,
      params: params,
    };
  }

  const apiResponse = axios
    .request<TData>(axiosPayload)
    .then((response: any) => response)
    .catch((error: any) => {
      console.log("error:", error);
    });
  return apiResponse;
};

export default ApiRequest;
