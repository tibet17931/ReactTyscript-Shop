import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

export default () => {
  const collapsed = useSelector(
    (state: RootState) => state.layoutReducer.collapsed
  );
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch({ type: "COLLAPSED", payload: !collapsed });
  };

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: toggle,
      })}
      <Menu
        className="antd-pro-components-global-header-index-right"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
};
