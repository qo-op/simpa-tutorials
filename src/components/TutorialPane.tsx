import React from "react";

const TutorialPane = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="TutorialPane BoxLayout" data-axis="page-axis">
      <div>{children}</div>
    </div>
  );
};

export default TutorialPane;
