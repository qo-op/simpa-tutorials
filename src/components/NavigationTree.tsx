import React from "react";
import { navigate } from "gatsby";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SchoolIcon from "@mui/icons-material/School";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { expandOrCollapse } from "features/NavigationTreeSlice";
import { setDividerLocation } from "features/ContentSplitPaneSlice";
import { setClosed } from "features/HamburgerSlice";
import tutorials from "app/tutorials";

const NavigationTree = ({
  mobileView,
  blank,
}: {
  mobileView: boolean;
  blank: boolean;
}) => {
  const layoutFolderClosed = useAppSelector(
    (state) => state.navigationTree.layoutFolderClosed
  );
  const closed = blank
    ? false
    : useAppSelector((state) => state.hamburger.closed);
  const dispatch = useAppDispatch();
  const tutorialClick = (to: string, mobileView: boolean) => {
    if (mobileView) {
      dispatch(setDividerLocation(-1));
      dispatch(setClosed(!closed));
    }
    navigate(to);
  };
  const folderClick = (folder: string) => {
    dispatch(expandOrCollapse(folder));
  };
  return (
    <nav>
      <ul className="NavigationTree Tree" style={{ marginBlock: "8px" }}>
        <li>
          <div
            className="TreeNode"
            onClick={() => tutorialClick(tutorials[0].path, mobileView)}
          >
            <SchoolIcon fontSize="small" />
            <span>{tutorials[0].text}</span>
          </div>
        </li>
        <li data-folder={layoutFolderClosed ? "closed" : "open"}>
          <div className="TreeNode" onClick={() => folderClick("layoutFolder")}>
            {layoutFolderClosed ? (
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
                onClick={() => tutorialClick(tutorials[1].path, mobileView)}
              >
                <SchoolIcon fontSize="small" />
                <span>{tutorials[1].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                onClick={() => tutorialClick(tutorials[2].path, mobileView)}
              >
                <SchoolIcon fontSize="small" />
                <span>{tutorials[2].text}</span>
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

export default NavigationTree;
