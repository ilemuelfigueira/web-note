import ReactDOM from "react-dom/client";
import App from "./App";
import { Fragment } from "react";

import "@assets/styles/main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Fragment>
    <App />
  </Fragment>
);
