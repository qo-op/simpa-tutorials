import * as React from "react";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";
import Hamburger from "components/Hamburger";
import PreviousPageButton from "components/PreviousPageButton";
import HomeButton from "components/HomeButton";
import NextPageButton from "components/NextPageButton";
import ContentSplitPane from "components/ContentSplitPane";
import NavigationTree from "components/NavigationTree";
import ModalLayer from "components/ModalLayer";
import TutorialPane from "components/TutorialPane";
import "./simpa.css";
import "./Layout.css";

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
      <div className="Layout BorderLayout">
        <div className="PageStartBorderLayout">
          <div
            className="LineStartCenterBorderLayout"
            style={{
              borderBlockEnd: "1px black solid",
              paddingInline: "16px",
              gap: "16px",
            }}
          >
            <Hamburger mobileView={mobileView} />
            <div className="LineCenterBorderLayout">
              <PreviousPageButton path={path} />
              <HomeButton />
              <NextPageButton path={path} />
            </div>
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
