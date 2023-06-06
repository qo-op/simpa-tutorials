import wrapWithProvider from "./wrap-with-provider";
export const wrapRootElement = wrapWithProvider;

import React from "react";
export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <link
      key="simpa.css"
      rel="stylesheet"
      href="https://qo-op.github.io/simpa/simpa.css"
    />,
    <script
      key="simpa.js"
      src="https://qo-op.github.io/simpa/simpa.js"
    ></script>,
  ]);
}
