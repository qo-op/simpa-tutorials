import React from "react";

class SplitPane extends React.Component<{ children: React.ReactNode[] }> {
  drag = (ev: React.PointerEvent) => {
    const divider = ev.currentTarget;
    const splitPane: HTMLElement = divider.parentElement as HTMLElement;
    const leftComponent: HTMLElement = splitPane.children[0] as HTMLElement;
    const rightComponent: HTMLElement = splitPane.children[2] as HTMLElement;
    const leftComponentRect: DOMRect = leftComponent.getBoundingClientRect();
    const rightComponentRect: DOMRect = rightComponent.getBoundingClientRect();
    const leftComponentComputedStyle: CSSStyleDeclaration =
      getComputedStyle(leftComponent);
    const rightComponentComputedStyle: CSSStyleDeclaration =
      getComputedStyle(rightComponent);
    const verticalSplit: boolean =
      splitPane.dataset.orientation === "vertical-split";
    const pageEndSplitPane: boolean =
      splitPane.dataset.dividerAnchor === "page-end";
    const lineEndSplitPane: boolean =
      splitPane.dataset.dividerAnchor === "line-end";
    let offset: number = 0;
    let maximumDividerLocation: number = 0;
    if (verticalSplit) {
      if (pageEndSplitPane) {
        offset = ev.clientY + rightComponentRect.height;
      } else {
        offset = ev.clientY - leftComponentRect.height;
      }
      maximumDividerLocation =
        leftComponentRect.height -
        +leftComponentComputedStyle.borderTopWidth.replace("px", "") -
        +leftComponentComputedStyle.borderBottomWidth.replace("px", "");
      maximumDividerLocation +=
        rightComponentRect.height -
        +rightComponentComputedStyle.borderTopWidth.replace("px", "") -
        +rightComponentComputedStyle.borderBottomWidth.replace("px", "");
    } else {
      if (lineEndSplitPane) {
        offset = ev.clientX + rightComponentRect.width;
      } else {
        offset = ev.clientX - leftComponentRect.width;
      }
      maximumDividerLocation =
        leftComponentRect.width -
        +leftComponentComputedStyle.borderLeftWidth.replace("px", "") -
        +leftComponentComputedStyle.borderRightWidth.replace("px", "");
      maximumDividerLocation +=
        rightComponentRect.width -
        +rightComponentComputedStyle.borderLeftWidth.replace("px", "") -
        +rightComponentComputedStyle.borderRightWidth.replace("px", "");
    }
    const dragLayer: HTMLElement = document.createElement("div");
    dragLayer.classList.add("DragLayer");
    if (verticalSplit) {
      dragLayer.style.cursor = "ns-resize";
    } else {
      dragLayer.style.cursor = "ew-resize";
    }
    document.body.appendChild(dragLayer);
    const dragLayerEventListener = {
      pointermove(ev: PointerEvent) {
        if (verticalSplit) {
          if (pageEndSplitPane) {
            const location = Math.min(
              Math.max(offset - ev.clientY, 0),
              maximumDividerLocation
            );
            rightComponent.style.height = location + "px";
          } else {
            const location = Math.min(
              Math.max(ev.clientY - offset, 0),
              maximumDividerLocation
            );
            leftComponent.style.height = location + "px";
          }
        } else {
          if (lineEndSplitPane) {
            const location = Math.min(
              Math.max(offset - ev.clientX, 0),
              maximumDividerLocation
            );
            rightComponent.style.width = location + "px";
          } else {
            const location = Math.min(
              Math.max(ev.clientX - offset, 0),
              maximumDividerLocation
            );
            leftComponent.style.width = location + "px";
          }
        }
      },
      pointerup(ev: PointerEvent) {
        dragLayer.remove();
      },
      pointerleave(ev: PointerEvent) {
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
      <div className="SplitPane">
        <div className="ScrollPane">{this.props.children[0]}</div>
        <div
          style={{
            position: "relative",
            borderInlineStart: "1px solid gray",
          }}
          onPointerDown={this.drag}
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
