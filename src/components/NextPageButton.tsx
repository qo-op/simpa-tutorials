import React from "react";
import { navigate } from "gatsby";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { setReady } from "features/ReadySlice";
import { setNextPath } from "features/NextPathSlice";
import {
  setDividerLocation,
  setScrollPosition,
} from "features/ContentSplitPaneSlice";
import { setClosed } from "features/HamburgerButtonSlice";
import tutorials from "app/tutorials";

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
      const navigationTreeScrollPane: HTMLElement = document.getElementById(
        "navigation-tree-scroll-pane"
      ) as HTMLElement;
      if (navigationTreeScrollPane !== null) {
        dispatch(setScrollPosition(navigationTreeScrollPane.scrollTop));
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
