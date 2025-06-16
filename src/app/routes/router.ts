import { createHashRouter } from "react-router";
import { App } from "@pages/app/App";
import React from "react";


const RdpProductComponent = React.lazy(async () => {
  const module = await import('@pages/product/rdp/RdpProduct');
  return { default: module.RdpProduct };
});

const LandingPageComponent = React.lazy(async () => {
  const module = await import('@pages/landing/LandingPage');
  return { default: module.LandingPage };
});

export const router = createHashRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: LandingPageComponent
      },
      {
        path: "rdp",
        Component: RdpProductComponent
      }
    ]
  },
]);
