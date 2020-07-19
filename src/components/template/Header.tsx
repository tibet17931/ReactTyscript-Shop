import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { Layout } from "antd";
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
    </Header>
  );
};
