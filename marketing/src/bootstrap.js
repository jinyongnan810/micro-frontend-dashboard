import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";
import App from "./App";
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);
};
// render
if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("_dev-marketing-root");
  if (el) {
    mount(el, {});
  }
}
export { mount };
