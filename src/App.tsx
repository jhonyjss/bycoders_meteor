import { useEffect, useState } from "react";
import BaseContainer from "./components/BaseContainer";
import { all as forecasts } from "./services/forecast";
import BaseCard from "./components/BaseCard";

const App = (): JSX.Element => {
  useEffect(() => {
    const fetchAllForecast = async () => {
      return await forecasts({
        latitude: 52.52,
        longitude: 13.419998
      });
    };

    fetchAllForecast();
  }, []);

  return (
    <>
      <BaseContainer>
        <section className="flex justify-center items-center">
          {[1, 2, 3].map((item) => {
            return (
              <BaseCard key={item}>
                <h1>teste</h1>
              </BaseCard>
            );
          })}
        </section>
        <h1 className="text-green-200 text-lg">teste</h1>
      </BaseContainer>
    </>
  );
};

export default App;
