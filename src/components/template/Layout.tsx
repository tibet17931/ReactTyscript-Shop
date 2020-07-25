import React from "react";
import { Layout, Breadcrumb } from "antd";
import Header from "./Header";
import SideMenu from "./SideMenu";
import Footer from "./Footer";
import { Switch, useLocation, Link } from "react-router-dom";
import PrivateRouter from "../../routes/private.route";
import { breadcrumbNameMap } from "../../config/menu.config";

const { Content } = Layout;

export default ({ routes }: { routes: any }) => {
  const location: any = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i: any) => i);
  const extraBreadcrumbItems = pathSnippets.map((_: any, index: any) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}> {breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [].concat(extraBreadcrumbItems);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideMenu />
      <Layout className="site-layout">
        <Header />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {breadcrumbItems}
          </Breadcrumb>
          <Switch>
            {routes.map((route: any, i: any) => (
              <PrivateRouter key={i} {...route} />
            ))}
          </Switch>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};
