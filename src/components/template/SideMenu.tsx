import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { Layout } from "antd";
import Menu from "./Menu";
const { Sider } = Layout;

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
        if (broken === true)
          dispatch({
            type: "COLLAPSED",
            payload: { collapsed: true, broken: broken },
          });
        else
          dispatch({
            type: "COLLAPSED",
            payload: { collapsed: !collapsed, broken: broken },
          });
      }}
    >
      <div className="ant-pro-sider-logo" id="logo">
        <a>
          <img src={require("../../static/logo/admin_logo.svg")} alt="logo" />
          <h1>Shop Admin</h1>
        </a>
      </div>
      <Menu />
    </Sider>
  );
};
