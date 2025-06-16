import { createBrowserRouter } from "react-router";
import { App } from "@pages/app/App";
import React from "react";


const RdpProductComponent = React.lazy(async () => {
  const module = await import('@pages/product/rdp/RdpProduct');
  return { default: module.RdpProduct };
});

export const router = createBrowserRouter([
  {
    path: "/portfolio",
    Component: App,
  },
    {
    path: "/portfolio/rdp",
    Component: RdpProductComponent,
  },
]);
