import React from "react";
import { navigate } from "gatsby";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { setPreviousPath } from "features/PreviousPathSlice";
import { setClosed } from "features/HamburgerSlice";
import { setDividerLocation } from "features/ContentSplitPaneSlice";

const Hamburger = ({
  path,
  mobileView,
  blank,
}: {
  path: string;
  mobileView: boolean;
  blank: boolean;
}) => {
  const closed = blank ? false : useAppSelector((state) => state.hamburger.closed);
  const previousPath = useAppSelector((state) => state.previousPath.value);
  const dispatch = useAppDispatch();
  const click = () => {
    dispatch(setDividerLocation(closed ? -2 : -1));
    if (mobileView) {
      if (closed) {
        dispatch(setPreviousPath(path));
        navigate("/blank");
      } else {
        navigate(previousPath);
      }
    }
    dispatch(setClosed(!closed));
  };
  return (
    <div className="Hamburger BorderLayout" onClick={click}>
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
    </div>
  );
};

export default Hamburger;
