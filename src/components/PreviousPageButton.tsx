import React from "react";
import { navigate } from "gatsby";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import tutorials from "app/tutorials";

const PreviousPageButton = ({ path }: { path: string }) => {
  const click = () => {
    let i: number = tutorials.length - 1;
    for (; i >= 0; i--) {
      if (path.endsWith(tutorials[i].path)) {
        break;
      }
    }
    if (i > 0) {
      navigate(tutorials[i - 1].path);
    }
  };
  return (
    <div className="PreviousPage BorderLayout" onClick={click}>
      <ArrowBackIcon fontSize="large" />
    </div>
  );
};

export default PreviousPageButton;
