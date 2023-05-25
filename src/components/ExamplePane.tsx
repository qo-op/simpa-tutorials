import React, { useEffect } from "react";
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
  tutorialIndex,
  htmlCode,
  cssCode,
  jsCode,
  info,
}: {
  path: string;
  mobileView: boolean;
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
        style={{
          padding: ".5em",
        }}
      >
        <div className="TabbedPane" style={{ height: "50%" }}>
          <div className="TabLayout">
            <button value="html" tabIndex={-1}>
              <Code style={{ color: "Red" }} />
              <span>ex.html</span>
            </button>
            <button value="css">
              <Tag style={{ color: "Blue" }} />
              <span>ex.css</span>
            </button>
            <button value="js">
              <Javascript style={{ color: "Yellow" }} />
              <span>ex.js</span>
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
          <div className="TabLayout">
            <button value="Result" tabIndex={-1}>
              <SystemUpdateAlt style={{ color: "Green" }} />
              <span>Result</span>
            </button>
            <button value="Info">
              <InfoOutlined style={{ color: "Blue" }} />
              <span>Info</span>
            </button>
          </div>
          <div className="CardLayout">
            <div
              className="BorderLayout"
              data-name="Result"
              style={{ visibility: "inherit", paddingBlock: "40px" }}
            >
              <ResultPane
                mobileView={mobileView}
                htmlCode={htmlCode}
                cssCode={cssCode}
                jsCode={jsCode}
              />
            </div>
            <div data-name="Info" style={{ visibility: "hidden" }}>
              {info.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplePane;
