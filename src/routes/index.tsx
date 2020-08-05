import Home from "../components/pages/Home";
import Test from "../components/pages/Test";
import Fashion from "../components/pages/category/Fashion";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/Register/Register";
import Page404 from "../components/template/Page404"
import Layout from "../components/template/Layout";

const routes = [
  {
    path: "/",
    component: Login,
    exact: true,
  },
  {
    path: "/Login",
    component: Login,
    exact: true,
  }, {
    path: "/Register",
    component: Register,
    exact: true
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
  {
    path: "*",
    component: Page404,
  }
];

export default routes;
