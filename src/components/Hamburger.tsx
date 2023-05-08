import React from "react";
import { navigate } from "gatsby";
import { connect } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
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
      } else {
        navigate(-1);
      }
    }
  };
  render = () => {
    return (
      <div
        className="Hamburger BorderLayout"
        onClick={() =>
          this.toggle(this.props.hamburgerClosed, this.props.mobileView)
        }
      >
        {this.props.hamburgerClosed ? (
          this.props.mobileView ? (
            <MenuIcon fontSize="large" />
          ) : (
            <MenuOpenIcon fontSize="large" />
          )
        ) : this.props.mobileView ? (
          <MenuOpenIcon fontSize="large" />
        ) : (
          <MenuIcon fontSize="large" />
        )}
      </div>
    );
  };
}

const mapStateToProps = (state: { hamburgerClosed: boolean }) => ({
  hamburgerClosed: state.hamburgerClosed,
});

export default connect(mapStateToProps)(Hamburger);
