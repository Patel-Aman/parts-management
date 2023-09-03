import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));
const Profile = lazy(() => import("../pages/Profile"));
const Parts = lazy(() => import("../pages/Parts"));
const Models = lazy(() => import("../pages/Models"));
const Requests = lazy(() => import("../pages/Requests"));
const ServiceCenter = lazy(() => import("../pages/ServiceCenter"));

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
    {
        path: "/dashboard", // the url
        component: Dashboard, // view rendered
    },
    {
        path: "/profile",
        component: Profile,
    },
    {
        path: "/parts",
        component: Parts,
    },
    {
        path: "/requests",
        component: Requests,
    },
    {
        path: "/models",
        component: Models,
    },
    {
        path: "/service",
        component: ServiceCenter,
    },
    {
        path: "/404",
        component: Page404,
    },
    {
        path: "/blank",
        component: Blank,
    },
];

export default routes;
