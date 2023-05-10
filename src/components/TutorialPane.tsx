import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import "./TutorialPane.css";
import tutorials from "app/tutorials";
import { expand } from "features/NavigationTreeSlice";

const TutorialPaneStyle: React.CSSProperties = {
  padding: "8px",
  paddingBlockEnd: "40px",
  textAlign: "justify",
};

const TutorialContentPaneStyle: React.CSSProperties = {
  maxWidth: "768px",
};

const TutorialPane = ({
  path,
  children,
  mobileView,
  tutorialIndex,
}: {
  path: string;
  children: React.ReactNode;
  mobileView: boolean;
  tutorialIndex: number;
}) => {
  const nextPath = useAppSelector((state) => state.nextPath.value);
  const ready = path === nextPath;
  if (ready) {
    if (tutorials[tutorialIndex].folder === "Layouts") {
      const dispatch = useAppDispatch();
      dispatch(expand("Layouts"));
    }
  }
  return (
    <div
      className="TutorialPane BoxLayout"
      data-axis="page-axis"
      style={{
        ...TutorialPaneStyle,
        visibility: mobileView && !ready ? "hidden" : "visible",
      }}
    >
      <div
        className="TutorialContentPaneStyle"
        style={TutorialContentPaneStyle}
      >
        {children}
      </div>
    </div>
  );
};

export default TutorialPane;
