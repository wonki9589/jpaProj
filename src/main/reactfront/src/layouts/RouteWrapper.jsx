import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

function RouteWrapper({
  component: Component,
  layout: Layout,
  isPrivate = false,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {

        return (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
}

export default RouteWrapper;
