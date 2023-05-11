import React from "react";
import { useAppSelector } from "app/hooks";
import ContentSplitPaneDivider from "./ContentSplitPaneDivider";

const ContentSplitPane = ({
  children,
  mobileView,
}: {
  children: React.ReactNode[];
  mobileView: boolean;
}) => {
  const loading = useAppSelector((state) => state.loading.value);
  const dividerLocation = useAppSelector(
    (state) => state.contentSplitPane.dividerLocation
  );
  return loading ? (
    <div className="ScrollPane">{children[1]}</div>
  ) : mobileView ? (
    dividerLocation === -1 ? (
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
      <ContentSplitPaneDivider />
      <div className="ScrollPane">{children[1]}</div>
    </div>
  );
};

export default ContentSplitPane;
