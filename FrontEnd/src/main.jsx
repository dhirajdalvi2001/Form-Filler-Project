import { StrictMode } from "react";
import reactDom from "react-dom";
import App from "./components/App/App";

reactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
