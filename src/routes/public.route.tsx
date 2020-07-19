import React from "react";
import { Route } from "react-router-dom";

export default (route: any) => {
  console.log("public");
  console.log(route);
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};
