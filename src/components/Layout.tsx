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
  blank,
}: {
  children: React.ReactNode;
  path: string;
  pageTitle: string;
  blank?: boolean;
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
            <ToolBar path={path} mobileView={mobileView} blank={!!blank} />
          </div>
          <ContentSplitPane mobileView={mobileView} blank={!!blank}>
            <NavigationTree mobileView={mobileView} blank={!!blank}/>
            <TutorialPane>{children}</TutorialPane>
          </ContentSplitPane>
        </div>
        <ModalLayer />
      </div>
    </>
  );
};

export default Layout;
