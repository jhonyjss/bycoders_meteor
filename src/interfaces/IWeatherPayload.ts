export interface IWeatherPayload {
  latitude: number;
  longitude: number;
  daily?: string; // "temperature_2m_min,temperature_2m_max,weather_code",
  hourly?: string; // "temperature_2m,relative_humidity_2m,visibility,weather_code",
  timezone?: string; // "America/Sao_Paulo"
}
