import React from "react";
import { useAppDispatch } from "app/hooks";
import { setDividerLocation } from "features/ContentSplitPaneSlice";

const ContentSplitPaneDividerStyle: React.CSSProperties = {
  position: "relative",
};

const ContentSplitPaneDividerGlassPaneStyle: React.CSSProperties = {
  position: "absolute",
  insetInlineStart: "-4px",
  width: "8px",
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
  };
  return (
    <div
      className="ContentSplitPaneDivider"
      style={ContentSplitPaneDividerStyle}
      onPointerDown={pointerdown}
    >
      <div
        className="ContentSplitPaneDividerGlassPane"
        style={ContentSplitPaneDividerGlassPaneStyle}
      />
    </div>
  );
};

export default ContentSplitPaneDivider;
