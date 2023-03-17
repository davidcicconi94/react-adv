import { lazy } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

interface RoutesProps {
  path: string;
  to: string;
  Component: React.LazyExoticComponent<React.FC<{}>> | React.FC;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: RoutesProps[] = [
  {
    path: "/lazyload/*", // Principio para hacer las rutas anidadas
    to: "lazyload",
    Component: LazyLayout,
    name: "Dashboard",
  },
  {
    path: "/no-lazy",
    to: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
