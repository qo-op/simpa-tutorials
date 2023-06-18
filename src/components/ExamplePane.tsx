import "./ExamplePane.css";

import {
  Code,
  ContentPaste,
  InfoOutlined,
  Javascript,
  SystemUpdateAlt,
  Tag,
} from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import tutorials from "app/tutorials";
import CodeViewer from "components/CodeViewer";
import ResultPane from "components/ResultPane";
import { expand } from "features/NavigationTreeSlice";
import { setDisabled as setNextPageButtonDisabled } from "features/NextPageButtonSlice";
import { setDisabled as setPreviousPageButtonDisabled } from "features/PreviousPageButtonSlice";
import { setReady } from "features/ReadySlice";
import React, { useEffect, useRef } from "react";

const ExamplePane = ({
  path,
  hostname,
  mobileView,
  landscapeView,
  tutorialIndex,
  htmlCode,
  cssCode,
  jsCode,
  info,
}: {
  path: string;
  hostname: string;
  mobileView: boolean;
  landscapeView: boolean;
  tutorialIndex: number;
  htmlCode: string;
  cssCode: string;
  jsCode: string;
  info: string;
}) => {
  const nextPath = useAppSelector((state) => state.nextPath.value);
  let ready = useAppSelector((state) => state.ready.value);
  ready = ready || path === nextPath;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (ready) {
      dispatch(setReady(true));
      dispatch(setPreviousPageButtonDisabled(tutorialIndex === 0));
      dispatch(
        setNextPageButtonDisabled(tutorialIndex === tutorials.length - 1)
      );
      if (path === nextPath) {
        dispatch(expand(tutorials[tutorialIndex].folder));
      }
    }
  });
  let resultPaneHtmlCode =
    useAppSelector((state) => state.resultPane.htmlCode) || htmlCode;
  const resultPaneCssCode =
    useAppSelector((state) => state.resultPane.cssCode) || cssCode;
  const resultPaneJavaScriptCode =
    useAppSelector((state) => state.resultPane.javaScriptCode) || jsCode;
  const copyCode = async (ev: React.MouseEvent) => {
    let code = "";
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
    await navigator.clipboard.writeText(code);
    (window as any).OptionPane.showMessageDialog("Code copied!");
  };
  const iframeRef1 = useRef<HTMLIFrameElement>(null);
  const handleFocus1 = (ev: React.FocusEvent) => {
    if (iframeRef1.current === null) {
      return;
    }
    const iFrame: HTMLIFrameElement = iframeRef1.current;
    const cardComponent: HTMLElement = ev.currentTarget as HTMLElement;
    iFrame.style.display =
      cardComponent.dataset.name === "Result" ? "block" : "none";
  };
  const iframeRef2 = useRef<HTMLIFrameElement>(null);
  const handleFocus2 = (ev: React.FocusEvent) => {
    if (iframeRef2.current === null) {
      return;
    }
    const iFrame: HTMLIFrameElement = iframeRef2.current;
    const cardComponent: HTMLElement = ev.currentTarget as HTMLElement;
    iFrame.style.display =
      cardComponent.dataset.name === "Result" ? "block" : "none";
  };
  return (
    <div className="SplitPane">
      <div
        className="ExamplePane BorderLayout"
        style={{
          width: mobileView && landscapeView ? "100%" : "0%",
          visibility: mobileView && !ready ? "hidden" : "inherit",
        }}
      >
        <div
          className="SplitPane"
          data-orientation="vertical-split"
          style={{ padding: ".5em" }}
        >
          <div
            className="TabbedPane"
            style={{ height: "100%" }}
            id="top-container"
          >
            <div>
              <button
                style={{
                  float: "right",
                  marginBlockStart: ".1em",
                  backgroundColor: "inherit",
                }}
                onClick={copyCode}
              >
                <span>
                  <ContentPaste style={{ color: "White" }} />
                </span>
              </button>
              <button value="html">
                <span>
                  <Code style={{ color: "Red" }} />
                  <span>html</span>
                </span>
              </button>
              <button value="css">
                <span>
                  <Tag style={{ color: "Blue" }} />
                  <span>css</span>
                </span>
              </button>
              <button value="js">
                <span>
                  <Javascript style={{ color: "Yellow" }} />
                  <span>js</span>
                </span>
              </button>
              <button value="Result" tabIndex={-1}>
                <span>
                  <SystemUpdateAlt style={{ color: "Green" }} />
                  <span>result</span>
                </span>
              </button>
              <button value="Info">
                <span>
                  <InfoOutlined style={{ color: "Blue" }} />
                  <span>info</span>
                </span>
              </button>
            </div>
            <div className="CardLayout">
              <div
                className="BorderLayout"
                data-name="html"
                style={{ visibility: "hidden" }}
                tabIndex={-1}
                onFocus={handleFocus1}
              >
                <CodeViewer
                  hostname={hostname}
                  code={htmlCode}
                  language="html"
                />
              </div>
              <div
                className="BorderLayout"
                data-name="css"
                style={{ visibility: "hidden" }}
                tabIndex={-1}
                onFocus={handleFocus1}
              >
                <CodeViewer hostname={hostname} code={cssCode} language="css" />
              </div>
              <div
                className="BorderLayout"
                data-name="js"
                style={{ visibility: "hidden" }}
                tabIndex={-1}
                onFocus={handleFocus1}
              >
                <CodeViewer hostname={hostname} code={jsCode} language="js" />
              </div>
              <div
                className="BorderLayout"
                data-name="Result"
                style={{ visibility: "inherit" }}
                tabIndex={-1}
                onFocus={handleFocus1}
              >
                <ResultPane
                  path={path}
                  hostname={hostname}
                  htmlCode={htmlCode}
                  cssCode={cssCode}
                  jsCode={jsCode}
                  iframeRef={iframeRef1}
                />
              </div>
              <div
                data-name="Info"
                style={{ textAlign: "justify", visibility: "hidden" }}
                tabIndex={-1}
                onFocus={handleFocus1}
              >
                {info.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </div>
          <div style={{ height: "0" }} id="divider"></div>
          <div
            className="TabbedPane"
            style={{ height: "0" }}
            id="bottom-container"
          >
            <div></div>
            <div className="CardLayout"></div>
          </div>
        </div>
      </div>
      <div></div>
      <div
        className="ExamplePane BorderLayout"
        style={{
          width: mobileView && landscapeView ? "0%" : "100%",
          visibility: mobileView && !ready ? "hidden" : "inherit",
        }}
      >
        <div
          className="SplitPane"
          data-orientation="vertical-split"
          style={{ padding: ".5em" }}
        >
          <div className="TabbedPane" id="top-container">
            <div>
              <button
                style={{
                  float: "right",
                  marginBlockStart: ".1em",
                  backgroundColor: "inherit",
                }}
                onClick={copyCode}
              >
                <span>
                  <ContentPaste style={{ color: "White" }} />
                </span>
              </button>
              <button value="html" tabIndex={-1}>
                <span>
                  <Code style={{ color: "Red" }} />
                  <span>html</span>
                </span>
              </button>
              <button value="css">
                <span>
                  <Tag style={{ color: "Blue" }} />
                  <span>css</span>
                </span>
              </button>
              <button value="js">
                <span>
                  <Javascript style={{ color: "Yellow" }} />
                  <span>js</span>
                </span>
              </button>
            </div>
            <div className="CardLayout">
              <div
                className="BorderLayout"
                data-name="html"
                style={{ visibility: "inherit" }}
              >
                <CodeViewer
                  hostname={hostname}
                  code={htmlCode}
                  language="html"
                />
              </div>
              <div
                className="BorderLayout"
                data-name="css"
                style={{ visibility: "hidden" }}
              >
                <CodeViewer hostname={hostname} code={cssCode} language="css" />
              </div>
              <div
                className="BorderLayout"
                data-name="js"
                style={{ visibility: "hidden" }}
              >
                <CodeViewer hostname={hostname} code={jsCode} language="js" />
              </div>
            </div>
          </div>
          <div id="divider"></div>
          <div className="TabbedPane" id="bottom-container">
            <div>
              <button value="Result" tabIndex={-1}>
                <span>
                  <SystemUpdateAlt style={{ color: "Green" }} />
                  <span>result</span>
                </span>
              </button>
              <button value="Info">
                <span>
                  <InfoOutlined style={{ color: "Blue" }} />
                  <span>info</span>
                </span>
              </button>
            </div>
            <div className="CardLayout">
              <div
                className="BorderLayout"
                data-name="Result"
                style={{ visibility: "inherit" }}
                tabIndex={-1}
                onFocus={handleFocus2}
              >
                <ResultPane
                  path={path}
                  hostname={hostname}
                  htmlCode={htmlCode}
                  cssCode={cssCode}
                  jsCode={jsCode}
                  iframeRef={iframeRef2}
                />
              </div>
              <div
                data-name="Info"
                style={{ textAlign: "justify", visibility: "hidden" }}
                tabIndex={-1}
                onFocus={handleFocus2}
              >
                {info.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplePane;
