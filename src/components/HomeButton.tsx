import React from "react";
import { navigate } from "gatsby";
import { useAppDispatch } from "app/hooks";
import { setNextPath } from "features/NextPathSlice";
import { setDividerLocation } from "features/ContentSplitPaneSlice";
import { setClosed } from "features/HamburgerButtonSlice";
import { setReady } from "features/ReadySlice";

const HomeButtonStyle: React.CSSProperties = {
  userSelect: "none",
  cursor: "pointer",
  border: "none",
  backgroundColor: "unset",
  fontSize: "2rem",
};

const HomeButton = ({ mobileView }: {mobileView: boolean}) => {
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
};
  return (
    <button className="HomeButton" style={HomeButtonStyle} onClick={click}>
      Simpa
    </button>
  );
};

export default HomeButton;
