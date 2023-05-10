import React from "react";
import { navigate } from "gatsby";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { setNextPath } from "features/NextPathSlice";
import { setDividerLocation } from "features/ContentSplitPaneSlice";
import { setClosed } from "features/HamburgerSlice";
import tutorials from "app/tutorials";

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
      if (mobileView && !closed) {
        dispatch(setNextPath(to));
        dispatch(setDividerLocation(-1));
        dispatch(setClosed(true));
      }
    }
  };
  return (
    <ArrowBackIcon className="PreviousPage" fontSize="large" onClick={click} />
  );
};

export default PreviousPageButton;
