import { AxiosResponse } from "axios";
import http from "../http";
import { WeatherApiResponse } from "@openmeteo/sdk/weather-api-response";

type forecastCoords = {
  latitude: number;
  longitude: number;
};

export const all = (
  params: forecastCoords
): Promise<AxiosResponse<WeatherApiResponse[]>> => {
  try {
    const response = http.get("/forecast", { params });
    return response;
  } catch (error: any) {
    console.error(error);
    return error;
  }
};
