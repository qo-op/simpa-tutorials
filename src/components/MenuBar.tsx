import HelpMenu from "components/HelpMenu";
import React from "react";

class MenuBar extends React.Component {
  render() {
    return (
      <ul className="MenuBar BoxLayout" data-alignment="stretch">
        <HelpMenu />
      </ul>
    );
  }
}

export default MenuBar;
