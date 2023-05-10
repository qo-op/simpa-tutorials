import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { setDividerLocation } from "features/ContentSplitPaneSlice";
import { setClosed } from "features/HamburgerSlice";

const HamburgerStyle: React.CSSProperties = {
  userSelect: "none",
  cursor: "pointer",
  border: "none",
  backgroundColor: "unset",
};

const Hamburger = ({ mobileView }: { mobileView: boolean }) => {
  const closed = useAppSelector((state) => state.hamburger.closed);
  const dispatch = useAppDispatch();
  const click = () => {
    dispatch(setDividerLocation(closed ? -2 : -1));
    dispatch(setClosed(!closed));
  };
  return (
    <button
      className="Hamburger BorderLayout"
      style={HamburgerStyle}
      onClick={click}
    >
      {mobileView ? (
        closed ? (
          <MenuIcon fontSize="large" />
        ) : (
          <MenuOpenIcon fontSize="large" />
        )
      ) : closed ? (
        <MenuOpenIcon fontSize="large" />
      ) : (
        <MenuIcon fontSize="large" />
      )}
    </button>
  );
};

export default Hamburger;
