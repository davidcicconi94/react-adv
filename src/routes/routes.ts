import { lazy } from "react";

interface RoutesProps {
  path: string;
  to: string;
  Component: React.LazyExoticComponent<React.FC<{}>> | React.FC;
  name: string;
}

const Lazy1 = lazy(
  () => import(/* webpackChunkName: "Lazy1" */ "../01-lazyload/pages/LazyPage1")
);
const Lazy2 = lazy(
  () => import(/* webpackChunkName: "Lazy2" */ "../01-lazyload/pages/LazyPage2")
);
const Lazy3 = lazy(
  () => import(/* webpackChunkName: "Lazy3" */ "../01-lazyload/pages/LazyPage3")
);

export const routes: RoutesProps[] = [
  {
    path: "/lazy1",
    to: "lazy1",
    Component: Lazy1,
    name: "Lazy 1",
  },
  {
    path: "/lazy2",
    to: "lazy2",
    Component: Lazy2,
    name: "Lazy 2",
  },
  {
    path: "/lazy3",
    to: "lazy3",
    Component: Lazy3,
    name: "Lazy 3",
  },
];
