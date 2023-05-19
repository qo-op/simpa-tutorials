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
    <div className="ScrollPane" data-scrollbar-overlay>
      {children[1]}
    </div>
  ) : mobileView ? (
    <div className="CardLayout">
      <div
        className="ScrollPane"
        data-scrollbar-overlay
        style={{ visibility: dividerLocation === -1 ? "hidden" : "inherit" }}
      >
        {children[0]}
      </div>
      <div
        className="ScrollPane"
        data-scrollbar-overlay
        style={{ visibility: dividerLocation === -1 ? "inherit" : "hidden" }}
      >
        {children[1]}
      </div>
    </div>
  ) : dividerLocation === -2 ? (
    <div className="ScrollPane" data-scrollbar-overlay>
      {children[1]}
    </div>
  ) : (
    <div className="SplitPane">
      <div
        className="ScrollPane"
        data-scrollbar-overlay
        style={{
          width: dividerLocation === -1 ? undefined : dividerLocation + "px",
        }}
      >
        {children[0]}
      </div>
      <ContentSplitPaneDivider />
      <div className="ScrollPane" data-scrollbar-overlay>
        {children[1]}
      </div>
    </div>
  );
};

export default ContentSplitPane;
