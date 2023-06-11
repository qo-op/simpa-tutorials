import { useAppDispatch, useAppSelector } from "app/hooks";
import ContentSplitPaneDivider from "components/ContentSplitPaneDivider";
import { setScrollTop } from "features/ContentSplitPaneSlice";
import React, { useEffect, useRef, useState } from "react";
import NavigationTree from "components/NavigationTree";

const ContentSplitPane = ({
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
          id="navigation-tree-scroll-pane"
        >
          <nav>
            <NavigationTree
              mobileView={mobileView}
              tutorialIndex={tutorialIndex}
            />
          </nav>
        </div>
        <ContentSplitPaneDivider />
        <div
          className="ScrollPane"
          data-horizontal-policy="scrollbar-never"
          data-scrollbar-overlay
          style={{ width: "100%", borderInlineStart: ".5px solid Gray" }}
        >
          {children}
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
            id="navigation-tree-scroll-pane"
          >
            <nav>
              <NavigationTree
                mobileView={mobileView}
                tutorialIndex={tutorialIndex}
              />
            </nav>
          </div>
          <ContentSplitPaneDivider />
          <div
            className="ScrollPane"
            data-horizontal-policy="scrollbar-never"
            data-scrollbar-overlay
            style={{ width: "100%", borderInlineStart: ".5px solid Gray" }}
          >
            {children}
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
            id="navigation-tree-scroll-pane"
          >
            <nav>
              <NavigationTree
                mobileView={mobileView}
                tutorialIndex={tutorialIndex}
              />
            </nav>
          </div>
          <ContentSplitPaneDivider />
          <div
            className="ScrollPane"
            data-horizontal-policy="scrollbar-never"
            data-scrollbar-overlay
            style={{ width: "0%", borderInlineStart: ".5px solid Gray" }}
          >
            {children}
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
          id="navigation-tree-scroll-pane"
        >
          <nav>
            <NavigationTree
              mobileView={mobileView}
              tutorialIndex={tutorialIndex}
            />
          </nav>
        </div>
        <ContentSplitPaneDivider />
        <div
          className="ScrollPane"
          data-horizontal-policy="scrollbar-never"
          data-scrollbar-overlay
          style={{ width: "100%", borderInlineStart: ".5px solid Gray" }}
        >
          {children}
        </div>
      </div>
    );
  } else {
    return (
      <div className="ContentSplitPane SplitPane">
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
          className="ScrollPane"
          data-horizontal-policy="scrollbar-never"
          data-scrollbar-overlay
          style={{ borderInlineStart: ".5px solid Gray" }}
        >
          {children}
        </div>
      </div>
    );
  }
};

export default ContentSplitPane;
