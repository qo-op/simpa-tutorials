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
  if (loading) {
    return (
      <div className="ContentSplitPane ScrollPane" data-scrollbar-overlay>
        {children[1]}
      </div>
    );
  } else if (mobileView) {
    if (dividerLocation === -1) {
      return (
        <div className="ContentSplitPane CardLayout">
          <div
            className="ScrollPane"
            data-scrollbar-overlay
            style={{
              visibility: "hidden",
            }}
          >
            {children[0]}
          </div>
          <div className="ScrollPane" data-scrollbar-overlay>
            {children[1]}
          </div>
        </div>
      );
    } else {
      return (
        <div className="ContentSplitPane CardLayout">
          <div className="ScrollPane" data-scrollbar-overlay>
            {children[0]}
          </div>
          <div
            className="ScrollPane"
            data-scrollbar-overlay
            style={{
              visibility: "hidden",
            }}
          >
            {children[1]}
          </div>
        </div>
      );
    }
  } else if (dividerLocation === -2) {
    return (
      <div className="ContentSplitPane ScrollPane" data-scrollbar-overlay>
        {children[1]}
      </div>
    );
  } else {
    return (
      <div className="ContentSplitPane SplitPane">
        <div
          className="ScrollPane"
          data-scrollbar-overlay
          style={{
            width: dividerLocation === -1 ? undefined : dividerLocation + "%",
            borderInlineEnd: ".5px solid Gray",
          }}
        >
          {children[0]}
        </div>
        <ContentSplitPaneDivider />
        <div
          className="ScrollPane"
          data-scrollbar-overlay
          style={{ borderInlineStart: ".5px solid Gray" }}
        >
          {children[1]}
        </div>
      </div>
    );
  }
};

export default ContentSplitPane;
