import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const { SubMenu } = Menu;

export default () => {
  const collapsed = useSelector(
    (state: RootState) => state.layoutReducer.collapsed
  );
  const dispatch = useDispatch();

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
      collapsedWidth="0"
      trigger={null}
      onBreakpoint={(broken) => {
        if (broken === true) dispatch({ type: "COLLAPSED", payload: true });
        else dispatch({ type: "COLLAPSED", payload: !collapsed });
      }}
    >
      <div className="ant-pro-sider-logo" id="logo">
        <a>
          <img src={require("../../static/logo/admin_logo.svg")} alt="logo" />
          <h1>Shop Admin</h1>
        </a>
      </div>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />} />
      </Menu>
    </Sider>
  );
};
