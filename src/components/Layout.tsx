import React, { useState } from "react";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { setLoading } from "features/LoadingSlice";
import { setNextPath } from "features/NextPathSlice";
import { tutorialIndexes } from "app/tutorials";
import ContentSplitPane from "components/ContentSplitPane";
import ModalLayer from "components/ModalLayer";
import NavigationTree from "components/NavigationTree";
import ToolBar from "components/ToolBar";
import TutorialPane from "components/TutorialPane";
import "./simpa.css";
import "./Layout.css";

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
    minWidth: 480,
    minHeight: 480,
  });
  const tutorialIndex = tutorialIndexes[path];
  return (
    <div
      className="Layout BorderLayout"
      style={{ visibility: loading ? "hidden" : "inherit" }}
    >
      <div className="LayoutContentPane BorderLayout">
        <div className="PageStart">
          <ToolBar mobileView={mobileView} tutorialIndex={tutorialIndex} />
        </div>
        <ContentSplitPane mobileView={mobileView}>
          <NavigationTree
            mobileView={mobileView}
            tutorialIndex={tutorialIndex}
          />
          <TutorialPane
            path={path}
            mobileView={mobileView}
            tutorialIndex={tutorialIndex}
          >
            {children}
          </TutorialPane>
        </ContentSplitPane>
      </div>
      <ModalLayer />
    </div>
  );
};

export default Layout;
