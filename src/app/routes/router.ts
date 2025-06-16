import { createBrowserRouter } from "react-router";
import App from "../../pages/app/App";

export const router = createBrowserRouter([
  {
    path: "/portfolio",
    Component: App,
    children: [
    ]
  },
]);
