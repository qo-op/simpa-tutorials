import React from "react";
import { connect } from "react-redux";
import store from "state/store";

class HamburgerSplitPane extends React.Component<{
  mobileView: boolean;
  children: React.ReactNode[];
  dividerLocation: number;
}> {
  pointerdown = (ev: React.PointerEvent) => {
    document.dispatchEvent(
      new CustomEvent("splitpanedividerpointerdown", {
        detail: {
          event: ev,
          callback: (dividerLocation: number) => {
            store.dispatch({
              type: "HamburgerSplitPane/setDividerLocation",
              payload: dividerLocation,
            });
          },
        },
      })
    );
  };
  render = () => {
    return (
      <>
        {this.props.mobileView ? (
          this.props.dividerLocation === -1 ? (
            <div className="ScrollPane">{this.props.children[1]}</div>
          ) : (
            <div className="ScrollPane">{this.props.children[0]}</div>
          )
        ) : this.props.dividerLocation === -2 ? (
          <div className="ScrollPane">{this.props.children[1]}</div>
        ) : (
          <div className="SplitPane">
            <div
              className="ScrollPane"
              style={{
                width:
                  this.props.dividerLocation === -1
                    ? undefined
                    : this.props.dividerLocation === -2
                    ? "0px"
                    : this.props.dividerLocation + "px",
              }}
            >
              {this.props.children[0]}
            </div>
            <div
              style={{
                position: "relative",
                borderInlineStart:
                  this.props.dividerLocation === -2 ? "none" : "1px solid gray",
              }}
              onPointerDown={this.pointerdown}
            >
              <div
                style={{
                  position: "absolute",
                  insetInlineStart: "-6px",
                  width: "11px",
                  height: "100%",
                }}
              ></div>
            </div>
            <div className="ScrollPane">{this.props.children[1]}</div>
          </div>
        )}
      </>
    );
  };
}

const mapStateToProps = (state: { dividerLocation: number }) => ({
  dividerLocation: state.dividerLocation,
});

export default connect(mapStateToProps)(HamburgerSplitPane);
