import { useAppDispatch, useAppSelector } from "app/hooks";
import ContentSplitPaneDivider from "components/ContentSplitPaneDivider";
import { setScrollTop } from "features/ContentSplitPaneSlice";
import React, { useEffect, useRef, useState } from "react";
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
  const scrollTop = useAppSelector((state) => state.contentSplitPane.scrollTop);
  const [scrollMarginTop, setScrollMarginTop] = useState(scrollTop);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (scrollRef.current === null) {
      return;
    }
    scrollRef.current.scrollTop = -scrollTop;
    setScrollMarginTop(0);
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
          ref={scrollRef}
          id="navigation-tree-scroll-pane"
        >
          <nav>
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
          id="navigation-tree-scroll-pane"
        >
          <nav
            style={
              scrollMarginTop
                ? {
                    scrollMarginTop: -scrollMarginTop,
                    scrollSnapAlign: "start",
                  }
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
