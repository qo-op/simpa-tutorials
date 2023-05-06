import React from "react";
import ModalLayer from "components/ModalLayer";

class MessageDialog extends React.Component<{
  message: string;
  title: string;
}> {
  hide = () => {
    ModalLayer.hide();
  };
  dispose = () => {
    ModalLayer.dispose();
  };
  pointerdown = (ev: React.PointerEvent<HTMLDivElement>) => {
    document.dispatchEvent(
      new CustomEvent("dialogtitlepanepointerdown", {
        detail: {
          event: ev,
        },
      })
    );
  };
  render = () => {
    return (
      <div className="Dialog PageStartBorderLayout">
        <div className="LineEndCenterBorderLayout">
          <span onPointerDown={this.pointerdown}>
            <b>{this.props.title}</b>
          </span>
          <span className="material-icons close" onClick={this.dispose}></span>
        </div>
        <div
          className="PageEndBorderLayout"
          style={{ gap: "5px", padding: "5px" }}
        >
          <span>{this.props.message}</span>
          <div className="CenterLayout">
            <button onClick={this.dispose}>OK</button>
          </div>
        </div>
      </div>
    );
  };
}

export default MessageDialog;
