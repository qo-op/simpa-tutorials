import React, { useRef } from "react";
import { useAppSelector } from "app/hooks";
import ContentSplitPaneDivider from "./ContentSplitPaneDivider";

const ContentSplitPane = ({
  children,
  mobileView,
}: {
  children: React.ReactNode[];
  mobileView: boolean;
}) => {
  const ref = useRef(null);
  const loading = useAppSelector((state) => state.loading.value);
  const dividerLocation = useAppSelector(
    (state) => state.contentSplitPane.dividerLocation
  );
  return (
    <div className="SplitPane" ref={ref}>
      <div
        className="BorderLayout"
        style={{
          overflow: "hidden",
          width: loading
            ? "0"
            : mobileView
            ? dividerLocation === -1
              ? "0"
              : ref.current !== null
              ? (ref.current as HTMLElement).clientWidth + "px"
              : undefined
            : dividerLocation === -2
            ? "0"
            : dividerLocation === -1
            ? undefined
            : dividerLocation + "px",
        }}
      >
        <div
          className="ScrollPane"
          style={{
            borderInlineEnd: mobileView ? undefined : "1px solid black",
          }}
        >
          {children[0]}
        </div>
      </div>
      <ContentSplitPaneDivider />
      <div className="ScrollPane">{children[1]}</div>
    </div>
  );
};

export default ContentSplitPane;
