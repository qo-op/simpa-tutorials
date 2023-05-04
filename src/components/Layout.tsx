import * as React from "react";
import MenuBar from "components/MenuBar";
import NavigationTree from "components/NavigationTree";
import ModalLayer from "components/ModalLayer";
import "./simpa.css";
import "./Layout.css";

class Layout extends React.Component<
  {
    pageTitle: string;
    children: React.ReactNode;
  },
  { mounted: boolean }
> {
  constructor(props: { pageTitle: string; children: React.ReactNode }) {
    super(props);
    this.state = {
      mounted: false,
    };
  }
  componentDidMount = () => {
    this.setState({
      mounted: true,
    });
  };
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
                <div
                  style={{
                    visibility: this.state.mounted ? "visible" : "hidden",
                  }}
                >
                  {this.props.children}
                </div>
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
