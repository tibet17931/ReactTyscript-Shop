import Home from "../components/pages/Home";
import Test from "../components/pages/Test";
import Fashion from "../components/pages/category/Fashion";
import Layout from "../components/template/Layout";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/Admin",
    component: Layout,
    routes: [
      {
        path: "/Admin/Dashboard",
        component: Home,
      },
      {
        path: "/Admin/Category/Fashion",
        component: Fashion,
      },
    ],
  },
];

export default routes;
