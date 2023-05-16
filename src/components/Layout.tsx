import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
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

const LayoutStyle: React.CSSProperties = {
  height: "100vh",
};

const Layout = ({
  children,
  path,
  pageTitle,
}: {
  children: React.ReactNode;
  path: string;
  pageTitle: string;
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
      <Helmet>
        <title>{pageTitle}</title>
        <script src="https://qo-op.github.io/simpa/simpa.js"></script>
      </Helmet>
      <div
        className="Layout LayeredPane"
        style={{ ...LayoutStyle, visibility: loading ? "hidden" : "inherit" }}
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
    </>
  );
};

export default Layout;
