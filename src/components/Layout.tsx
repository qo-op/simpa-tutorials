import * as React from "react";
import MenuBar from "components/MenuBar";
import SplitPane from "components/SplitPane"
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
      <div className="Layout BorderLayout">
        <div className="PageStartBorderLayout">
          <div className="LineBorderLayout">
            <div className="StretchBoxLayout">
              <MenuBar />
            </div>
            <div></div>
            <div></div>
          </div>
          <SplitPane>
            <nav>
              <NavigationTree />
            </nav>
            <div className="Tutorial CenterLayout">
              <div className="CenterLayout">
                <h1>{this.props.pageTitle}</h1>
              </div>
              <div>{this.props.children}</div>
            </div>
          </SplitPane>
        </div>
        <ModalLayer />
      </div>
    );
  };
}

export default Layout;
