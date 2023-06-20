import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  setDividerLocation,
  setScrollTop,
} from "features/ContentSplitPaneSlice";
import { setClosed } from "features/HamburgerButtonSlice";
import React from "react";

const HamburgerButtonStyle: React.CSSProperties = {
  userSelect: "none",
  cursor: "pointer",
  border: "none",
  backgroundColor: "unset",
};

const HamburgerButton = ({ mobileView }: { mobileView: boolean }) => {
  const closed = useAppSelector((state) => state.hamburgerButton.closed);
  const dispatch = useAppDispatch();
  const click = () => {
    dispatch(setDividerLocation(closed ? -2 : -1));
    dispatch(setClosed(!closed));
    const navigationTreeScrollPane: HTMLElement = document.getElementById(
      "navigation-tree-scroll-pane"
    ) as HTMLElement;
    if (navigationTreeScrollPane !== null) {
      dispatch(setScrollTop(navigationTreeScrollPane.scrollTop));
    }
  };
  return (
    <button
      className="HamburgerButton BorderLayout"
      style={HamburgerButtonStyle}
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

export default HamburgerButton;
