import * as React from "react";
import { Helmet } from "react-helmet";
import { BrowserView, MobileView } from "react-device-detect";
import MenuBar from "components/MenuBar";
import SplitPane from "components/SplitPane";
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
        <BrowserView>
          <div className="Layout BorderLayout">
            <div className="PageStartBorderLayout">
              <div className="LineBorderLayout">
                <MenuBar />
                <div></div>
                <div></div>
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
        </BrowserView>
        <MobileView>
          <div className="Layout BorderLayout">
            <div className="PageStartBorderLayout">
              <div className="LineBorderLayout">
                <MenuBar />
                <div></div>
                <div></div>
              </div>
              <div className="Tutorial BoxLayout" data-axis="page-axis">
                {this.props.pageTitle
                  .split(/\r?\n/)
                  .map((line: string, index: number) => (
                    <h1 key={index}>{line}</h1>
                  ))}
                <div>{this.props.children}</div>
              </div>
            </div>
          </div>
        </MobileView>
      </>
    );
  };
}

export default Layout;
