import React from "react";
import { Link } from "gatsby";

const HomeButtonStyle = {
  textDecoration: "none",
  color: "black",
  fontSize: "2rem",
};

const HomeButton = () => {
  return (
    <Link to="/" className="HomeButton" style={HomeButtonStyle}>
      Simpa
    </Link>
  );
};

export default HomeButton;
