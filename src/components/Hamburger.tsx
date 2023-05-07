import React from "react";
import MediaQuery from "react-responsive";
import { connect } from "react-redux";

class Hamburger extends React.Component<{
  hamburgerClosed: boolean;
  toggle: (hamburgerClosed: boolean) => void;
}> {
  render = () => {
    return (
      <MediaQuery maxWidth={480}>
        {(matches: boolean) => (
          <div
            className="Hamburger BorderLayout"
            onClick={() => this.props.toggle(this.props.hamburgerClosed)}
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

const mapDispatchToProps = (
  dispatch: (action: { type: string; payload: any }) => {
    type: string;
    payload: any;
  }
) => ({
  toggle: (hamburgerClosed: boolean) => {
    dispatch({
      type: "HamburgerSplitPane/setDividerLocation",
      payload: hamburgerClosed ? -2 : -1,
    });
    dispatch({
      type: "Hamburger/toggle",
      payload: null,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
