import React from "react";
import { navigate } from "gatsby";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { setNextPath } from "features/NextPathSlice";
import { setDividerLocation } from "features/ContentSplitPaneSlice";
import { setClosed } from "features/HamburgerSlice";
import tutorials from "app/tutorials";

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
      if (mobileView && !closed) {
        dispatch(setNextPath(to));
        dispatch(setDividerLocation(-1));
        dispatch(setClosed(true));
      }
    }
  };
  return (
    <ArrowForwardIcon className="NextPage" fontSize="large" onClick={click} />
  );
};

export default NextPageButton;
