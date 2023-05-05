import React from "react";

class SplitPane extends React.Component<{ children: React.ReactNode[] }> {
  pointerdown = (ev: React.PointerEvent) => {
    document.dispatchEvent(
      new CustomEvent("splitpanedividerpointerdown", {
        detail: {
          event: ev,
        },
      })
    );
  };
  render = () => {
    return (
      <div className="SplitPane">
        <div className="ScrollPane">{this.props.children[0]}</div>
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
              insetInlineStart: "-6px",
              width: "11px",
              height: "100%",
            }}
          ></div>
        </div>
        <div className="ScrollPane">{this.props.children[1]}</div>
      </div>
    );
  };
}

export default SplitPane;
