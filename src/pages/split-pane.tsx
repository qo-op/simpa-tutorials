import React from "react";
import { PageProps } from "gatsby";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Layout from "components/Layout";
import NoteAboutSimpaJS from "components/NoteAboutSimpaJS";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import SaveIcon from "@mui/icons-material/Save";
import Logout from "@mui/icons-material/Logout";
import FileOpen from "@mui/icons-material/FileOpen";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const SplitPanePage = ({ path }: PageProps) => {
  return (
    <Layout
      pageTitle={"How to Use SplitPane with HTML, CSS and JavaScript"}
      path={path}
    >
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use SplitPane</span>
        <span>with HTML, CSS</span>
        <span>and JavaScript</span>
      </h1>
      <NoteAboutSimpaJS subject="Simpa JS Components" />
    </Layout>
  );
};

export default SplitPanePage;
