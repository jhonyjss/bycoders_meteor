import { Navigate, useRoutes } from "react-router-dom";
import Forecasts from "../pages/forecasts";
import AddForecast from "../pages/add-forecast";

const Router = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <Navigate to="/forecasts" replace={true} />
    },
    {
      path: "/add-forecast",
      element: <AddForecast />
    },
    {
      path: "/forecasts",
      element: <Forecasts />
    }
  ]);
  return router;
};

export default Router;
