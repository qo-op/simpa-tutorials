import React from "react";
import Hamburger from "components/Hamburger";
import HomeButton from "components/HomeButton";
import NextPageButton from "components/NextPageButton";
import PreviousPageButton from "components/PreviousPageButton";

const ToolBar = ({
  path,
  mobileView,
  tutorialIndex,
  blank,
}: {
  path: string;
  mobileView: boolean;
  tutorialIndex: number;
  blank: boolean;
}) => {
  return (
    <div
      className="ToolBar BorderLayout"
      style={{
        borderBlockEnd: "1px black solid",
        paddingInline: "16px",
      }}
    >
      <div className="LineStart CenterLayout">
        <Hamburger mobileView={mobileView} path={path} blank={blank} />
      </div>
      <div className="BorderLayout" style={{ marginInlineStart: "16px" }}>
        <div className="LineStart CenterLayout">
          <PreviousPageButton mobileView={mobileView} tutorialIndex={tutorialIndex} />
        </div>
        <div className="CenterLayout">
          <HomeButton />
        </div>
        <div className="LineEnd CenterLayout">
          <NextPageButton mobileView={mobileView} tutorialIndex={tutorialIndex} />
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
