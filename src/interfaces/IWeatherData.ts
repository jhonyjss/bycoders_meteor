import { WeatherCondition } from "./IWeatherConditions";

interface DailyData {
  time: string[];
  temperature_2m_min: number[];
  temperature_2m_max: number[];
  weather_code: WeatherCondition[];
}

interface HourlyData {
  time: string[];
  temperature_2m: number[];
  relative_humidity_2m: number[];
  visibility: number[];
  weather_code: WeatherCondition[];
}

interface DailyUnits {
  time: string;
  temperature_2m_min: string;
  temperature_2m_max: string;
  weather_code: string | number;
}

interface HourlyUnits {
  time: string;
  temperature_2m: string;
  relative_humidity_2m: string;
  visibility: string;
  weather_code: string;
}

export interface IWeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: DailyUnits;
  daily: DailyData;
  hourly_units: HourlyUnits;
  hourly: HourlyData;
}
