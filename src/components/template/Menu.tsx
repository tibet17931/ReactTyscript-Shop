import React from "react";
import { Menu } from "antd";
import { menuConfig } from "../../config/menu.config";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

export default (props?: any) => {
  return (
    <Menu
      theme="dark"
      className={props.nameClass}
      defaultSelectedKeys={[menuConfig[0].key]}
      mode="inline"
    >
      {menuConfig.map((item: any) =>
        item.type === "mainMenu" ? (
          <Menu.Item key={item.key} icon={<item.icon />}>
            <Link to={item.link}>{item.menuName}</Link>
          </Menu.Item>
        ) : (
          <SubMenu key={item.key} icon={<item.icon />} title={item.menuName}>
            {item.menu.map((sub: any) => (
              <Menu.Item key={sub.key}>
                <Link to={sub.link}> {sub.menuName}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        )
      )}
    </Menu>
  );
};
