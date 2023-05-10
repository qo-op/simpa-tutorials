import React from "react";
import { useAppSelector } from "app/hooks";

const TutorialPane = ({ path, children }: { path: string, children: React.ReactNode }) => {
  const nextPath = useAppSelector((state) => state.nextPath.value);
  return (
    <div className="TutorialPane BoxLayout" data-axis="page-axis" style={{ visibility: path === nextPath ? "visible" : "hidden" }}>
      <div>{children}</div>
    </div>
  );
};

export default TutorialPane;
