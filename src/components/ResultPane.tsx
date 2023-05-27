import React, { useEffect, useRef } from "react";
import { useAppSelector } from "app/hooks";

const ResultPane = ({
  mobileView,
  htmlCode,
  cssCode,
  jsCode,
}: {
  mobileView: boolean;
  htmlCode: string;
  cssCode: string;
  jsCode: string;
}) => {
  const ref = useRef(null);
  let resultPaneHtmlCode =
    useAppSelector((state) => state.resultPane.htmlCode) || htmlCode;
  const resultPaneCssCode =
    useAppSelector((state) => state.resultPane.cssCode) || cssCode;
  const resultPaneJavaScriptCode =
    useAppSelector((state) => state.resultPane.javaScriptCode) || jsCode;
  let code = "";
  resultPaneHtmlCode = resultPaneHtmlCode.replace(
    /<link rel="stylesheet"\s*href="\.\/example\.css">/,
    ""
  );
  resultPaneHtmlCode = resultPaneHtmlCode.replace(
    /<script src="\.\/example\.js">\s*<\/script>/,
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
    if (ref.current === null) {
      return;
    }
    const iFrame: HTMLIFrameElement = ref.current;
    if (iFrame.contentDocument === null) {
      return;
    }
    const iFrameDocument = iFrame.contentDocument;
    iFrameDocument.open();
    iFrameDocument.write(code);
    iFrameDocument.close();
  });
  let visible = false;
  const loading = useAppSelector((state) => state.loading.value);
  const dividerLocation = useAppSelector(
    (state) => state.contentSplitPane.dividerLocation
  );
  if (loading) {
    visible = true;
  } else if (mobileView) {
    if (dividerLocation === -1) {
      visible = true;
    }
  } else {
    visible = true;
  }
  return (
    <iframe
      className="ResultPane"
      style={{
        width: "100%",
        height: "100%",
        border: "none",
        display: visible ? "block" : "none",
      }}
      ref={ref}
    />
  );
};

export default ResultPane;
