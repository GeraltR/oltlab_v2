import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./styles/theme.css";
import "./styles/globals.css";
import { MainPage } from "./views/MainPage.jsx";
import { Helmet } from "react-helmet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <Helmet>
      <title>Oltlab</title>
    </Helmet>
    <StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </StrictMode>
  </>
);
