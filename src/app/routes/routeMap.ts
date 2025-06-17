type RouteMap = {
  [key: string]: () => Promise<typeof import('@pages/product/rdp/RdpProduct')>;
};

// Карта маршрутов и их компонентов для префетчинга
export const routeMap: RouteMap = {
  '/rdp': () => import('@pages/product/rdp/RdpProduct'),
};
