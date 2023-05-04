import * as React from "react";
import { Helmet } from "react-helmet";
import MenuBar from "components/MenuBar";
import NavigationTree from "components/NavigationTree";
import ModalLayer from "components/ModalLayer";
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
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            rel="preload"
            href="https://qo-op.github.io/simpa/simpa.css"
            as="style"
          />
          <link
            rel="stylesheet"
            href="https://qo-op.github.io/simpa/simpa.css"
          />
          <script src="https://qo-op.github.io/simpa/simpa.js"></script>
        </Helmet>
        <div className="Layout BorderLayout">
          <div className="PageStartBorderLayout">
            <div className="LineBorderLayout">
              <div className="StretchBoxLayout">
                <MenuBar />
              </div>
              <div></div>
              <div></div>
            </div>
            <div className="SplitPane">
              <div className="ScrollPane">
                <nav>
                  <NavigationTree />
                </nav>
              </div>
              <div>
                <div className="SplitPaneDivider"></div>
              </div>
              <div className="ScrollPane">
                <div className="Tutorial CenterLayout">
                  <div className="CenterLayout">
                    <h1>{this.props.pageTitle}</h1>
                  </div>
                  <div>{this.props.children}</div>
                </div>
              </div>
            </div>
          </div>
          <ModalLayer />
        </div>
      </>
    );
  };
}

export default Layout;
