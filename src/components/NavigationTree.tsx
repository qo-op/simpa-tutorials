import React from "react";
import { Link } from "gatsby";

class NavigationTree extends React.Component {
  render() {
    return (
      <ul
        className="NavigationTree Tree"
        data-selection-mode="single-tree-selection"
      >
        <li data-open>
          <div className="TreeNode">
            <span className="material-icons icon"></span>
            <span>Layouts</span>
          </div>
          <ul>
            <li>
              <Link to="/border-layout" className="TreeNode">
                <span className="material-icons icon"></span>
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
        <li data-open>
          <div className="TreeNode">
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
  }
}

export default NavigationTree;
