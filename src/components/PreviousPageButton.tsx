import React from "react";
import { navigate } from "gatsby";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { setNextPath } from "features/NextPathSlice";
import { setDividerLocation } from "features/ContentSplitPaneSlice";
import { setClosed } from "features/HamburgerSlice";
import tutorials from "app/tutorials";
import { Button } from "@mui/material";

const PreviousPageButtonStyle: React.CSSProperties = {
  userSelect: "none",
  cursor: "pointer",
  border: "none",
  backgroundColor: "unset",
};

const PreviousPageButton = ({
  mobileView,
  tutorialIndex,
}: {
  mobileView: boolean;
  tutorialIndex: number;
}) => {
  const closed = useAppSelector((state) => state.hamburger.closed);
  const dispatch = useAppDispatch();
  const click = () => {
    if (tutorialIndex > 0) {
      const to = tutorials[tutorialIndex - 1].path;
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
      className="PreviousPage BorderLayout"
      style={PreviousPageButtonStyle}
      disabled={tutorialIndex === 0}
      onClick={click}
    >
      <ArrowBackIcon fontSize="large" />
    </button>
  );
};

export default PreviousPageButton;
