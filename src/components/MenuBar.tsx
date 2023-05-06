import React from "react";
import { Link } from "gatsby";
import HelpMenu from "components/HelpMenu";

class MenuBar extends React.Component {
  render() {
    return (
      <ul className="MenuBar BoxLayout" data-alignment="stretch">
        <li>
          <Link to="/" className="Menu">
            <span>Simpa Tutorials</span>
          </Link>
        </li>
        <HelpMenu />
      </ul>
    );
  }
}

export default MenuBar;
