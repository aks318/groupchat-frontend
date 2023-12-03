import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { socket } from "socket";
import { SET_LOADER, SET_MESSAGE } from "store/authReducer/authConstants";

import { store } from "store/store";
// import { clearState } from "./clearState";
const { dispatch } = store;

const API: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: false,
});

const onRequest = (
  config: InternalAxiosRequestConfig<any>
): InternalAxiosRequestConfig => {
  const { token } = store.getState().authReducer;
  if (config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.socketid = socket.id;
  }
  dispatch({
    type: SET_LOADER,
    payload: true,
  });
  return config;
};
const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.log(error);
  dispatch({
    type: SET_LOADER,
    payload: false,
  });
  return Promise.reject(error);
};
const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.log(response);
  dispatch({
    type: SET_LOADER,
    payload: false,
  });
  return response;
};
const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  console.log(error.response);
  if (error.response) {
    dispatch({
      type: SET_MESSAGE,
      payload: {
        text: error.response.data,
        status: "error",
      },
    });
  }
  dispatch({
    type: SET_LOADER,
    payload: false,
  });
  return Promise.reject(error);
};

API.interceptors.request.use(
  (request) => onRequest(request),
  (error: AxiosError) => onRequestError(error)
);
API.interceptors.response.use(
  (response) => onResponse(response),
  (error: AxiosError) => onResponseError(error)
);

export default API;
