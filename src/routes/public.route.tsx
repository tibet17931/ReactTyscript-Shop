import React from "react";
import { Route, Redirect } from "react-router-dom";

export default (route: any) => {
  let isAuthenticated = localStorage.getItem("token");

  return !isAuthenticated ? (
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
          pathname: "/Admin",
        }}
      />
    );
};
