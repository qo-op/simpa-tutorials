import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import MediaQuery from "react-responsive";
import Hamburger from "components/Hamburger";
import PreviousPage from "components/PreviousPage";
import NextPage from "./NextPage";
import HamburgerSplitPane from "components/HamburgerSplitPane";
import NavigationTree from "components/NavigationTree";
import ModalLayer from "components/ModalLayer";
import TutorialPane from "components/TutorialPane";
import TutorialPage from "model/TutorialPage";
import "./simpa.css";
import "./Layout.css";

const tutorialPages: TutorialPage[] = [
  {
    text: "Introduction to Simpa",
    path: "/",
  },
  {
    text: "How to Use BorderLayout",
    path: "/border-layout/",
  },
  {
    text: "How to Use BoxLayout",
    path: "/box-layout/",
  },
];

class Layout extends React.Component<{
  children: React.ReactNode;
  pageTitle: string;
  pathname: string;
}> {
  render = () => {
    return (
      <MediaQuery minWidth={480}>
        {(matches: boolean) => (
          <>
            <Helmet>
              <title>{this.props.pageTitle}</title>
              <script src="https://qo-op.github.io/simpa/simpa.js"></script>
            </Helmet>
            <div className="Layout BorderLayout">
              <div className="PageStartBorderLayout">
                <div
                  className="LineStartCenterBorderLayout"
                  style={{
                    borderBlockEnd: "1px black solid",
                    paddingInline: "16px",
                  }}
                >
                  <Hamburger mobileView={!matches} />
                  <div className="LineCenterBorderLayout">
                    <PreviousPage tutorialPages={tutorialPages} pathname={this.props.pathname}/>
                    <div className="CenterLayout">
                      <Link
                        to="/"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontSize: "2rem",
                          marginInline: "4px",
                        }}
                      >
                        Simpa
                      </Link>
                    </div>
                    <NextPage tutorialPages={tutorialPages} pathname={this.props.pathname}/>
                  </div>
                </div>
                <HamburgerSplitPane mobileView={!matches}>
                  <NavigationTree
                    mobileView={!matches}
                    tutorialPages={tutorialPages}
                  />
                  <TutorialPane>{this.props.children}</TutorialPane>
                </HamburgerSplitPane>
              </div>
              <ModalLayer />
            </div>
          </>
        )}
      </MediaQuery>
    );
  };
}

export default Layout;
