import { useState } from "react";
import BaseContainer from "../components/BaseContainer";
import useWeather from "../hooks/useWeather";
import { useNavigate } from "react-router-dom";

const AddForecast = (): JSX.Element => {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [save] = useWeather();
  const navigate = useNavigate();

  const handleGoToList = () => {
    navigate("/forecasts");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Perform any necessary validation before saving
    if (longitude && latitude) {
      try {
        const weatherData = {
          longitude: parseFloat(longitude),
          latitude: parseFloat(latitude)
          // Add any other relevant data
        };
        save(weatherData);
        // Optionally, you can clear the form inputs after submission
        setLongitude("");
        setLatitude("");
        navigate("/forecasts");
      } catch (error) {
        console.error(error);
        alert("Houve um erro ao inserir este item");
      }
    }
  };
  return (
    <BaseContainer>
      <div className="flex flex-col justify-center items-center h-full">
        <form onSubmit={handleSubmit} className="mt-4 mx-4">
          <div className="flex flex-row space-x-4 justify-center items-center">
            <div>
              <label className="flex flex-col text-2xl font-medium text-gray-700">
                Longitude:
                <input
                  type="number"
                  step="0.0000000"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  required
                  className="mt-1 p-2 border border-emerald-600 shadow rounded-md h-20 text-3xl"
                />
              </label>
            </div>
            <div>
              <label className="flex flex-col text-2xl font-medium text-gray-700">
                Latitude:
                <input
                  type="number"
                  step="0.0000000"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  required
                  className="mt-1 p-2 border border-emerald-600 shadow rounded-md h-20 text-3xl"
                />
              </label>
            </div>
            <div>
              <button type="submit" className="mt-8 bg-blue-500 text-white p-6 rounded-md">
                Adicionar
              </button>
            </div>
          </div>
        </form>
        <div className="flex w-full lg:px-[23rem]">
          <button onClick={handleGoToList} className="bg-gray-300 text-stone-800 p-5 hover:bg-gray-200 w-full mt-12">
            VER LISTAGEM
          </button>
        </div>
      </div>
    </BaseContainer>
  );
};

export default AddForecast;
