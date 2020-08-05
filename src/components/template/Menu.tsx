import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { menuConfig } from "../../config/menu.config";
import { Link, useLocation, useHistory } from "react-router-dom";


const { SubMenu } = Menu;

export default (props?: any) => {
  const history = useHistory();
  let location = useLocation();
  let [keyDefault, setKeyDefault] = useState('Dashboard')
  // let [keyOpen, setKeyOpen] = useState('')
  useEffect(() => {
    let stateOne = menuConfig.find((ele: any) => {
      if (ele.link === location.pathname) {
        return true
      } else if (ele.type === 'subMenu') {
        let obj = ele.menu.find((subele: any) => subele.link === location.pathname)
        return obj
      }
    })

    if (stateOne && stateOne.type === 'subMenu') {
      let objKey = stateOne.menu.find((ele: any) => ele.link === location.pathname)
      if (objKey) {
        setKeyDefault(objKey.key)
      }
    } else if (stateOne && stateOne.type === 'mainMenu') {
      setKeyDefault(stateOne.key)
    }
  }, [])

  let changeMenuKey = ({ key, keyPath }: { key: any, keyPath: any }) => {
    // console.log(location.pathname)
    // history.push(location.pathname)
    setKeyDefault(key)
  }

  return (
    <Menu
      theme="dark"
      className={props.nameClass}
      defaultSelectedKeys={[menuConfig[0].key]}
      selectedKeys={[keyDefault]}
      mode="inline"
      onClick={changeMenuKey}
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
