import React from "react";
import { navigate } from "gatsby";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import tutorials from "app/tutorials";

const NextPageButton = ({ path }: { path: string }) => {
  const click = () => {
    let i: number = tutorials.length - 1;
    for (; i >= 0; i--) {
      if (path.endsWith(tutorials[i].path)) {
        break;
      }
    }
    if (i < tutorials.length - 1) {
      navigate(tutorials[i + 1].path);
    }
  };
  return (
    <div className="NextPage BorderLayout" onClick={click}>
      <ArrowForwardIcon fontSize="large" />
    </div>
  );
};

export default NextPageButton;
