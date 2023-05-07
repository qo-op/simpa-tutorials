import React from "react";
import { navigate } from "gatsby";
import { connect } from "react-redux";
import store from "state/store";

class Hamburger extends React.Component<{
  mobileView: boolean;
  hamburgerClosed: boolean;
}> {
  toggle = (hamburgerClosed: boolean, mobileView: boolean) => {
    store.dispatch({
      type: "HamburgerSplitPane/setDividerLocation",
      payload: hamburgerClosed ? -2 : -1,
    });
    store.dispatch({
      type: "Hamburger/toggle",
      payload: null,
    });
    if (mobileView) {
      if (hamburgerClosed) {
        navigate("/blank");
      }
    }
  };
  render = () => {
    return (
      <div
        className="Hamburger BorderLayout"
        onClick={() => this.toggle(this.props.hamburgerClosed, this.props.mobileView)}
      >
        <span className="material-icons">
          {this.props.hamburgerClosed
            ? this.props.mobileView
              ? "menu"
              : "menu_open"
            : this.props.mobileView
            ? "menu_open"
            : "menu"}
        </span>
      </div>
    );
  };
}

const mapStateToProps = (state: { hamburgerClosed: boolean }) => ({
  hamburgerClosed: state.hamburgerClosed,
});

export default connect(mapStateToProps)(Hamburger);
