import { useCallback, useEffect } from "react";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";
import { IWeatherData } from "../interfaces/IWeatherData";
import { all as forecasts } from "../services/forecast";
import { IWeatherPayload } from "../interfaces/IWeatherPayload";

const weatherList = atomWithStorage<IWeatherData[]>("weather-list", []);

const useWeather = (): [(data: IWeatherPayload) => Promise<void>, IWeatherData[]] => {
  const [weather, setWeather] = useAtom(weatherList);

  const save = useCallback(
    async (data: IWeatherPayload) => {
      const dailyResponse = await forecasts({
        ...data,
        daily: "temperature_2m_min,temperature_2m_max,weather_code"
      });
      const hourlyResponse = await forecasts({
        ...data,
        hourly: "temperature_2m,relative_humidity_2m,visibility,weather_code"
      });

      const result = await Promise.all([dailyResponse, hourlyResponse]);

      const finalData = {
        ...(result[0].data as Record<string, never>),
        ...(result[1].data as Record<string, never>)
      };

      setWeather((prev: IWeatherData[]): any => {
        return [...prev, finalData];
      });
    },
    [setWeather]
  );

  useEffect(() => {
    const storedData = localStorage.getItem("weather-list");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setWeather(parsedData);
    }
  }, [setWeather]);

  return [save, weather];
};

export default useWeather;
