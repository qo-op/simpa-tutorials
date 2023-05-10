import React from "react";
import { navigate } from "gatsby";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { setNextPath } from "features/NextPathSlice";
import { setDividerLocation } from "features/ContentSplitPaneSlice";
import { setClosed } from "features/HamburgerSlice";
import tutorials from "app/tutorials";

const NextPageButtonStyle: React.CSSProperties = {
  userSelect: "none",
  cursor: "pointer",
  border: "none",
  backgroundColor: "unset",
};

const NextPageButton = ({
  mobileView,
  tutorialIndex,
}: {
  mobileView: boolean;
  tutorialIndex: number;
}) => {
  const closed = useAppSelector((state) => state.hamburger.closed);
  const dispatch = useAppDispatch();
  const click = () => {
    if (tutorialIndex < tutorials.length - 1) {
      const to = tutorials[tutorialIndex + 1].path;
      navigate(to);
      dispatch(setNextPath(to));
      if (mobileView && !closed) {
        dispatch(setDividerLocation(-1));
        dispatch(setClosed(true));
      }
    }
  };
  return (
    <button
      className="NextPage BorderLayout"
      style={NextPageButtonStyle}
      disabled={tutorialIndex === tutorials.length - 1}
      onClick={click}
    >
      <ArrowForwardIcon fontSize="large" />
    </button>
  );
};

export default NextPageButton;
