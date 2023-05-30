import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import ContentSplitPaneDivider from "components/ContentSplitPaneDivider";
import { setScrollPosition } from "features/ContentSplitPaneSlice";

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
  const scrollPosition = useAppSelector(
    (state) => state.contentSplitPane.scrollPosition
  );
  const scrollRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const handleScroll = (ev: React.UIEvent<HTMLDivElement>) => {
    dispatch(setScrollPosition(ev.currentTarget.scrollTop));
  };
  useEffect(() => {
    if (scrollRef.current == null) {
      return;
    }
    scrollRef.current.scrollTop = scrollPosition;
  });
  if (loading) {
    return (
      <div className="ExampleContentSplitPane BorderLayout">{children[1]}</div>
    );
  } else if (mobileView) {
    if (dividerLocation === -1) {
      return (
        <div className="ExampleContentSplitPane BorderLayout">
          {children[1]}
        </div>
      );
    } else {
      return (
        <div
          className="ExampleContentSplitPane ScrollPane"
          data-scrollbar-overlay
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {children[0]}
        </div>
      );
    }
  } else if (dividerLocation === -2) {
    return (
      <div className="ExampleContentSplitPane BorderLayout">{children[1]}</div>
    );
  } else {
    return (
      <div className="ExampleContentSplitPane SplitPane">
        <div
          className="ScrollPane"
          data-scrollbar-overlay
          style={{
            width: dividerLocation === -1 ? undefined : dividerLocation + "%",
            borderInlineEnd: ".5px solid Gray",
          }}
          ref={scrollRef}
          onScroll={handleScroll}
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
