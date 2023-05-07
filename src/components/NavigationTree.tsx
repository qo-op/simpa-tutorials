import React from "react";
import { navigate } from "gatsby";
import { connect } from "react-redux";
import store from "state/store";

class NavigationTree extends React.Component<{
  mobileView: boolean;
  layouts: string;
}> {
  click = (to: string, mobileView: boolean) => {
    if (mobileView) {
      store.dispatch({
        type: "HamburgerSplitPane/setDividerLocation",
        payload: -1,
      });
      store.dispatch({
        type: "Hamburger/toggle",
        payload: null,
      });
    }
    navigate(to);
  };
  expandOrCollapse = (folder: string) => {
    store.dispatch({
      type: "NavigationTree/expandOrCollapse",
      payload: folder,
    });
  };
  render = () => {
    return (
      <nav>
        <ul className="NavigationTree Tree" style={{ marginBlock: "8px" }}>
          <li>
            <div
              className="TreeNode"
              onClick={() => this.click("/", this.props.mobileView)}
            >
              <span className="material-icons"></span>
              <span>Introduction to Simpa</span>
            </div>
          </li>
          <li data-folder={this.props.layouts}>
            <div
              className="TreeNode"
              onClick={() => this.expandOrCollapse("layouts")}
            >
              <span className="material-icons folder"></span>
              <span>Layouts</span>
            </div>
            <ul>
              <li>
                <div
                  className="TreeNode"
                  onClick={() =>
                    this.click("/border-layout", this.props.mobileView)
                  }
                >
                  <span className="material-icons"></span>
                  <span>How to Use BorderLayout</span>
                </div>
              </li>
              <li>
                <div
                  className="TreeNode"
                  onClick={() =>
                    this.click("/box-layout", this.props.mobileView)
                  }
                >
                  <span className="material-icons icon"></span>
                  <span>How to Use BoxLayout</span>
                </div>
              </li>
              {/*
          <li>
            <Link to="/card-layout" className="TreeNode">
              <span className="material-icons icon"></span>
              <span>How to Use CardLayout</span>
            </Link>
          </li>
          <li>
            <Link to="/flow-layout" className="TreeNode">
              <span className="material-icons icon"></span>
              <span>How to Use FlowLayout</span>
            </Link>
          </li>
          <li>
            <Link to="/grid-bag-layout" className="TreeNode">
              <span className="material-icons icon"></span>
              <span>How to Use GridBagLayout</span>
            </Link>
          </li>
        */}
            </ul>
          </li>
          {/*
      <li data-folder="open">
        <div className="TreeNode" onClick={this.expandOrCollapse}>
          <span className="material-icons icon"></span>
          <span>Components</span>
        </div>
        <ul>
          <li>
            <Link to="/menu" className="TreeNode">
              <span className="material-icons icon"></span>
              <span>How to Use Menus</span>
            </Link>
          </li>
        </ul>
      </li>
      */}
        </ul>
      </nav>
    );
  };
}

const mapStateToProps = (state: { layouts: string }) => ({
  layouts: state.layouts,
});

export default connect(mapStateToProps)(NavigationTree);
