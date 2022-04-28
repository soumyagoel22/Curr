import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Avatar from "@material-ui/core/Avatar";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
