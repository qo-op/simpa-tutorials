import React from "react";
import { Link } from "gatsby";
import { connect } from "react-redux";

class NavigationTree extends React.Component<{
  layouts: string;
  expandOrCollapseLayouts: () => void;
}> {
  render = () => {
    return (
      <ul className="NavigationTree Tree">
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
              <Link to="/border-layout" className="TreeNode">
                <span className="material-icons"></span>
                <span>How to Use BorderLayout</span>
              </Link>
            </li>
            {/*
            <li>
              <Link to="/box-layout" className="TreeNode">
                <span className="material-icons icon"></span>
                <span>How to Use BoxLayout</span>
              </Link>
            </li>
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
    );
  };
}

const mapStateToProps = (state: { layouts: string }) => ({
  layouts: state.layouts,
});

const mapDispatchToProps = (
  dispatch: (action: { type: string }) => { type: string }
) => ({
  expandOrCollapseLayouts: () =>
    dispatch({ type: "NavigationTree/expandOrCollapseLayouts" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationTree);
