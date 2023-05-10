import React from "react";
import { navigate } from "gatsby";
import { useAppDispatch } from "app/hooks";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
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
  const dispatch = useAppDispatch();
  const click = () => {
    if (tutorialIndex > 0) {
      navigate(tutorials[tutorialIndex - 1].path);
      if (mobileView) {
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
