import React from "react";
import { navigate } from "gatsby";
import TutorialPage from "model/TutorialPage";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

class NextPage extends React.Component<{
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
    if (i < this.props.tutorialPages.length - 1) {
      navigate(this.props.tutorialPages[i + 1].path);
    }
  };
  render = () => {
    return (
      <div className="NextPage BorderLayout" onClick={this.click}>
        <ArrowForwardIcon fontSize="large" />
      </div>
    );
  };
}

export default NextPage;
