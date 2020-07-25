import { DashboardOutlined, UngroupOutlined } from "@ant-design/icons";

export const menuConfig: any = [
  {
    menuName: "Dashboard",
    type: "mainMenu",
    link: "/Admin/Dashboard",
    key: "Dashboard",
    icon: DashboardOutlined,
  },
  {
    menuName: "Category",
    type: "subMenu",
    key: "Category",
    icon: UngroupOutlined,
    menu: [
      {
        menuName: "Fashion",
        link: "/Admin/Category/Fashion",
        key: "Fashion",
      },
    ],
  },
];

export const breadcrumbNameMap: any = {
  "/Admin": "Home",
  "/Admin/Dashboard": "Dashboard",
  "/Admin/Category": "Category",
  "/Admin/Category/Fashion": "Fashion",
};
