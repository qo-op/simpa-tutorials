import React from "react";
import ModalLayer from "components/ModalLayer";
import CloseIcon from "@mui/icons-material/Close";

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
      <div className="Dialog BorderLayout">
        <div className="PageStart">
          <div className="BorderLayout">
            <span className="BoxLayout" onPointerDown={this.pointerdown}>
              <b>{this.props.title}</b>
            </span>
            <div className="LineEnd">
              <CloseIcon onClick={this.dispose} />
            </div>
          </div>
        </div>
        <div className="BorderLayout" style={{ gap: "5px", padding: "5px" }}>
          <span>{this.props.message}</span>
          <div className="PageEnd">
            <div className="CenterLayout">
              <button onClick={this.dispose}>OK</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default MessageDialog;
