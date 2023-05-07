import React from "react";
import { connect } from "react-redux";
import MediaQuery from "react-responsive";

class Hamburger extends React.Component<{
  hamburgerClosed: boolean;
  toggle: (hamburgerClosed: boolean) => void;
}> {
  render = () => {
    return (
      <div
        className="Hamburger BorderLayout"
        onClick={() => this.props.toggle(this.props.hamburgerClosed)}
      >
        <MediaQuery maxWidth={480}>
          {(matches) =>
            matches ? (
              <span className="material-icons">
                {this.props.hamburgerClosed ? "menu" : "menu_open"}
              </span>
            ) : (
              <span className="material-icons">
                {!this.props.hamburgerClosed ? "menu" : "menu_open"}
              </span>
            )
          }
        </MediaQuery>
      </div>
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
      type: "SplitPane/setDividerLocation",
      payload: hamburgerClosed ? -2 : -1,
    });
    dispatch({
      type: "Hamburger/toggle",
      payload: !hamburgerClosed,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
