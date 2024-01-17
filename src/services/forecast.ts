import { AxiosResponse } from "axios";
import http from "../http";
import { WeatherApiResponse } from "@openmeteo/sdk/weather-api-response";

type forecastCoords = {
  latitude: number;
  longitude: number;
  daily?: string; // temperature_2m,relative_humidity_2m,showers,visibility
  hourly?: string; // temperature_2m,relative_humidity_2m,showers,visibility
  timezone?: string; // America/Sao_Paulo
  format?: string; //json
  timeformat?: string; // unixtime
};

export const all = (
  params: forecastCoords
): Promise<AxiosResponse<WeatherApiResponse | unknown>> => {
  try {
    const response = http.get("/forecast", { params });
    return response;
  } catch (error: any) {
    console.error(error);
    return Promise.reject(error);
  }
};

export { WeatherApiResponse };
