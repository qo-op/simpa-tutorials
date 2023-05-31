import React from "react";
import { navigate } from "gatsby";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArticleIcon from "@mui/icons-material/Article";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { setReady } from "features/ReadySlice";
import { setNextPath } from "features/NextPathSlice";
import { toggle } from "features/NavigationTreeSlice";
import {
  setDividerLocation,
  setScrollPosition,
} from "features/ContentSplitPaneSlice";
import { setClosed } from "features/HamburgerButtonSlice";
import tutorials from "app/tutorials";
import "./NavigationTree.css";

const NavigationTreeStyle: React.CSSProperties = {
  marginBlock: ".5em",
  marginBlockEnd: "80px",
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
  const cssLayoutFolderClosed = useAppSelector(
    (state) => state.navigationTree.cssLayoutFolderClosed
  );
  const cssComponentFolderClosed = useAppSelector(
    (state) => state.navigationTree.cssComponentFolderClosed
  );
  const jsComponentFolderClosed = useAppSelector(
    (state) => state.navigationTree.jsComponentFolderClosed
  );
  const exampleFolderClosed = useAppSelector(
    (state) => state.navigationTree.exampleFolderClosed
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
    const navigationTreeScrollPane: HTMLElement = document.getElementById(
      "navigation-tree-scroll-pane"
    ) as HTMLElement;
    if (navigationTreeScrollPane !== null) {
      dispatch(setScrollPosition(navigationTreeScrollPane.scrollTop));
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
            style={NavigationTreeNodeStyle(tutorialIndex === 0)}
            onClick={() => tutorialClick(tutorials[0].path, mobileView)}
          >
            <ArticleIcon />
            <span>{tutorials[0].text}</span>
          </div>
        </li>
        <li>
          <div
            className="TreeNode"
            data-closed={cssLayoutFolderClosed ? "true" : "false"}
            onClick={() => folderClick("CSS Layouts")}
          >
            {cssLayoutFolderClosed ? (
              <KeyboardArrowRightIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
            <span>CSS Layouts</span>
          </div>
          <ul>
            {tutorials.slice(0, 8).map((tutorial, index) => (
              <li key={index}>
                <div
                  className="TreeNode"
                  style={NavigationTreeNodeStyle(tutorialIndex === index)}
                  onClick={() => tutorialClick(tutorial.path, mobileView)}
                >
                  <ArticleIcon />
                  <span>{tutorial.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <div
            className="TreeNode"
            data-closed={cssComponentFolderClosed ? "true" : "false"}
            onClick={() => folderClick("CSS Components")}
          >
            {cssComponentFolderClosed ? (
              <KeyboardArrowRightIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
            <span>CSS Components</span>
          </div>
          <ul>
            {tutorials.slice(8, 12).map((tutorial, index) => (
              <li key={index}>
                <div
                  className="TreeNode"
                  style={NavigationTreeNodeStyle(tutorialIndex === index + 8)}
                  onClick={() => tutorialClick(tutorial.path, mobileView)}
                >
                  <ArticleIcon />
                  <span>{tutorial.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <div
            className="TreeNode"
            data-closed={jsComponentFolderClosed ? "true" : "false"}
            onClick={() => folderClick("JS Components")}
          >
            {jsComponentFolderClosed ? (
              <KeyboardArrowRightIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
            <span>JS Components</span>
          </div>
          <ul>
            {tutorials.slice(12, 16).map((tutorial, index) => (
              <li key={index}>
                <div
                  className="TreeNode"
                  style={NavigationTreeNodeStyle(tutorialIndex === index + 12)}
                  onClick={() => tutorialClick(tutorial.path, mobileView)}
                >
                  <ArticleIcon />
                  <span>{tutorial.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <div
            className="TreeNode"
            data-closed={exampleFolderClosed ? "true" : "false"}
            onClick={() => folderClick("Examples")}
          >
            {exampleFolderClosed ? (
              <KeyboardArrowRightIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
            <span>Examples</span>
          </div>
          <ul>
            {tutorials.slice(16).map((tutorial, index) => (
              <li key={index}>
                <div
                  className="TreeNode"
                  style={NavigationTreeNodeStyle(tutorialIndex === index + 16)}
                  onClick={() => tutorialClick(tutorial.path, mobileView)}
                >
                  <ArticleIcon />
                  <span>{tutorial.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationTree;
