import * as React from "react";
import { Helmet } from "react-helmet";
import MediaQuery from "react-responsive";
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
  pageTitle,
  path,
}: {
  children: React.ReactNode;
  pageTitle: string;
  path: string;
}) => {
  return (
    <MediaQuery minWidth={480}>
      {(matches: boolean) => (
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
                <Hamburger mobileView={!matches} />
                <div className="LineCenterBorderLayout">
                  <PreviousPageButton path={path} />
                  <HomeButton />
                  <NextPageButton path={path} />
                </div>
              </div>
              <ContentSplitPane mobileView={!matches}>
                <NavigationTree mobileView={!matches} />
                <TutorialPane>{children}</TutorialPane>
              </ContentSplitPane>
            </div>
            <ModalLayer />
          </div>
        </>
      )}
    </MediaQuery>
  );
};

export default Layout;
