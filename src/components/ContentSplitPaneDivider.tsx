import React from "react";
import { useAppDispatch } from "app/hooks";
import { setDividerLocation } from "features/ContentSplitPaneSlice";

const ContentSplitPaneDividerStyle: React.CSSProperties = {
  position: "relative",
  borderInlineStart: "1px solid Gray",
};

const ContentSplitPaneDividerGlassPaneStyle: React.CSSProperties = {
  position: "absolute",
  insetInlineStart: "-5px",
  width: "9px",
  height: "100%",
};

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
    ev.stopPropagation();
  };
  return (
    <div
      className="ContentSplitPaneDivider"
      style={ContentSplitPaneDividerStyle}
    >
      <div
        className="SplitPaneDivider"
        style={ContentSplitPaneDividerGlassPaneStyle}
        onPointerDown={pointerdown}
        />
    </div>
  );
};

export default ContentSplitPaneDivider;
