import React from "react";
import { connect } from "react-redux";

class SplitPane extends React.Component<{
  children: React.ReactNode[];
  dividerLocation: number;
  setDividerLocation: (dividerLocation: number) => void;
}> {
  pointerdown = (ev: React.PointerEvent) => {
    document.dispatchEvent(
      new CustomEvent("splitpanedividerpointerdown", {
        detail: {
          event: ev,
          callback: this.props.setDividerLocation,
        },
      })
    );
  };
  render = () => {
    return (
      <div className="SplitPane">
        <div
          className="ScrollPane"
          style={{
            width:
              this.props.dividerLocation !== null
                ? this.props.dividerLocation + "px"
                : undefined,
          }}
        >
          {this.props.children[0]}
        </div>
        <div
          style={{
            position: "relative",
            borderInlineStart: "1px solid gray",
          }}
          onPointerDown={this.pointerdown}
        >
          <div
            style={{
              position: "absolute",
              insetInlineStart: "-9px",
              width: "17px",
              height: "100%",
            }}
          ></div>
        </div>
        <div className="ScrollPane">{this.props.children[1]}</div>
      </div>
    );
  };
}

const mapStateToProps = (state: { dividerLocation: number }) => ({
  dividerLocation: state.dividerLocation,
});

const mapDispatchToProps = (
  dispatch: (action: { type: string; payload: any }) => {
    type: string;
    payload: any;
  }
) => ({
  setDividerLocation: (dividerLocation: number) =>
    dispatch({
      type: "SplitPane/setDividerLocation",
      payload: dividerLocation,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SplitPane);
