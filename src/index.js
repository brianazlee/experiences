import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/core";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          font-family: "Brandon Text", sans-serif;
          color: #2d333f;
        }

        button {
          font-family: "Brandon Text", sans-serif;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  rootElement
);
