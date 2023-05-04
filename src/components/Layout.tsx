import * as React from "react";
import MenuBar from "components/MenuBar";
import NavigationTree from "components/NavigationTree";
import ModalLayer from "components/ModalLayer";
import "./Layout.css";

class Layout extends React.Component<
  {
    pageTitle: string;
    children: React.ReactNode;
  },
  { mounted: boolean }
> {
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
    );
  };
}

export default Layout;
