import React from "react";
import { Link } from "gatsby";
import HelpMenu from "components/HelpMenu";

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
