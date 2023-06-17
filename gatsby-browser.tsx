import wrapWithProvider from "./wrap-with-provider";
export const wrapRootElement = wrapWithProvider;

/*
import React from "react";
export const onInitialClientRender = () => {
  const link = document.createElement("link");
  link.href = "https://qo-op.github.io/simpa/simpa.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
  const script = document.createElement("script");
  script.src = "https://qo-op.github.io/simpa/simpa.js";
  document.head.appendChild(script);
};
*/
