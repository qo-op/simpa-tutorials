import React from "react";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { setDividerLocation } from "features/ContentSplitPaneSlice";

const ContentSplitPane = ({
  children,
  mobileView,
  blank,
}: {
  children: React.ReactNode[];
  mobileView: boolean;
  blank: boolean;
}) => {
  const dividerLocation = useAppSelector(
    (state) => state.contentSplitPane.dividerLocation
  );
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
  return mobileView ? (
    dividerLocation === -1 && !blank ? (
      <div className="ScrollPane">{children[1]}</div>
    ) : (
      <div className="ScrollPane">{children[0]}</div>
    )
  ) : dividerLocation === -2 ? (
    <div className="ScrollPane">{children[1]}</div>
  ) : (
    <div className="SplitPane">
      <div
        className="ScrollPane"
        style={{
          width: dividerLocation === -1 ? undefined : dividerLocation + "px",
        }}
      >
        {children[0]}
      </div>
      <div
        style={{
          position: "relative",
          borderInlineStart: "1px solid gray",
        }}
        onPointerDown={pointerdown}
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
      <div className="ScrollPane">{children[1]}</div>
    </div>
  );
};

export default ContentSplitPane;
