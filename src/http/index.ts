import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError
} from "axios";

const http: AxiosInstance = axios.create({
  baseURL: "https://api.open-meteo.com/v1"
});

http.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // Handle the error here. You might want to display a notification or log it somewhere.
    console.error(error);
    return Promise.reject(error);
  }
);

export default http;
