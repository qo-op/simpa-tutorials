import React from "react";
import { navigate } from "gatsby";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { setDividerLocation } from "features/ContentSplitPaneSlice";
import { toggle } from "features/HamburgerSlice";

const Hamburger = ({ mobileView }: { mobileView: boolean }) => {
  let closed = useAppSelector((state) => state.hamburger.closed);
  const dispatch = useAppDispatch();
  const click = () => {
    dispatch(setDividerLocation(closed ? -2 : -1));
    dispatch(toggle());
    if (mobileView) {
      if (closed) {
        navigate("/blank");
      } else {
        navigate(-1);
      }
    }
  };
  return (
    <div className="Hamburger BorderLayout" onClick={() => click()}>
      {closed ? (
        mobileView ? (
          <MenuIcon fontSize="large" />
        ) : (
          <MenuOpenIcon fontSize="large" />
        )
      ) : mobileView ? (
        <MenuOpenIcon fontSize="large" />
      ) : (
        <MenuIcon fontSize="large" />
      )}
    </div>
  );
};

export default Hamburger;
