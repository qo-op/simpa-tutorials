import React from "react";
import MediaQuery from "react-responsive";
import { connect } from "react-redux";
import store from "state/store";

class Hamburger extends React.Component<{
  hamburgerClosed: boolean;
}> {
  toggle = (hamburgerClosed: boolean) => {
    store.dispatch({
      type: "HamburgerSplitPane/setDividerLocation",
      payload: hamburgerClosed ? -2 : -1,
    });
    store.dispatch({
      type: "Hamburger/toggle",
      payload: null,
    });
  }
  render = () => {
    return (
      <MediaQuery maxWidth={480}>
        {(matches: boolean) => (
          <div
            className="Hamburger BorderLayout"
            onClick={() => this.toggle(this.props.hamburgerClosed)}
          >
            <span className="material-icons">
              {this.props.hamburgerClosed
                ? matches
                  ? "menu"
                  : "menu_open"
                : matches
                ? "menu_open"
                : "menu"}
            </span>
          </div>
        )}
      </MediaQuery>
    );
  };
}

const mapStateToProps = (state: { hamburgerClosed: boolean }) => ({
  hamburgerClosed: state.hamburgerClosed,
});

export default connect(mapStateToProps)(Hamburger);
