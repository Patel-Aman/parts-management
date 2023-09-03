/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
    {
        path: "/app/dashboard", // the url
        icon: "HomeIcon", // the component being exported from icons/index.js
        name: "Dashboard", // name that appear in Sidebar
    },
    {
        path: "/app/parts",
        icon: "ToolsIcon",
        name: "Parts",
    },
    {
        path: "/app/models",
        icon: "ProductIcon",
        name: "Models",
    },
    {
        path: "/app/requests",
        icon: "RequestIcon",
        name: "Requests",
    },
    {
        path: "/app/service",
        icon: "ServiceCenterIcon",
        name: "Service Center",
    },
];

export default routes;
