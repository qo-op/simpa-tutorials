import React, { useEffect, useRef } from "react";
import { useAppSelector } from "app/hooks";

const ResultPane = () => {
  const ref = useRef(null);
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
  useEffect(() => {
    if (ref.current === null) {
      return;
    }
    const iFrame: HTMLIFrameElement = ref.current;
    if (iFrame.contentWindow === null) {
      return;
    }
    const iFrameDocument = iFrame.contentWindow.document;
    iFrameDocument.open();
    iFrameDocument.write(code);
    iFrameDocument.close();
});
  return (
    <iframe
      className="ResultPane"
      style={{ width: "100%", height: "100%", border: "none" }}
      ref={ref}
    />
  );
};

export default ResultPane;
