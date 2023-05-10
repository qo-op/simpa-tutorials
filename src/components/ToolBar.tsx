import React from "react";
import Hamburger from "components/Hamburger";
import HomeButton from "components/HomeButton";
import NextPageButton from "components/NextPageButton";
import PreviousPageButton from "components/PreviousPageButton";

const ToolBarStyle: React.CSSProperties = {
  borderBlockEnd: "1px black solid",
  paddingInline: "16px",
};

const ToolBar = ({
  mobileView,
  tutorialIndex,
}: {
  mobileView: boolean;
  tutorialIndex: number;
}) => {
  return (
    <div className="ToolBar BorderLayout" style={ToolBarStyle}>
      <div className="LineStart CenterLayout">
        <Hamburger mobileView={mobileView} />
      </div>
      <div className="BorderLayout" style={{ marginInlineStart: "16px" }}>
        <div className="LineStart CenterLayout">
          <PreviousPageButton
            mobileView={mobileView}
            tutorialIndex={tutorialIndex}
          />
        </div>
        <div className="CenterLayout">
          <HomeButton />
        </div>
        <div className="LineEnd CenterLayout">
          <NextPageButton
            mobileView={mobileView}
            tutorialIndex={tutorialIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
