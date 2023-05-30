import React from "react";
import { navigate } from "gatsby";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { setReady } from "features/ReadySlice";
import { setNextPath } from "features/NextPathSlice";
import {
  setDividerLocation,
  setScrollPosition,
} from "features/ContentSplitPaneSlice";
import { setClosed } from "features/HamburgerButtonSlice";
import tutorials from "app/tutorials";

const PreviousPageButtonStyle: React.CSSProperties = {
  userSelect: "none",
  cursor: "pointer",
  border: "none",
  padding: "0",
  backgroundColor: "unset",
};

const PreviousPageButton = ({
  mobileView,
  tutorialIndex,
}: {
  mobileView: boolean;
  tutorialIndex: number;
}) => {
  const disabled = useAppSelector((state) => state.previousPageButton.disabled);
  const closed = useAppSelector((state) => state.hamburgerButton.closed);
  const dispatch = useAppDispatch();
  const click = () => {
    if (tutorialIndex > 0) {
      const to = tutorials[tutorialIndex - 1].path;
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
      className="PreviousPage BorderLayout"
      style={PreviousPageButtonStyle}
      disabled={disabled}
      onClick={click}
    >
      <ArrowBackIcon fontSize="large" />
    </button>
  );
};

export default PreviousPageButton;
