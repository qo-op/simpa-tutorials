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
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex === 1)}
                onClick={() => tutorialClick(tutorials[1].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[1].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex === 2)}
                onClick={() => tutorialClick(tutorials[2].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[2].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex === 3)}
                onClick={() => tutorialClick(tutorials[3].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[3].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex === 4)}
                onClick={() => tutorialClick(tutorials[4].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[4].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex === 5)}
                onClick={() => tutorialClick(tutorials[5].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[5].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex === 6)}
                onClick={() => tutorialClick(tutorials[6].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[6].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex === 7)}
                onClick={() => tutorialClick(tutorials[7].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[7].text}</span>
              </div>
            </li>
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
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex === 8)}
                onClick={() => tutorialClick(tutorials[8].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[8].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex === 9)}
                onClick={() => tutorialClick(tutorials[9].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[9].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex === 10)}
                onClick={() => tutorialClick(tutorials[10].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[10].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex === 11)}
                onClick={() => tutorialClick(tutorials[11].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[11].text}</span>
              </div>
            </li>
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
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex === 12)}
                onClick={() => tutorialClick(tutorials[12].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[12].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex === 13)}
                onClick={() => tutorialClick(tutorials[13].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[13].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex === 14)}
                onClick={() => tutorialClick(tutorials[14].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[14].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex === 15)}
                onClick={() => tutorialClick(tutorials[15].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[15].text}</span>
              </div>
            </li>
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
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex === 16)}
                onClick={() => tutorialClick(tutorials[16].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[16].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex === 17)}
                onClick={() => tutorialClick(tutorials[17].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[17].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex === 18)}
                onClick={() => tutorialClick(tutorials[18].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[18].text}</span>
              </div>
            </li>
            <li>
              <div
                className="TreeNode"
                style={NavigationTreeNodeStyle(tutorialIndex === 19)}
                onClick={() => tutorialClick(tutorials[19].path, mobileView)}
              >
                <ArticleIcon />
                <span>{tutorials[19].text}</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationTree;
