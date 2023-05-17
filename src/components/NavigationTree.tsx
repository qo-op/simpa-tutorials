import React from "react";
import { navigate } from "gatsby";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArticleIcon from "@mui/icons-material/Article";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { setReady } from "features/ReadySlice";
import { setNextPath } from "features/NextPathSlice";
import { toggle } from "features/NavigationTreeSlice";
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
  const componentFolderClosed = useAppSelector(
    (state) => state.navigationTree.componentFolderClosed
  );
  const dispatch = useAppDispatch();
  const tutorialClick = (to: string, mobileView: boolean) => {
    navigate(to);
    dispatch(setNextPath(to));
    if (mobileView) {
      dispatch(setReady(false));
      dispatch(setDividerLocation(-1));
      dispatch(setClosed(true));
    }
  };
  const folderClick = (folder: string) => {
    dispatch(toggle(folder));
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
            <ArticleIcon />
            <span>{tutorials[0].text}</span>
          </div>
        </li>
        <li data-folder={layoutFolderClosed ? "closed" : "open"}>
          <div className="TreeNode" onClick={() => folderClick("Layouts")}>
            {layoutFolderClosed ? (
              <KeyboardArrowRightIcon />
            ) : (
              <KeyboardArrowDownIcon />
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
                <ArticleIcon />
                <span>{tutorials[1].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex == 2)}
                onClick={() => tutorialClick(tutorials[2].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[2].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex == 3)}
                onClick={() => tutorialClick(tutorials[3].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[3].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex == 4)}
                onClick={() => tutorialClick(tutorials[4].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[4].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex == 5)}
                onClick={() => tutorialClick(tutorials[5].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[5].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex == 6)}
                onClick={() => tutorialClick(tutorials[6].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[6].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex == 7)}
                onClick={() => tutorialClick(tutorials[7].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[7].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex == 8)}
                onClick={() => tutorialClick(tutorials[8].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[8].text}</span>
              </div>
            </li>
          </ul>
        </li>
        <li data-folder={componentFolderClosed ? "closed" : "open"}>
          <div className="TreeNode" onClick={() => folderClick("Components")}>
            {componentFolderClosed ? (
              <KeyboardArrowRightIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
            <span>Components</span>
          </div>
          <ul>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex == 9)}
                onClick={() => tutorialClick(tutorials[9].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[9].text}</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationTree;
