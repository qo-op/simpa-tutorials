import React from "react";
import { navigate } from "gatsby";
import TutorialPage from "model/TutorialPage";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

class NextPage extends React.Component<{
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
    if (i < this.props.tutorialPages.length - 1) {
      navigate(this.props.tutorialPages[i + 1].path);
    }
  };
  render = () => {
    return (
      <>
        <div className="NextPage BorderLayout">
          <ArrowForwardIcon fontSize="large" onClick={this.click} />
        </div>
      </>
    );
  };
}

export default NextPage;
