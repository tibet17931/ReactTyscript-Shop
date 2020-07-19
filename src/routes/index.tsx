import Home from "../components/pages/Home";
import Layout from "../components/template/Layout";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/admin",
    component: Layout,
    routes: [
      {
        path: "/admin/home",
        component: Home,
      },
    ],
  },
];

export default routes;
