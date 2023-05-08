import React from "react";
import { navigate } from "gatsby";
import { connect } from "react-redux";
import SchoolIcon from "@mui/icons-material/School";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import store from "model/store";
import TutorialPage from "model/TutorialPage";

class NavigationTree extends React.Component<{
  mobileView: boolean;
  tutorialPages: TutorialPage[];
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
              onClick={() => this.click(this.props.tutorialPages[0].path, this.props.mobileView)}
            >
              <SchoolIcon fontSize="small" />
              <span>{this.props.tutorialPages[0].text}</span>
            </div>
          </li>
          <li data-folder={this.props.layouts}>
            <div
              className="TreeNode"
              onClick={() => this.expandOrCollapse("layouts")}
            >
              {this.props.layouts === "closed" ? (
                <KeyboardArrowRightIcon fontSize="small" />
              ) : (
                <KeyboardArrowDownIcon fontSize="small" />
              )}
              <span>Layouts</span>
            </div>
            <ul>
              <li>
                <div
                  className="TreeNode"
                  onClick={() =>
                    this.click(this.props.tutorialPages[1].path, this.props.mobileView)
                  }
                >
                  <SchoolIcon fontSize="small" />
                  <span>{this.props.tutorialPages[1].text}</span>
                </div>
              </li>
              <li>
                <div
                  className="TreeNode"
                  onClick={() =>
                    this.click(this.props.tutorialPages[2].path, this.props.mobileView)
                  }
                >
                  <SchoolIcon fontSize="small" />
                  <span>{this.props.tutorialPages[2].text}</span>
                </div>
              </li>
              {/*
          <li>
            <Link to="/card-layout" className="TreeNode">
                  <SchoolIcon fontSize="small" />
              <span>How to Use CardLayout</span>
            </Link>
          </li>
          <li>
            <Link to="/flow-layout" className="TreeNode">
                  <SchoolIcon fontSize="small" />
              <span>How to Use FlowLayout</span>
            </Link>
          </li>
          <li>
            <Link to="/grid-bag-layout" className="TreeNode">
                  <SchoolIcon fontSize="small" />
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
                  <SchoolIcon fontSize="small" />
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
