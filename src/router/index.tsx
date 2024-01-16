import { useRoutes } from "react-router-dom";
import App from "../App";

const Router = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <App />
    }
  ]);
  return router;
};

export default Router;
