import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";
import { withPrefix } from "gatsby";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { setLoading } from "features/LoadingSlice";
import { tutorialIndexes } from "app/tutorials";
import ContentSplitPane from "components/ContentSplitPane";
import ModalLayer from "components/ModalLayer";
import NavigationTree from "components/NavigationTree";
import ToolBar from "components/ToolBar";
import TutorialPane from "components/TutorialPane";
import "./simpa.css";
import "./Layout.css";

const LayoutStyle = {
  height: "100vh",
};

const Layout = ({
  children,
  path,
  pageTitle,
  blank,
}: {
  children: React.ReactNode;
  path: string;
  pageTitle: string;
  blank?: boolean;
}) => {
  const loading = useAppSelector((state) => state.loading.value);
  const previousPath = useAppSelector((state) => state.previousPath.value);
  const dispatch = useAppDispatch();
  useEffect(() => { dispatch(setLoading(false))}), [];
  const browserView = useMediaQuery({ query: "(min-width: 480px)" });
  const mobileView = !browserView;
  const tutorialIndex = blank ? tutorialIndexes["/" + previousPath.replace(withPrefix("/"), "")] : tutorialIndexes["/" + path.replace(withPrefix("/"), "")];
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <script src="https://qo-op.github.io/simpa/simpa.js"></script>
      </Helmet>
      <div className="Layout LayeredPane" style={{... LayoutStyle, visibility: loading ? "hidden" : "visible" }}>
        <div className="LayoutContentPane BorderLayout">
          <div className="PageStart">
            <ToolBar path={path} mobileView={mobileView} tutorialIndex={tutorialIndex} blank={!!blank} />
          </div>
          <ContentSplitPane mobileView={mobileView} blank={!!blank}>
            <NavigationTree mobileView={mobileView} tutorialIndex={tutorialIndex} blank={!!blank}/>
            <TutorialPane>{children}</TutorialPane>
          </ContentSplitPane>
        </div>
        <ModalLayer />
      </div>
    </>
  );
};

export default Layout;
