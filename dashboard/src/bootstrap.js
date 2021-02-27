import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";
const mount = (el) => {
  const App = createApp(Dashboard);
  App.mount(el);
};
// render
if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("_dev-dashboard-root");
  if (el) {
    mount(el);
  }
}
export { mount };
