import "./ExampleLayout.css";

import { useAppDispatch, useAppSelector } from "app/hooks";
import { tutorialIndexes } from "app/tutorials";
import ExampleContentSplitPane from "components/ExampleContentSplitPane";
import ExamplePane from "components/ExamplePane";
import NavigationTree from "components/NavigationTree";
import ToolBar from "components/ToolBar";
import { setLoading } from "features/LoadingSlice";
import { setNextPath } from "features/NextPathSlice";
import React from "react";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const ExampleLayout = ({
  path,
  hostname,
  htmlCode,
  cssCode,
  jsCode,
  info,
}: {
  path: string;
  hostname: string;
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
  const mobileView = !useMediaQuery({
    minWidth: 767,
    minHeight: 480,
  });
  const landscapeView = useMediaQuery({ orientation: "landscape" });
  const tutorialIndex = tutorialIndexes[path];
  return (
    <div
      className="Frame"
      style={{ visibility: loading ? "hidden" : "inherit" }}
    >
      <div className="PageStart">
        <ToolBar mobileView={mobileView} tutorialIndex={tutorialIndex} />
      </div>
      <ExampleContentSplitPane mobileView={mobileView}>
        <NavigationTree mobileView={mobileView} tutorialIndex={tutorialIndex} />
        <ExamplePane
          path={path}
          hostname={hostname}
          mobileView={mobileView}
          landscapeView={landscapeView}
          tutorialIndex={tutorialIndex}
          htmlCode={htmlCode}
          cssCode={cssCode}
          jsCode={jsCode}
          info={info}
        />
      </ExampleContentSplitPane>
    </div>
  );
};

export default ExampleLayout;
