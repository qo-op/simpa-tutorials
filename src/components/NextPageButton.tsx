import React from "react";
import { navigate } from "gatsby";
import { useAppDispatch } from "app/hooks";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
  const dispatch = useAppDispatch();
  const click = () => {
    if (tutorialIndex < tutorials.length - 1) {
      navigate(tutorials[tutorialIndex + 1].path);
      if (mobileView) {
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
