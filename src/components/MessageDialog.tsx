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
  move = (ev: React.PointerEvent<HTMLDivElement>) => {
    const target: HTMLElement = ev.target as HTMLElement;
    const dialog: HTMLElement = ev.currentTarget as HTMLElement;
    const dialogTopPane: HTMLElement = dialog.firstElementChild as HTMLElement;
    if (!dialogTopPane.contains(target) || target.onclick) {
      return;
    }
    var rect = dialog.getBoundingClientRect();
    let x = ev.clientX - rect.left;
    let y = ev.clientY - rect.top;
    const dragLayer = document.createElement("div");
    document.body.appendChild(dragLayer);
    dragLayer.classList.add("DragLayer");
    const dragLayerEventListener = {
      pointermove(ev: MouseEvent) {
        dialog.style.left = ev.clientX - x + "px";
        dialog.style.top = ev.clientY - y + "px";
      },
      pointerup(ev: MouseEvent) {
        dragLayer.remove();
      },
      pointerleave(ev: MouseEvent) {
        dragLayer.remove();
      },
    };
    dragLayer.addEventListener(
      "pointermove",
      dragLayerEventListener.pointermove
    );
    dragLayer.addEventListener("pointerup", dragLayerEventListener.pointerup);
    dragLayer.addEventListener(
      "pointerleave",
      dragLayerEventListener.pointerleave
    );
  };
  render = () => {
    return (
      <div
        className="MessageDialog Dialog PageStartBorderLayout"
        onPointerDown={this.move}
      >
        <div className="LineEndBorderLayout" style={{ alignItems: "center" }}>
          <span>
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
