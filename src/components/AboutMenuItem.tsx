import React from "react";
import OptionPane from "components/OptionPane";

class AboutMenuItem extends React.Component {
  pointerUp = () => {
    OptionPane.showMessage("Simpa tutorials");
  };
  render = () => {
    return (
      <li>
        <div className="MenuItem" onPointerUp={this.pointerUp}>
          <span></span>
          <span>About</span>
          <span></span>
        </div>
      </li>
    );
  };
}

export default AboutMenuItem;
