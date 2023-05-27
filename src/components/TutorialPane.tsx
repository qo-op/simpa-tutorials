import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { setReady } from "features/ReadySlice";
import { expand } from "features/NavigationTreeSlice";
import { setDisabled as setPreviousPageButtonDisabled } from "features/PreviousPageButtonSlice";
import { setDisabled as setNextPageButtonDisabled } from "features/NextPageButtonSlice";
import tutorials from "app/tutorials";
import "./TutorialPane.css";

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
  let ready = useAppSelector((state) => state.ready.value);
  ready = ready || path === nextPath;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (ready) {
      dispatch(setReady(true));
      dispatch(setPreviousPageButtonDisabled(tutorialIndex === 0));
      dispatch(
        setNextPageButtonDisabled(tutorialIndex === tutorials.length - 1)
      );
      if (path === nextPath) {
        dispatch(expand(tutorials[tutorialIndex].folder));
      }
    }
  });
  return (
    <div
      className="TutorialPane BoxLayout"
      data-axis="page-axis"
      style={{
        visibility: mobileView && !ready ? "hidden" : "inherit",
      }}
    >
      <div className="TutorialContentPane">{children}</div>
    </div>
  );
};

export default TutorialPane;
