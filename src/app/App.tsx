import { hot } from "react-hot-loader";
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../app/pages/login/Login";
import TabsComponent from "../app/pages/tabs-component/TabsComponent";
import TableIndex from "../app/pages/tables/index";

import "./App.less";

export default hot(module)(() => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route
      // exact
      path="/tabs"
      component={TabsComponent}
    />
    <Route path="/tableList" component={TableIndex} />
  </Switch>
));
