import React from "react";
import { navigate } from "gatsby";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SchoolIcon from "@mui/icons-material/School";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { setNextPath } from "features/NextPathSlice";
import { expand, collapse } from "features/NavigationTreeSlice";
import { setDividerLocation } from "features/ContentSplitPaneSlice";
import { setClosed } from "features/HamburgerButtonSlice";
import tutorials from "app/tutorials";
import "./NavigationTree.css";

const NavigationTreeStyle: React.CSSProperties = {
  marginBlock: "8px",
};

const NavigationTreeNodeStyle = (selected: boolean): React.CSSProperties => ({
  backgroundColor: selected ? "lightsteelblue" : undefined,
});

const NavigationTree = ({
  mobileView,
  tutorialIndex,
}: {
  mobileView: boolean;
  tutorialIndex: number;
}) => {
  const layoutFolderClosed = useAppSelector(
    (state) => state.navigationTree.layoutFolderClosed
  );
  const closed = useAppSelector((state) => state.hamburgerButton.closed);
  const dispatch = useAppDispatch();
  const tutorialClick = (to: string, mobileView: boolean) => {
    navigate(to);
    dispatch(setNextPath(to));
    if (mobileView) {
      dispatch(setDividerLocation(-1));
      dispatch(setClosed(!closed));
    }
  };
  const folderClick = (folder: string) => {
    if (layoutFolderClosed) {
      dispatch(expand(folder));
    } else {
      dispatch(collapse(folder));
    }
  };
  return (
    <nav>
      <ul className="NavigationTree Tree" style={NavigationTreeStyle}>
        <li>
          <div
            className="TreeNode"
            style={NavigationTreeNodeStyle(tutorialIndex == 0)}
            onClick={() => tutorialClick(tutorials[0].path, mobileView)}
          >
            <SchoolIcon fontSize="small" />
            <span>{tutorials[0].text}</span>
          </div>
        </li>
        <li data-folder={layoutFolderClosed ? "closed" : "open"}>
          <div className="TreeNode" onClick={() => folderClick("Layouts")}>
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
                style={NavigationTreeNodeStyle(tutorialIndex == 1)}
                onClick={() => tutorialClick(tutorials[1].path, mobileView)}
              >
                <SchoolIcon fontSize="small" />
                <span>{tutorials[1].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex == 2)}
                onClick={() => tutorialClick(tutorials[2].path, mobileView)}
              >
                <SchoolIcon fontSize="small" />
                <span>{tutorials[2].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex == 3)}
                onClick={() => tutorialClick(tutorials[3].path, mobileView)}
              >
                <SchoolIcon fontSize="small" />
                <span>{tutorials[3].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex == 4)}
                onClick={() => tutorialClick(tutorials[4].path, mobileView)}
              >
                <SchoolIcon fontSize="small" />
                <span>{tutorials[4].text}</span>
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
