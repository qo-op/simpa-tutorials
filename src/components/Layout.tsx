import * as React from "react";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";
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
}: {
  children: React.ReactNode;
  path: string;
  pageTitle: string;
}) => {
  const browserView = useMediaQuery({ query: "(min-width: 480px)" });
  const mobileView = !browserView;
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <script src="https://qo-op.github.io/simpa/simpa.js"></script>
      </Helmet>
      <div className="Layout LayeredPane" style={LayoutStyle}>
        <div className="LayoutContentPane BorderLayout">
          <div className="PageStart">
            <ToolBar path={path} mobileView={mobileView} />
          </div>
          <ContentSplitPane mobileView={mobileView}>
            <NavigationTree mobileView={mobileView} />
            <TutorialPane>{children}</TutorialPane>
          </ContentSplitPane>
        </div>
        <ModalLayer />
      </div>
    </>
  );
};

export default Layout;
