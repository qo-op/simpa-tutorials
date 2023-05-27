import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { setReady } from "features/ReadySlice";
import { expand } from "features/NavigationTreeSlice";
import { setDisabled as setPreviousPageButtonDisabled } from "features/PreviousPageButtonSlice";
import { setDisabled as setNextPageButtonDisabled } from "features/NextPageButtonSlice";
import tutorials from "app/tutorials";
import {
  Code,
  Tag,
  Javascript,
  InfoOutlined,
  SystemUpdateAlt,
} from "@mui/icons-material";
import CodeEditor from "components/CodeEditor";
import ResultPane from "components/ResultPane";
import "./ExamplePane.css";

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
  if (mobileView && landscapeView) {
    const iframeRef = useRef(null);
    const focusGained = (ev: React.FocusEvent) => {
      if (iframeRef.current === null) {
        return;
      }
      const iFrame: HTMLIFrameElement = iframeRef.current as HTMLIFrameElement;
      const cardComponent: HTMLElement = ev.currentTarget as HTMLElement;
      iFrame.style.display =
        cardComponent.dataset.name === "Result" ? "block" : "none";
    };
    return (
      <div
        className="ExamplePane BorderLayout"
        style={
          mobileView && !ready
            ? {
                visibility: "hidden",
              }
            : {}
        }
      >
        <div className="TabbedPane" style={{ padding: ".5em" }}>
          <div className="TabLayout">
            <button value="html" tabIndex={-1}>
              <Code style={{ color: "Red" }} />
              <span>html</span>
            </button>
            <button value="css">
              <Tag style={{ color: "Blue" }} />
              <span>css</span>
            </button>
            <button value="js">
              <Javascript style={{ color: "Yellow" }} />
              <span>js</span>
            </button>
            <button value="Result">
              <SystemUpdateAlt style={{ color: "Green" }} />
              <span>res</span>
            </button>
            <button value="Info">
              <InfoOutlined style={{ color: "Blue" }} />
              <span>inf</span>
            </button>
          </div>
          <div className="CardLayout">
            <div
              className="BorderLayout"
              data-name="html"
              onFocus={focusGained}
            >
              <CodeEditor code={htmlCode} language="html" />
            </div>
            <div
              className="BorderLayout"
              data-name="css"
              style={{ visibility: "hidden" }}
              onFocus={focusGained}
            >
              <CodeEditor code={cssCode} language="css" />
            </div>
            <div
              className="BorderLayout"
              data-name="js"
              style={{ visibility: "hidden" }}
              onFocus={focusGained}
            >
              <CodeEditor code={jsCode} language="js" />
            </div>
            <div
              className="BorderLayout"
              data-name="Result"
              style={{
                visibility: "hidden",
                paddingBlockStart: mobileView ? "40px" : "16px",
              }}
              onFocus={focusGained}
            >
              <ResultPane
                style={{ display: "none" }}
                htmlCode={htmlCode}
                cssCode={cssCode}
                jsCode={jsCode}
                iframeRef={iframeRef}
              />
            </div>
            <div
              data-name="Info"
              style={{ visibility: "hidden" }}
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
    const iframeRef = useRef(null);
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
        style={
          mobileView && !ready
            ? {
                visibility: "hidden",
              }
            : {}
        }
      >
        <div
          className="SplitPane"
          data-orientation="vertical-split"
          style={{ padding: ".5em" }}
        >
          <div className="TabbedPane" style={{ height: "50%" }}>
            <div className="TabLayout">
              <button value="html" tabIndex={-1}>
                <Code style={{ color: "Red" }} />
                <span>html</span>
              </button>
              <button value="css">
                <Tag style={{ color: "Blue" }} />
                <span>css</span>
              </button>
              <button value="js">
                <Javascript style={{ color: "Yellow" }} />
                <span>js</span>
              </button>
            </div>
            <div className="CardLayout">
              <div className="BorderLayout" data-name="html">
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
            <div className="TabLayout">
              <button value="Result" tabIndex={-1}>
                <SystemUpdateAlt style={{ color: "Green" }} />
                <span>result</span>
              </button>
              <button value="Info">
                <InfoOutlined style={{ color: "Blue" }} />
                <span>info</span>
              </button>
            </div>
            <div className="CardLayout">
              <div
                className="BorderLayout"
                data-name="Result"
                style={{
                  paddingBlockStart: mobileView ? "40px" : "16px",
                }}
                onFocus={focusGained}
              >
                <ResultPane
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
