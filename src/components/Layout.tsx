import "./Layout.css";

import { useAppDispatch, useAppSelector } from "app/hooks";
import { tutorialIndexes } from "app/tutorials";
import ContentSplitPane from "components/ContentSplitPane";
import ToolBar from "components/ToolBar";
import TutorialPane from "components/TutorialPane";
import { setLoading } from "features/LoadingSlice";
import { setNextPath } from "features/NextPathSlice";
import React, { useState } from "react";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const Layout = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
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
  const tutorialIndex = tutorialIndexes[path];
  return (
    <div
      className="Frame"
      style={{ visibility: loading ? "hidden" : "inherit" }}
    >
      <div className="PageStart">
        <ToolBar mobileView={mobileView} tutorialIndex={tutorialIndex} />
      </div>
      <ContentSplitPane mobileView={mobileView} tutorialIndex={tutorialIndex}>
        <TutorialPane
          path={path}
          mobileView={mobileView}
          tutorialIndex={tutorialIndex}
        >
          {children}
        </TutorialPane>
      </ContentSplitPane>
    </div>
  );
};

export default Layout;
