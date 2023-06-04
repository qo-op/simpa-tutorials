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
import CodeEditor from "components/CodeEditor";
import ResultPane from "components/ResultPane";
import { expand } from "features/NavigationTreeSlice";
import { setDisabled as setNextPageButtonDisabled } from "features/NextPageButtonSlice";
import { setDisabled as setPreviousPageButtonDisabled } from "features/PreviousPageButtonSlice";
import { setReady } from "features/ReadySlice";
import React, { useEffect, useRef } from "react";

const ExamplePane = ({
  path,
  mobileView,
  landscapeView,
  tutorialIndex,
  htmlCode,
  cssCode,
  jsCode,
  info,
}: {
  path: string;
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
    await navigator.clipboard.writeText(code);
    (window as any).OptionPane.showMessageDialog("Code copied!");
  };
  if (mobileView && landscapeView) {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const focusGained = (ev: React.FocusEvent) => {
      if (iframeRef.current === null) {
        return;
      }
      const iFrame: HTMLIFrameElement = iframeRef.current;
      const cardComponent: HTMLElement = ev.currentTarget as HTMLElement;
      iFrame.style.display =
        cardComponent.dataset.name === "Result" ? "block" : "none";
    };
    return (
      <div
        className="ExamplePane BorderLayout"
        style={{
          visibility: mobileView && !ready ? "hidden" : "inherit",
        }}
      >
        <div className="TabbedPane" style={{ padding: ".5em" }}>
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
              onFocus={focusGained}
            >
              <CodeEditor code={htmlCode} language="html" />
            </div>
            <div
              className="BorderLayout"
              data-name="css"
              style={{ visibility: "hidden" }}
              tabIndex={-1}
              onFocus={focusGained}
            >
              <CodeEditor code={cssCode} language="css" />
            </div>
            <div
              className="BorderLayout"
              data-name="js"
              style={{ visibility: "hidden" }}
              tabIndex={-1}
              onFocus={focusGained}
            >
              <CodeEditor code={jsCode} language="js" />
            </div>
            <div
              className="BorderLayout"
              data-name="Result"
              style={{
                visibility: "inherit",
                paddingBlockStart: "10px",
              }}
              tabIndex={-1}
              onFocus={focusGained}
            >
              <ResultPane
                path={path}
                style={{ display: "block" }}
                htmlCode={htmlCode}
                cssCode={cssCode}
                jsCode={jsCode}
                iframeRef={iframeRef}
              />
            </div>
            <div
              data-name="Info"
              style={{ visibility: "hidden" }}
              tabIndex={-1}
              onFocus={focusGained}
            >
              {info.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const focusGained = (ev: React.FocusEvent) => {
      if (iframeRef.current === null) {
        return;
      }
      const iFrame: HTMLIFrameElement = iframeRef.current;
      const cardComponent: HTMLElement = ev.currentTarget as HTMLElement;
      iFrame.style.display =
        cardComponent.dataset.name === "Result" ? "block" : "none";
    };
    return (
      <div
        className="ExamplePane BorderLayout"
        style={{
          visibility: mobileView && !ready ? "hidden" : "inherit",
        }}
      >
        <div
          className="SplitPane"
          data-orientation="vertical-split"
          style={{ padding: ".5em" }}
        >
          <div className="TabbedPane" style={{ height: "50%" }}>
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
                <CodeEditor code={htmlCode} language="html" />
              </div>
              <div
                className="BorderLayout"
                data-name="css"
                style={{ visibility: "hidden" }}
              >
                <CodeEditor code={cssCode} language="css" />
              </div>
              <div
                className="BorderLayout"
                data-name="js"
                style={{ visibility: "hidden" }}
              >
                <CodeEditor code={jsCode} language="js" />
              </div>
            </div>
          </div>
          <div>
            <div className="SplitPaneDivider" />
          </div>
          <div
            className="TabbedPane"
            data-tab-placement="page-end"
            style={{ height: "50%" }}
          >
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
                onFocus={focusGained}
              >
                <ResultPane
                  path={path}
                  style={{ display: "block" }}
                  htmlCode={htmlCode}
                  cssCode={cssCode}
                  jsCode={jsCode}
                  iframeRef={iframeRef}
                />
              </div>
              <div
                data-name="Info"
                style={{ visibility: "hidden" }}
                tabIndex={-1}
                onFocus={focusGained}
              >
                {info.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ExamplePane;
