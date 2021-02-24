import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";
const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate: (location) => {
      if (history.location.pathname !== location.pathname)
        history.push(location.pathname);
    },
  };
};
// render
if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("_dev-marketing-root");
  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}
export { mount };
