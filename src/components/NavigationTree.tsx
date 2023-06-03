import "./NavigationTree.css";

import ArticleIcon from "@mui/icons-material/Article";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useAppDispatch, useAppSelector } from "app/hooks";
import tutorials, {
  cssComponentsTutorials,
  cssLayoutsTutorials,
  examples,
  jsComponentsTutorials,
} from "app/tutorials";
import {
  setDividerLocation,
  setScrollPosition,
} from "features/ContentSplitPaneSlice";
import { setClosed } from "features/HamburgerButtonSlice";
import { toggle } from "features/NavigationTreeSlice";
import { setNextPath } from "features/NextPathSlice";
import { setReady } from "features/ReadySlice";
import { navigate } from "gatsby";
import React from "react";

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
  const cssLayoutsFolderClosed = useAppSelector(
    (state) => state.navigationTree.cssLayoutsFolderClosed
  );
  const cssComponentsFolderClosed = useAppSelector(
    (state) => state.navigationTree.cssComponentsFolderClosed
  );
  const jsComponentsFolderClosed = useAppSelector(
    (state) => state.navigationTree.jsComponentsFolderClosed
  );
  const examplesFolderClosed = useAppSelector(
    (state) => state.navigationTree.examplesFolderClosed
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
            data-closed={cssLayoutsFolderClosed ? "true" : "false"}
            onClick={() => folderClick("CSS Layouts")}
          >
            {cssLayoutsFolderClosed ? (
              <KeyboardArrowRightIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
            <span>CSS Layouts</span>
          </div>
          <ul>
            {cssLayoutsTutorials.map((tutorial, index) => (
              <li key={index}>
                <div
                  className="TreeNode"
                  style={NavigationTreeNodeStyle(tutorialIndex === index + 1)}
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
            data-closed={cssComponentsFolderClosed ? "true" : "false"}
            onClick={() => folderClick("CSS Components")}
          >
            {cssComponentsFolderClosed ? (
              <KeyboardArrowRightIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
            <span>CSS Components</span>
          </div>
          <ul>
            {cssComponentsTutorials.map((tutorial, index) => (
              <li key={index}>
                <div
                  className="TreeNode"
                  style={NavigationTreeNodeStyle(
                    tutorialIndex === index + cssLayoutsTutorials.length + 1
                  )}
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
            data-closed={jsComponentsFolderClosed ? "true" : "false"}
            onClick={() => folderClick("JS Components")}
          >
            {jsComponentsFolderClosed ? (
              <KeyboardArrowRightIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
            <span>JS Components</span>
          </div>
          <ul>
            {jsComponentsTutorials.map((tutorial, index) => (
              <li key={index}>
                <div
                  className="TreeNode"
                  style={NavigationTreeNodeStyle(
                    tutorialIndex ===
                      index +
                        cssComponentsTutorials.length +
                        cssLayoutsTutorials.length +
                        1
                  )}
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
            data-closed={examplesFolderClosed ? "true" : "false"}
            onClick={() => folderClick("Examples")}
          >
            {examplesFolderClosed ? (
              <KeyboardArrowRightIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
            <span>Examples</span>
          </div>
          <ul>
            {examples.map((tutorial, index) => (
              <li key={index}>
                <div
                  className="TreeNode"
                  style={NavigationTreeNodeStyle(
                    tutorialIndex ===
                      index +
                        jsComponentsTutorials.length +
                        cssComponentsTutorials.length +
                        cssLayoutsTutorials.length +
                        1
                  )}
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
