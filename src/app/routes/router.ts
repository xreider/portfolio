import { createHashRouter } from "react-router";
import { App } from "@pages/app/App";
import { routeMap } from "./utils";
import { AeroaktProduct, DostavProduct, DviprazProduct, LandingPage, RdpDashboardProduct, RdpLandingProduct, TsdProduct, UipProduct } from "@pages";




export const router = createHashRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: LandingPage
      },
      {
        path: routeMap.aeroakt,
        Component: AeroaktProduct
      },
      {
        path: "dostav",
        Component: DostavProduct
      },
      {
        path: "dvipraz",
        Component: DviprazProduct
      },
      {
        path: "rdp-dashboard",
        Component: RdpDashboardProduct
      },
      {
        path: "rdp-landing",
        Component: RdpLandingProduct
      },
      {
        path: "tsd",
        Component: TsdProduct
      },
      {
        path: routeMap.uip,
        Component: UipProduct
      },
    ]
  },
]);


// const AeroaktProductComponent = React.lazy(async () => {
//   const module = await import('@pages/product/aeroakt/AeroaktProduct');
//   return { default: module.AeroaktProduct };
// });

// const DostavProductComponent = React.lazy(async () => {
//   const module = await import('@pages/product/dostav/DostavProduct');
//   return { default: module.DostavProduct };
// });

// const DviprazProductComponent = React.lazy(async () => {
//   const module = await import('@pages/product/dvipraz/DviprazProduct');
//   return { default: module.DviprazProduct };
// });

// const RdpDashboardProductComponent = React.lazy(async () => {
//   const module = await import('@pages/product/rdp/RdpDashboardProduct');
//   return { default: module.RdpDashboardProduct };
// });

// const RdpLandingProductComponent = React.lazy(async () => {
//   const module = await import('@pages/product/rdp/RdpLandingProduct');
//   return { default: module.RdpLandingProduct };
// });

// const TsdProductComponent = React.lazy(async () => {
//   const module = await import('@pages/product/tsd/TsdProduct');
//   return { default: module.TsdProduct };
// });

// const UipProductComponent = React.lazy(async () => {
//   const module = await import('@pages/product/uip/UipProduct');
//   return { default: module.UipProduct };
// });


// const LandingPageComponent = React.lazy(async () => {
//   const module = await import('@pages/landing/LandingPage');
//   return { default: module.LandingPage };
// });
