import React from "react";
import { Layout, Breadcrumb } from "antd";
import Header from "./Header";
import SideMenu from "./SideMenu";
import Footer from "./Footer";
import { Switch } from "react-router-dom";
import PrivateRouter from "../../routes/private.route";

const { Content } = Layout;

export default ({ routes }: { routes: any }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideMenu />
      <Layout className="site-layout">
        <Header />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
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
