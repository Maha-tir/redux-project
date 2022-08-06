import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { authRoutes, userRoutes } from "./routes/allRoutes";

import Auth from "./layout/Auth";
import Home from "./layout/Home";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    exact
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props}></Component>
      </Layout>
    )}
  ></Route>
);

function App() {
  return (
    <Router>
      <Switch>
        {authRoutes.map((route, index) => (
          <AppRoute
            path={route.path}
            component={route.component}
            layout={Auth}
            key={index}
          />
        ))}
        {userRoutes.map((route, index) => (
          <AppRoute
            path={route.path}
            component={route.component}
            layout={Home}
            key={index}
          />
        ))}
        <Redirect strict from="/" to="/auth/login" />
      </Switch>
    </Router>
  );
}

export default App;
