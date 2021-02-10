import React from "react";
import ReactDOM from "react-dom";
const mount = (el) => {
  ReactDOM.render(<h1>Markerting Page</h1>, el);
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("_dev-marketing-root");
  if (el) {
    mount(el);
  }
}
export { mount };
