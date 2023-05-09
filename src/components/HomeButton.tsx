import React from "react";
import { Link } from "gatsby";

const HomeButtonStyle = {
  textDecoration: "none",
  color: "black",
  fontSize: "2rem",
};

const HomeButton = () => {
  return (
    <div className="HomeButton CenterLayout">
      <Link to="/" style={HomeButtonStyle}>
        Simpa
      </Link>
    </div>
  );
};

export default HomeButton;
