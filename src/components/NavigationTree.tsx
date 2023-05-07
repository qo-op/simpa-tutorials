import React from "react";
import MediaQuery from "react-responsive";
import { Link, navigate } from "gatsby";
import { connect } from "react-redux";
import store from "state/store";

class NavigationTree extends React.Component<{
  layouts: string;
  expandOrCollapseLayouts: () => void;
}> {
  click = (to: string, toggle: boolean) => {
    navigate(to);
    if (toggle) {
      store.dispatch({
        type: "HamburgerSplitPane/setDividerLocation",
        payload: -1,
      });
      store.dispatch({
        type: "Hamburger/toggle",
        payload: null,
      });
    }
  };
  render = () => {
    return (
      <MediaQuery maxWidth={480}>
        {(matches) => (
          <ul className="NavigationTree Tree" style={{ marginBlock: "8px" }}>
            <li>
              <div className="TreeNode" onClick={() => this.click("/", true)}>
                <span className="material-icons"></span>
                <span>Introduction to Simpa</span>
              </div>
            </li>
            <li data-folder={this.props.layouts}>
              <div
                className="TreeNode"
                onClick={this.props.expandOrCollapseLayouts}
              >
                <span className="material-icons folder"></span>
                <span>Layouts</span>
              </div>
              <ul>
                <li>
                  <div className="TreeNode" onClick={() => this.click("/border-layout", true)}>
                    <span className="material-icons"></span>
                    <span>How to Use BorderLayout</span>
                  </div>
                </li>
                <li>
                  <div className="TreeNode" onClick={() => this.click("/box-layout", true)}>
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
        )}
      </MediaQuery>
    );
  };
}

const mapStateToProps = (state: { layouts: string }) => ({
  layouts: state.layouts,
});

const mapDispatchToProps = (
  dispatch: (action: { type: string; payload: any }) => {
    type: string;
    payload: any;
  }
) => ({
  expandOrCollapseLayouts: () =>
    dispatch({
      type: "NavigationTree/expandOrCollapseLayouts",
      payload: null,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationTree);
