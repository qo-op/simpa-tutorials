import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import Hamburger from "components/Hamburger";
import PreviousPage from "components/PreviousPage";
import NextPage from "./NextPage";
import HamburgerSplitPane from "components/HamburgerSplitPane";
import NavigationTree from "components/NavigationTree";
import ModalLayer from "components/ModalLayer";
import Tutorial from "components/Tutorial";
import "./simpa.css";
import "./Layout.css";

class Layout extends React.Component<{
  pageTitle: string;
  children: React.ReactNode;
}> {
  render = () => {
    return (
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
              <Hamburger />
              <div className="LineCenterBorderLayout">
                <PreviousPage />
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
                <NextPage />
              </div>
            </div>
            <HamburgerSplitPane>
              <NavigationTree />
              <Tutorial>
                {this.props.children}
              </Tutorial>
            </HamburgerSplitPane>
          </div>
          <ModalLayer />
        </div>
      </>
    );
  };
}

export default Layout;
