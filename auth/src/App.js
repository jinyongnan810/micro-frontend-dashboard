import React from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});
export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/auth/signup" component={SignUp} />
            <Route exact path="/auth/signin" component={SignIn} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
