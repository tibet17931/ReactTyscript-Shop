import Home from "../components/pages/Home";
import Login from "../components/pages/auth/Login";
import Layout from "../components/template/Layout";
import Regis from "../components/pages/auth/regis";
import { register } from "../serviceWorker";

const routes = [
	{
		path: "/home",
		component: Home,
	},
	{
		path: "/login",
		component: Login,
	},
	{
		path: "/register",
		component: Regis,
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
