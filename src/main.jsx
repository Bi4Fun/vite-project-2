import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./strore/strore.js";
import "./index.css";

console.log(store.getState());
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
