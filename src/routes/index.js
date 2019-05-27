import React from "react";
import { Route, Switch } from "react-router";
import Home from "../containers/Home";
import ItemDetail from "../containers/ItemDetail";

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/details/:id" component={ItemDetail} />
    </Switch>
  </div>
);

export default routes;
