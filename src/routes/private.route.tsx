import React from "react";
import { Route, Redirect } from "react-router-dom";

export default (route: any) => {
  console.log("private");
  console.log(route);
  let token = localStorage.getItem("token");
  return token ? (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  ) : (
    <Redirect
      to={{
        pathname: "/home",
      }}
    />
  );
};
