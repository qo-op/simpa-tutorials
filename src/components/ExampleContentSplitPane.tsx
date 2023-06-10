import { useAppDispatch, useAppSelector } from "app/hooks";
import ContentSplitPaneDivider from "components/ContentSplitPaneDivider";
import {
  setScrollMarginTop,
  setScrollPosition,
} from "features/ContentSplitPaneSlice";
import React, { useEffect, useRef } from "react";
import NavigationTree from "components/NavigationTree";

const ExampleContentSplitPane = ({
  children,
  mobileView,
  tutorialIndex,
}: {
  children: React.ReactNode;
  mobileView: boolean;
  tutorialIndex: number;
}) => {
  const loading = useAppSelector((state) => state.loading.value);
  const dividerLocation = useAppSelector(
    (state) => state.contentSplitPane.dividerLocation
  );
  const scrollPosition = useAppSelector(
    (state) => state.contentSplitPane.scrollPosition
  );
  const scrollMarginTop = useAppSelector(
    (state) => state.contentSplitPane.scrollMarginTop
  );
  const scrollRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const handleScroll = () => {
    // dispatch(setScrollPosition(-1));
  };
  useEffect(() => {
    if (scrollRef.current === null || navRef.current === null) {
      return;
    }
    scrollRef.current.scrollTop = -scrollMarginTop;
    dispatch(setScrollMarginTop(0));
  }, []);
  if (loading) {
    return (
      <div className="ExampleContentSplitPane BorderLayout">{children}</div>
    );
  } else if (mobileView) {
    if (dividerLocation === -1) {
      return (
        <div className="ExampleContentSplitPane BorderLayout">{children}</div>
      );
    } else {
      return (
        <div
          className="ExampleContentSplitPane ScrollPane"
          data-scrollbar-overlay
          style={scrollMarginTop ? { scrollSnapType: "y mandatory" } : {}}
          ref={scrollRef}
          onScroll={handleScroll}
          id="navigation-tree-scroll-pane"
        >
          <nav
            ref={navRef}
            style={
              scrollMarginTop
                ? { scrollMarginTop: scrollMarginTop, scrollSnapAlign: "start" }
                : {}
            }
          >
            <NavigationTree
              mobileView={mobileView}
              tutorialIndex={tutorialIndex}
            />
          </nav>
        </div>
      );
    }
  } else if (dividerLocation === -2) {
    return (
      <div className="ExampleContentSplitPane BorderLayout">{children}</div>
    );
  } else {
    return (
      <div className="ExampleContentSplitPane SplitPane">
        <div
          className="ScrollPane"
          data-scrollbar-overlay
          style={Object.assign(
            {
              width: dividerLocation === -1 ? undefined : dividerLocation + "%",
              borderInlineEnd: ".5px solid Gray",
            },
            scrollMarginTop ? { scrollSnapType: "y mandatory" } : {}
          )}
          ref={scrollRef}
          onScroll={handleScroll}
          id="navigation-tree-scroll-pane"
        >
          <nav
            ref={navRef}
            style={
              scrollMarginTop
                ? { scrollMarginTop: scrollMarginTop, scrollSnapAlign: "start" }
                : {}
            }
          >
            <NavigationTree
              mobileView={mobileView}
              tutorialIndex={tutorialIndex}
            />
          </nav>
        </div>
        <ContentSplitPaneDivider />
        <div
          className="BorderLayout"
          style={{ borderInlineStart: ".5px solid Gray" }}
        >
          {children}
        </div>
      </div>
    );
  }
};

export default ExampleContentSplitPane;
