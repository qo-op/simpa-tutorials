import React from "react";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { setLoading } from "features/LoadingSlice";
import { setNextPath } from "features/NextPathSlice";
import { tutorialIndexes } from "app/tutorials";
import ExampleContentSplitPane from "components/ExampleContentSplitPane";
import ModalLayer from "components/ModalLayer";
import NavigationTree from "components/NavigationTree";
import ToolBar from "components/ToolBar";
import ExamplePane from "components/ExamplePane";
import "./simpa.css";
import "./ExampleLayout.css";

const ExampleLayout = ({
  path,
  htmlCode,
  cssCode,
  jsCode,
  info,
}: {
  path: string;
  htmlCode: string;
  cssCode: string;
  jsCode: string;
  info: string;
}) => {
  const loading = useAppSelector((state) => state.loading.value);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(false));
  });
  useEffect(() => {
    dispatch(setNextPath(path));
  });
  const browserView = useMediaQuery({ query: "(min-width: 480px)" });
  const mobileView = !browserView;
  const tutorialIndex = tutorialIndexes[path];
  return (
    <>
      <div
        className="ExampleLayout LayeredPane"
        style={{ visibility: loading ? "hidden" : "inherit" }}
      >
        <div className="LayoutContentPane BorderLayout">
          <div className="PageStart">
            <ToolBar mobileView={mobileView} tutorialIndex={tutorialIndex} />
          </div>
          <ExampleContentSplitPane mobileView={mobileView}>
            <NavigationTree
              mobileView={mobileView}
              tutorialIndex={tutorialIndex}
            />
            <ExamplePane
              path={path}
              mobileView={mobileView}
              tutorialIndex={tutorialIndex}
              htmlCode={htmlCode}
              cssCode={cssCode}
              jsCode={jsCode}
              info={info}
            />
          </ExampleContentSplitPane>
        </div>
        <ModalLayer />
      </div>
    </>
  );
};

export default ExampleLayout;
