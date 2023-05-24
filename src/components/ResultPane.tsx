import React from "react";
import { useAppSelector } from "app/hooks";
import DOMPurify from "dompurify";

const ResultPane = () => {
  let code = "";
  const htmlCode = useAppSelector((state) => state.resultPane.htmlCode);
  const cssCode = useAppSelector((state) => state.resultPane.cssCode);
  const javaScriptCode = useAppSelector(
    (state) => state.resultPane.javaScriptCode
  );
  let index = htmlCode.toLowerCase().indexOf("</head>");
  if (index === -1) {
    code =
      "<head><style>" +
      cssCode +
      "</style><script>" +
      javaScriptCode +
      "</script></head>" +
      htmlCode;
  } else {
    code =
      htmlCode.substring(0, index) +
      "<style>" +
      cssCode +
      "</style><script>" +
      javaScriptCode +
      "</script>" +
      htmlCode.substring(index);
  }
  /*
  if (process.env.NODE_ENV === "development") {
    console.log(code);
  }
  */
  return (
    <iframe
      className="ResultPane"
      srcDoc={code}
      style={{ width: "100%", height: "100%", border: "1px solid LightGray" }}
    />
  );
};

export default ResultPane;
