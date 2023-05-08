import React from "react";
import { navigate } from "gatsby";
import TutorialPage from "model/TutorialPage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

class PreviousPageButton extends React.Component<{
  tutorialPages: TutorialPage[];
  pathname: string;
}> {
  click = () => {
    let i: number = this.props.tutorialPages.length - 1;
    for (; i >= 0; i--) {
      if (this.props.pathname.endsWith(this.props.tutorialPages[i].path)) {
        break;
      }
    }
    if (i > 0) {
      navigate(this.props.tutorialPages[i - 1].path);
    }
  };
  render = () => {
    return (
      <div className="PreviousPage BorderLayout" onClick={this.click}>
        <ArrowBackIcon fontSize="large" />
      </div>
    );
  };
}

export default PreviousPageButton;
