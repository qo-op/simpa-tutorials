import { useAppDispatch, useAppSelector } from "app/hooks";
import ContentSplitPaneDivider from "components/ContentSplitPaneDivider";
import { setScrollPosition } from "features/ContentSplitPaneSlice";
import React, { useEffect, useRef } from "react";

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
  const scrollPosition = useAppSelector(
    (state) => state.contentSplitPane.scrollPosition
  );
  const scrollRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const handleScroll = () => {
    // dispatch(setScrollPosition(-1));
  };
  useEffect(() => {
    if (scrollRef.current == null) {
      return;
    }
    if (scrollPosition < 0) {
      return;
    }
    scrollRef.current.scrollTop = scrollPosition;
  }, [scrollPosition]);
  if (loading) {
    /*
    return (
      <div
        className="ContentSplitPane ScrollPane"
        data-horizontal-policy="scrollbar-never"
        data-scrollbar-overlay
      >
        {children[1]}
      </div>
    );
    */
    return (
      <div className="ContentSplitPane SplitPane">
        <div
          className="ScrollPane"
          data-scrollbar-overlay
          style={{
            width: "0%",
            borderInlineEnd: ".5px solid Gray",
          }}
          ref={scrollRef}
          onScroll={handleScroll}
          id="navigation-tree-scroll-pane"
        >
          {children[0]}
        </div>
        <ContentSplitPaneDivider />
        <div
          className="ScrollPane"
          data-horizontal-policy="scrollbar-never"
          data-scrollbar-overlay
          style={{ width: "100%", borderInlineStart: ".5px solid Gray" }}
        >
          {children[1]}
        </div>
      </div>
    );
  } else if (mobileView) {
    if (dividerLocation === -1) {
      /*
      return (
        <div
          className="ContentSplitPane ScrollPane"
          data-horizontal-policy="scrollbar-never"
          data-scrollbar-overlay
        >
          {children[1]}
        </div>
      );
      */
      return (
        <div className="ContentSplitPane SplitPane">
          <div
            className="ScrollPane"
            data-scrollbar-overlay
            style={{
              width: "0%",
              borderInlineEnd: ".5px solid Gray",
            }}
            ref={scrollRef}
            onScroll={handleScroll}
            id="navigation-tree-scroll-pane"
          >
            {children[0]}
          </div>
          <ContentSplitPaneDivider />
          <div
            className="ScrollPane"
            data-horizontal-policy="scrollbar-never"
            data-scrollbar-overlay
            style={{ width: "100%", borderInlineStart: ".5px solid Gray" }}
          >
            {children[1]}
          </div>
        </div>
      );
    } else {
      /*
      return (
        <div
          className="ContentSplitPane ScrollPane"
          data-scrollbar-overlay
          ref={scrollRef}
          onScroll={handleScroll}
          id="navigation-tree-scroll-pane"
        >
          {children[0]}
        </div>
      );
      */
      return (
        <div className="ContentSplitPane SplitPane">
          <div
            className="ScrollPane"
            data-scrollbar-overlay
            style={{
              width: "100%",
              borderInlineEnd: ".5px solid Gray",
            }}
            ref={scrollRef}
            onScroll={handleScroll}
            id="navigation-tree-scroll-pane"
          >
            {children[0]}
          </div>
          <ContentSplitPaneDivider />
          <div
            className="ScrollPane"
            data-horizontal-policy="scrollbar-never"
            data-scrollbar-overlay
            style={{ width: "0%", borderInlineStart: ".5px solid Gray" }}
          >
            {children[1]}
          </div>
        </div>
      );
    }
  } else if (dividerLocation === -2) {
    /*
    return (
      <div
        className="ContentSplitPane ScrollPane"
        data-horizontal-policy="scrollbar-never"
        data-scrollbar-overlay
      >
        {children[1]}
      </div>
    );
    */
    return (
      <div className="ContentSplitPane SplitPane">
        <div
          className="ScrollPane"
          data-scrollbar-overlay
          style={{
            width: "0%",
            borderInlineEnd: ".5px solid Gray",
          }}
          ref={scrollRef}
          onScroll={handleScroll}
          id="navigation-tree-scroll-pane"
        >
          {children[0]}
        </div>
        <ContentSplitPaneDivider />
        <div
          className="ScrollPane"
          data-horizontal-policy="scrollbar-never"
          data-scrollbar-overlay
          style={{ width: "100%", borderInlineStart: ".5px solid Gray" }}
        >
          {children[1]}
        </div>
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
          ref={scrollRef}
          onScroll={handleScroll}
          id="navigation-tree-scroll-pane"
        >
          {children[0]}
        </div>
        <ContentSplitPaneDivider />
        <div
          className="ScrollPane"
          data-horizontal-policy="scrollbar-never"
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
