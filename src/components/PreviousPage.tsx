import React from "react";
import { navigate } from "gatsby";
import TutorialPage from "model/TutorialPage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

class PreviousPage extends React.Component<{
  tutorialPages: TutorialPage[];
  pathname: string;
}> {
  click = () => {
    let i: number = 0;
    for (; i < this.props.tutorialPages.length; i++) {
      if (this.props.tutorialPages[i].path === this.props.pathname) {
        break;
      }
    }
    if (i > 0) {
      navigate(this.props.tutorialPages[i - 1].path);
    }
  };
  render = () => {
    return (
      <div className="PreviousPage BorderLayout">
        <ArrowBackIcon fontSize="large" onClick={this.click} />
      </div>
    );
  };
}

export default PreviousPage;
