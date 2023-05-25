import React from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import ContentSplitPaneDivider from "./ContentSplitPaneDivider";
import { setVisible as setResultPaneVisible } from "features/ResultPaneSlice";

const ExampleContentSplitPane = ({
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
  const dispatch = useAppDispatch();
  if (loading) {
    dispatch(setResultPaneVisible(true));
    return (
      <div className="ExampleContentSplitPane BorderLayout">{children[1]}</div>
    );
  } else if (mobileView) {
    if (dividerLocation === -1) {
      dispatch(setResultPaneVisible(true));
      return (
        <div className="ExampleContentSplitPane CardLayout">
          <div
            className="ScrollPane"
            data-scrollbar-overlay
            style={{ visibility: "hidden" }}
          >
            {children[0]}
          </div>
          <div className="BorderLayout" style={{ visibility: "inherit" }}>
            {children[1]}
          </div>
        </div>
      );
    } else {
      return (
        <div className="ExampleContentSplitPane CardLayout">
          <div
            className="ScrollPane"
            data-scrollbar-overlay
            style={{ visibility: "inherit" }}
          >
            {children[0]}
          </div>
          <div className="BorderLayout" style={{ visibility: "hidden" }}>
            {children[1]}
          </div>
        </div>
      );
    }
  } else if (dividerLocation === -2) {
    dispatch(setResultPaneVisible(true));
    return (
      <div className="ExampleContentSplitPane BorderLayout">{children[1]}</div>
    );
  } else {
    dispatch(setResultPaneVisible(true));
    return (
      <div className="ExampleContentSplitPane SplitPane">
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
          className="BorderLayout"
          style={{ borderInlineStart: ".5px solid Gray" }}
        >
          {children[1]}
        </div>
      </div>
    );
  }
};

export default ExampleContentSplitPane;
