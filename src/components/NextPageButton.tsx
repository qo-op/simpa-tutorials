import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useAppDispatch, useAppSelector } from "app/hooks";
import tutorials from "app/tutorials";
import {
  setDividerLocation,
  setScrollMarginTop,
  setScrollPosition,
} from "features/ContentSplitPaneSlice";
import { setClosed } from "features/HamburgerButtonSlice";
import { setNextPath } from "features/NextPathSlice";
import { setReady } from "features/ReadySlice";
import { setIframeReady } from "features/ResultPaneSlice";
import { navigate } from "gatsby";
import React from "react";

const NextPageButtonStyle: React.CSSProperties = {
  userSelect: "none",
  cursor: "pointer",
  border: "none",
  padding: "0",
  backgroundColor: "unset",
};

const NextPageButton = ({
  mobileView,
  tutorialIndex,
}: {
  mobileView: boolean;
  tutorialIndex: number;
}) => {
  const disabled = useAppSelector((state) => state.nextPageButton.disabled);
  const closed = useAppSelector((state) => state.hamburgerButton.closed);
  const dispatch = useAppDispatch();
  const click = () => {
    if (tutorialIndex < tutorials.length - 1) {
      const to = tutorials[tutorialIndex + 1].path;
      navigate(to);
      dispatch(setNextPath(to));
      if (mobileView && !closed) {
        dispatch(setReady(false));
        dispatch(setDividerLocation(-1));
        dispatch(setClosed(true));
      }
      dispatch(setIframeReady(false));
      const navigationTreeScrollPane: HTMLElement = document.getElementById(
        "navigation-tree-scroll-pane"
      ) as HTMLElement;
      if (navigationTreeScrollPane !== null) {
        dispatch(setScrollPosition(navigationTreeScrollPane.scrollTop));
        dispatch(setScrollMarginTop(-navigationTreeScrollPane.scrollTop));
      }
    }
  };
  return (
    <button
      className="NextPage BorderLayout"
      style={NextPageButtonStyle}
      disabled={disabled}
      onClick={click}
    >
      <ArrowForwardIcon fontSize="large" />
    </button>
  );
};

export default NextPageButton;
