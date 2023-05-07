import React from "react";
import { connect } from "react-redux";
import MediaQuery from "react-responsive";

class MainSplitPane extends React.Component<{
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
    console.log(this.props.dividerLocation);
    return (
      <MediaQuery maxWidth={480}>
        {(matches: boolean) => (
          <>
            {matches ? (
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
                      this.props.dividerLocation === -2
                        ? "none"
                        : "1px solid gray",
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
        )}
      </MediaQuery>
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
      type: "HamburgerSplitPane/setDividerLocation",
      payload: dividerLocation,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSplitPane);
