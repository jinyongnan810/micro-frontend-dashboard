import React, { lazy, Suspense, useEffect, useState } from "react";
import { createBrowserHistory } from "history";
import Progress from "./components/Progress";
import Header from "./components/Header";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});
const history = createBrowserHistory();
const App = () => {
  const [signedIn, setSignedIn] = useState(false);
  useEffect(() => {
    if (signedIn) {
      history.push("/dashboard");
    }
  }, [signedIn]);
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <div>
          <Header signedIn={signedIn} onSignOut={() => setSignedIn(false)} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy setSignedIn={setSignedIn} />
              </Route>
              <Route path="/dashboard">
                {!signedIn && <Redirect to="/" />}
                <DashboardLazy />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </StylesProvider>
  );
};

export default App;
