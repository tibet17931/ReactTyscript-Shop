import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { Layout, Menu, Drawer } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header } = Layout;
const { SubMenu } = Menu;

export default () => {
  const collapsed = useSelector(
    (state: RootState) => state.layoutReducer.collapsed
  );
  const broken = useSelector((state: RootState) => state.layoutReducer.broken);
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const toggle = () => {
    if (broken === false)
      dispatch({
        type: "COLLAPSED",
        payload: { collapsed: !collapsed, broken: broken },
      });
    else showDrawer();
  };

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: toggle,
      })}

      <Drawer
        placement="left"
        closable={false}
        width={200}
        onClose={onClose}
        visible={visible}
      >
        <div className="ant-pro-sider-logo" id="logo">
          <a>
            <img src={require("../../static/logo/admin_logo.svg")} alt="logo" />
            <h1>Shop Admin</h1>
          </a>
        </div>
        <Menu
          theme="dark"
          className="ant-pro-sider ant-layout-sider-children"
          defaultSelectedKeys={["1"]}
          mode="inline"
        >
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
      </Drawer>
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
