import React from "react";
import AboutMenuItem from "components/AboutMenuItem";

class HelpMenu extends React.Component {
  render() {
    return (
      <li>
        <div className="Menu">
          <span>Help</span>
        </div>
        <ul>
          <AboutMenuItem />
        </ul>
      </li>
    );
  }
}

export default HelpMenu;
