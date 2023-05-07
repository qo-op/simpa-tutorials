import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import Hamburger from "components/Hamburger";
import PreviousPage from "components/PreviousPage";
import NextPage from "./NextPage";
import SplitPane from "components/MainSplitPane";
import NavigationTree from "components/NavigationTree";
import ModalLayer from "components/ModalLayer";
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
          <title>{this.props.pageTitle.split(/\r?\n/).join(" ")}</title>
          <script src="https://qo-op.github.io/simpa/simpa.js"></script>
        </Helmet>
        {/* <BrowserView> */}
        <div className="Layout BorderLayout">
          <div className="PageStartBorderLayout">
            <div
              className="LineStartCenterBorderLayout"
              style={{ borderBlockEnd: "1px black solid", paddingInline: "16px" }}
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
                      fontFamily: "cursive",
                      fontSize: "2rem",
                      marginInline: "4px",
                    }}
                  >
                    Simpa Tutorials
                  </Link>
                </div>
                <NextPage />
              </div>
            </div>
            <SplitPane>
              <nav>
                <NavigationTree />
              </nav>
              <div className="Tutorial BoxLayout" data-axis="page-axis">
                {this.props.pageTitle
                  .split(/\r?\n/)
                  .map((line: string, index: number) => (
                    <h1 key={index}>{line}</h1>
                  ))}
                <div>{this.props.children}</div>
              </div>
            </SplitPane>
          </div>
          <ModalLayer />
        </div>
        {/* </BrowserView> */}
        {/* <MobileView>
          <div className="Layout BorderLayout">
            <div className="PageStartBorderLayout">
              <div className="LineBorderLayout">
                <MenuBar />
                <div></div>
                <div></div>
              </div>
              <div className="ScrollPane">
                <div className="Tutorial BoxLayout" data-axis="page-axis">
                  {this.props.pageTitle
                    .split(/\r?\n/)
                    .map((line: string, index: number) => (
                      <h2 key={index}>{line}</h2>
                    ))}
                  <div>{this.props.children}</div>
                </div>
              </div>
            </div>
            <ModalLayer />
          </div>
        </MobileView>
         */}
      </>
    );
  };
}

export default Layout;
