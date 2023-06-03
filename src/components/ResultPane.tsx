import { useAppSelector } from "app/hooks";
import React, { useEffect } from "react";

const ResultPane = ({
  style,
  htmlCode,
  cssCode,
  jsCode,
  iframeRef,
}: {
  style?: React.CSSProperties;
  htmlCode: string;
  cssCode: string;
  jsCode: string;
  iframeRef: React.RefObject<HTMLIFrameElement>;
}) => {
  let resultPaneHtmlCode =
    useAppSelector((state) => state.resultPane.htmlCode) || htmlCode;
  const resultPaneCssCode =
    useAppSelector((state) => state.resultPane.cssCode) || cssCode;
  const resultPaneJavaScriptCode =
    useAppSelector((state) => state.resultPane.javaScriptCode) || jsCode;
  let code = "";
  resultPaneHtmlCode = resultPaneHtmlCode.replace(
    /<link rel="stylesheet"\s*href="\.\/[A-Za-z]+\.css">/,
    ""
  );
  resultPaneHtmlCode = resultPaneHtmlCode.replace(
    /<script src="\.\/[A-Za-z]+\.js">\s*<\/script>/,
    ""
  );
  let index = resultPaneHtmlCode.toLowerCase().indexOf("</head>");
  if (index === -1) {
    code =
      "<head><style>" +
      resultPaneCssCode +
      "</style><script>" +
      resultPaneJavaScriptCode +
      "</script></head>" +
      resultPaneHtmlCode;
  } else {
    code =
      resultPaneHtmlCode.substring(0, index) +
      "<style>" +
      resultPaneCssCode +
      "</style><script>" +
      resultPaneJavaScriptCode +
      "</script>" +
      resultPaneHtmlCode.substring(index);
  }
  /*
  if (process.env.NODE_ENV === "development") {
    console.log(code);
  }
  */
  useEffect(() => {
    if (iframeRef.current === null) {
      return;
    }
    const iFrame: HTMLIFrameElement = iframeRef.current as HTMLIFrameElement;
    if (iFrame.contentDocument === null) {
      return;
    }
    const iFrameDocument = iFrame.contentDocument;
    iFrameDocument.open();
    iFrameDocument.write(code);
    iFrameDocument.close();
  });
  return (
    <iframe
      id="iframe"
      className="ResultPane"
      style={{
        ...style,
        width: "100%",
        height: "100%",
        border: "none",
      }}
      ref={iframeRef}
    />
  );
};

export default ResultPane;
