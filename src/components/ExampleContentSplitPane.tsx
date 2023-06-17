import { useAppSelector } from "app/hooks";
import ContentSplitPaneDivider from "components/ContentSplitPaneDivider";
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
  useEffect(() => {
    if (scrollRef.current === null) {
      return;
    }
    scrollRef.current.scrollTop = scrollTop;
    setScrollMarginTop(0);
  }, []);
  if (loading) {
    return (
      <div className="ExampleContentSplitPane SplitPane">
        <div
          className="ScrollPane"
          data-overlay
          style={{ width: "0%" }}
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
        <ContentSplitPaneDivider draggable={false} />
        <div className="BorderLayout" style={{ width: "100%" }}>
          {children}
        </div>
      </div>
    );
  } else if (mobileView) {
    if (dividerLocation === -1) {
      return (
        <div className="ExampleContentSplitPane SplitPane">
          <div
            className="ScrollPane"
            data-overlay
            style={{ width: "0%" }}
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
          <ContentSplitPaneDivider draggable={false} />
          <div className="BorderLayout" style={{ width: "100%" }}>
            {children}
          </div>
        </div>
      );
    } else {
      return (
        <div className="ExampleContentSplitPane SplitPane">
          <div
            className="ScrollPane"
            data-overlay
            style={{ width: "100%" }}
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
          <ContentSplitPaneDivider draggable={false} />
          <div className="BorderLayout" style={{ width: "0%" }}>
            {children}
          </div>
        </div>
      );
    }
  } else if (dividerLocation === -2) {
    return (
      <div className="ExampleContentSplitPane SplitPane">
        <div
          className="ScrollPane"
          data-overlay
          style={{ width: "0%" }}
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
        <ContentSplitPaneDivider draggable={false} />
        <div className="BorderLayout" style={{ width: "100%" }}>
          {children}
        </div>
      </div>
    );
  } else {
    return (
      <div className="ExampleContentSplitPane SplitPane">
        <div
          className="ScrollPane"
          data-overlay
          style={Object.assign(
            {
              width: dividerLocation === -1 ? undefined : dividerLocation + "%",
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
        <ContentSplitPaneDivider draggable={true} />
        <div
          className="BorderLayout"
          style={{
            width:
              dividerLocation === -1 ? undefined : 100 - dividerLocation + "%",
          }}
        >
          {children}
        </div>
      </div>
    );
  }
};

export default ExampleContentSplitPane;
