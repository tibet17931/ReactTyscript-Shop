import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { Layout, Menu, Drawer, Dropdown, Avatar, Badge } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
  LogoutOutlined,
  UserOutlined
} from "@ant-design/icons";

import MenuMain from "./Menu";
import { Switch, useHistory } from "react-router-dom";

const { Header } = Layout;
const { SubMenu } = Menu;

export default () => {
  const history = useHistory();

  let profile: any = localStorage.getItem('profile')
  profile = JSON.parse(profile)
  // console.log(profile)
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
  let logout = ({ item, key, keyPath, domEvent }: { item: any, key: string | Number, keyPath: any, domEvent: any }) => {
    console.log(key)

    switch (key) {
      case 'Logout':
        localStorage.removeItem('token')
        history.push('/Login')
        break;
      case 'Profile':
        // code block
        break;
      case 'Setting':
        // code block
        break;
    }
  }

  let head_menu = (
    <Menu onClick={logout}>
      <Menu.Item key="Profile"><UserOutlined />Profile</Menu.Item>
      <Menu.Item key="Setting"><SettingOutlined /> Setting</Menu.Item>
      <Menu.Item key="Logout"> <LogoutOutlined />Logout</Menu.Item>
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
                src={profile.avatar}
                alt="avatar"
              />
            </span>
            <span className="name___2eduw anticon">{profile.fullname}</span>
          </span>
        </Dropdown>
        {/* <Dropdown overlay={head_menu} placement="bottomLeft">
          <span className="action___3ut1O account___1r_Ku ant-dropdown-trigger">
            <SettingOutlined
              className="trigger"
              style={{ paddingLeft: 12, paddingRight: 12 }}
            />
          </span>
        </Dropdown> */}
      </div>
    </Header>
  );
};
