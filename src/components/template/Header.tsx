import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { Layout, Menu, Drawer, Dropdown, Avatar, Badge } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import MenuMain from "./Menu";

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

  let head_menu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

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
        <MenuMain nameClass="ant-pro-sider ant-layout-sider-children" />
      </Drawer>
      <div className="right___2CMz5">
        {/* <Dropdown overlay={head_menu} placement="bottomLeft">
          <span className="action___3ut1O account___1r_Ku ant-dropdown-trigger">
            <span className="avatar___1Rx79 ant-avatar-sm ant-avatar-circle ant-avatar-image">
              <Badge count={1}>
                <Avatar size={22} shape="circle" icon={<BellOutlined />} />
              </Badge>
            </span>
          </span>
        </Dropdown> */}
        <Dropdown overlay={head_menu} placement="bottomLeft">
          <span className="action___3ut1O account___1r_Ku ant-dropdown-trigger">
            <span className="ant-avatar avatar___1Rx79 ant-avatar-sm ant-avatar-circle ant-avatar-image">
              <img
                src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                alt="avatar"
              />
            </span>
            <span className="name___2eduw anticon">Tibet Pedrod</span>
          </span>
        </Dropdown>
        <Dropdown overlay={head_menu} placement="bottomLeft">
          <span className="action___3ut1O account___1r_Ku ant-dropdown-trigger">
            <SettingOutlined
              className="trigger"
              style={{ paddingLeft: 12, paddingRight: 12 }}
            />
          </span>
        </Dropdown>
      </div>
    </Header>
  );
};
