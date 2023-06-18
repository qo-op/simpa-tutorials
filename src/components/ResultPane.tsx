import { useAppDispatch, useAppSelector } from "app/hooks";
import { setIframeReady } from "features/ResultPaneSlice";
import React, { useEffect, useRef } from "react";

const ResultPane = ({
  path,
  hostname,
  style,
  htmlCode,
  cssCode,
  jsCode,
  iframeRef,
}: {
  path: string;
  hostname: string;
  style?: React.CSSProperties;
  htmlCode: string;
  cssCode: string;
  jsCode: string;
  iframeRef: React.RefObject<HTMLIFrameElement>;
}) => {
  const nextPath = useAppSelector((state) => state.nextPath.value);
  let iframeReady = useAppSelector((state) => state.resultPane.iframeReady);
  iframeReady = iframeReady || path === nextPath;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (iframeReady) {
      dispatch(setIframeReady(true));
    }
  });
  let code = "";
  let resultPaneHtmlCode =
    useAppSelector((state) => state.resultPane.htmlCode) || htmlCode;
  const resultPaneCssCode =
    useAppSelector((state) => state.resultPane.cssCode) || cssCode;
  const resultPaneJavaScriptCode =
    useAppSelector((state) => state.resultPane.javaScriptCode) || jsCode;
  resultPaneHtmlCode = resultPaneHtmlCode.replace(
    /[^\n]*<link rel="stylesheet"\s*href="\.\/[A-Za-z]+\.css">[^\n]*\r?\n/,
    ""
  );
  resultPaneHtmlCode = resultPaneHtmlCode.replace(
    /[^\n]*<script src="\.\/[A-Za-z]+\.js">\s*<\/script>[^\n]*\r?\n/,
    ""
  );
  let index = resultPaneHtmlCode.toLowerCase().indexOf("</head>");
  if (index === -1) {
    code =
      "<head>\n" +
      "  <style>\n" +
      resultPaneCssCode.trim() +
      "\n" +
      "  </style>\n" +
      "  <script>\n" +
      resultPaneJavaScriptCode.trim() +
      "\n" +
      "  </script>\n" +
      "</head>\n" +
      resultPaneHtmlCode;
  } else {
    code =
      resultPaneHtmlCode.substring(0, index) +
      "  <style>\n" +
      resultPaneCssCode.trim() +
      "\n" +
      "  </style>\n" +
      "  <script>\n" +
      resultPaneJavaScriptCode.trim() +
      "\n" +
      "  </script>\n" +
      resultPaneHtmlCode.substring(index);
  }
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
        visibility: !iframeReady ? "hidden" : "inherit",
      }}
      ref={iframeRef}
    />
  );
};

export default ResultPane;
