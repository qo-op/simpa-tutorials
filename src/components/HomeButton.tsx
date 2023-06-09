import { useAppDispatch } from "app/hooks";
import {
  setDividerLocation,
  setScrollTop,
} from "features/ContentSplitPaneSlice";
import { setClosed } from "features/HamburgerButtonSlice";
import { setNextPath } from "features/NextPathSlice";
import { setReady } from "features/ReadySlice";
import { setIframeReady } from "features/ResultPaneSlice";
import { navigate } from "gatsby";
import React from "react";

const HomeButtonStyle: React.CSSProperties = {
  userSelect: "none",
  cursor: "pointer",
  border: "none",
  padding: "0",
  backgroundColor: "unset",
  fontSize: "2rem",
};

const HomeButton = ({ mobileView }: { mobileView: boolean }) => {
  const dispatch = useAppDispatch();
  const click = () => {
    const to = "/";
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
      dispatch(setScrollTop(navigationTreeScrollPane.scrollTop));
    }
  };
  return (
    <button className="HomeButton" style={HomeButtonStyle} onClick={click}>
      Simpa
    </button>
  );
};

export default HomeButton;
