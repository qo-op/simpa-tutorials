import React from "react";
import { useAppDispatch } from "app/hooks";
import { setDividerLocation } from "features/ContentSplitPaneSlice";

const ContentSplitPaneDivider = () => {
  const dispatch = useAppDispatch();
  const pointerup = (ev: React.PointerEvent) => {
    const splitPaneDivider: HTMLElement = ev.currentTarget as HTMLElement;
    const splitPane: HTMLElement = splitPaneDivider.closest(".SplitPane") as HTMLElement;
    const verticalSplit = splitPane.dataset.orientation === "vertical-split";
    const endAnchor = splitPane.dataset.dividerAnchor === "end";
    let component = splitPane.children[endAnchor ? 2 : 0] as HTMLElement;
    let dividerLocation = verticalSplit ? component.style.height : component.style.width;
    if (dividerLocation) {
      dispatch(setDividerLocation(+dividerLocation.replace("%", "")));
    }
  };
  return (
    <div className="ContentSplitPaneDivider SplitPaneDividerBorder">
      <div className="SplitPaneDivider" onPointerUp={pointerup} />
    </div>
  );
};

export default ContentSplitPaneDivider;
