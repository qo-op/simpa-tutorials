import React from "react";
import { useAppDispatch } from "app/hooks";
import { setDividerLocation } from "features/ContentSplitPaneSlice";

const ContentSplitPaneDivider = () => {
  const dispatch = useAppDispatch();
  const pointerdown = (ev: React.PointerEvent) => {
    document.dispatchEvent(
      new CustomEvent("splitpanedividerpointerdown", {
        detail: {
          event: ev,
          callback: (dividerLocation: number) => {
            dispatch(setDividerLocation(dividerLocation));
          },
        },
      })
    );
  };
  return (
    <div className="ContentSplitPaneDivider SplitPaneDividerBorder">
      <div className="SplitPaneDivider" onPointerDown={pointerdown} />
    </div>
  );
};

export default ContentSplitPaneDivider;
