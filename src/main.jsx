import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Tableau from "./routes/Tableau.jsx";
import HearthStone from "./routes/HearthStone.jsx";
import CardImage from "./routes/CardImage.jsx";
import StopLight from "./routes/StopLight.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/array-challenge",
    element: <Tableau />,
  },
  {
    path: "/stop-light",
    element: <StopLight />,
  },
  {
    path: "/hearthstone",
    element: <HearthStone />,
  },
  {
    path: "/hearthstone/card-image",
    element: <CardImage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
