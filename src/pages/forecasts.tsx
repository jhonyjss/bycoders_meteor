import { useMemo } from "react";
import BaseContainer from "../components/BaseContainer";
import BaseCard from "../components/BaseCard";
import { getDayOfWeek, getNext7CurrentTime } from "../utils";
import useWeather from "../hooks/useWeather";
import { WeatherConditionDescriptions } from "../interfaces/IWeatherConditions";
import { useNavigate } from "react-router-dom";

const Forecasts = (): JSX.Element => {
  const navigate = useNavigate();
  const [, weather] = useWeather();

  const handleAddForecast = () => {
    navigate("/add-forecast");
  };

  const weathers = useMemo(() => weather, [weather]);

  return (
    <>
      <BaseContainer>
        <section className="flex flex-col justify-left items-center h-full">
          <div className="flex items-center">
            <button
              onClick={handleAddForecast}
              className="mt-8 bg-blue-500 text-white px-12 py-5 my-5 rounded-md hover:bg-blue-600 hover:transition"
            >
              Adicionar
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 w-full">
            {weathers &&
              weathers.map((item, index) => {
                return (
                  <BaseCard key={index}>
                    <div className="flex flex-col min-h-[450px] relative">
                      <div className="wrapper-card">
                        <div className="flex justify-between">
                          <span className="text-md font-semibold text-center my-5 px-4 text-gray-500">
                            Lat: {item.latitude}
                          </span>
                          <span className="text-md font-semibold text-center my-5 px-4 text-gray-500">
                            Lon: {item.longitude}
                          </span>
                        </div>
                        <div className="flex items-center justify-center min-h-32 px-4 text-4xl">
                          <div className="temparature font-bold text-stone-700">
                            {WeatherConditionDescriptions[item.daily.weather_code[0]]}{" "}
                            {item.daily.temperature_2m_max[0]}
                          </div>
                        </div>
                        <div className="inline-grid grid-cols-7 h-32">
                          {item.daily.temperature_2m_max.map((temp, i) => {
                            return (
                              <div key={i} className="flex flex-col items-center">
                                <span className="text-sm font-bold py- px-5">
                                  {temp}
                                  {item.daily_units.temperature_2m_max}
                                </span>
                                <span className="text-xs font-bold text-gray-400">
                                  {getNext7CurrentTime(item.hourly.time)[i]}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="flex absolute bottom-0">
                        <div className="inline-grid grid-cols-7 h-40">
                          {item.daily.time.map((temp, i) => {
                            return (
                              <div key={i} className="flex flex-col items-center p-6 border-r-2 border-t-2 gap-y-2">
                                <span className="font-bold text-sm">{getDayOfWeek(temp)}</span>
                                <span>{WeatherConditionDescriptions[item.daily.weather_code[i]]}</span>
                                <span className="text-sm font-bold">
                                  {item.daily.temperature_2m_max[i]}
                                  {item.daily_units.temperature_2m_max}
                                </span>
                                <span className="text-xs font-bold text-gray-400">
                                  {item.daily.temperature_2m_min[i]}
                                  {item.daily_units.temperature_2m_min}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </BaseCard>
                );
              })}
          </div>
        </section>
        <h1 className="text-green-200 text-lg">teste</h1>
      </BaseContainer>
    </>
  );
};

export default Forecasts;
