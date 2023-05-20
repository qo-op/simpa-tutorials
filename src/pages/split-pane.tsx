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
      <p>
        <code>SplitPane</code> is a component in Java Swing that provides a way
        to divide a container into two resizable areas, with a divider in
        between. It allows the user to interactively resize the two areas by
        dragging the divider.
      </p>
      <p>
        It is commonly used to create resizable split views, such as a vertical
        or horizontal split pane in an application's user interface.
      </p>
      <p>
        Here's a basic example of using JSplitPane to create a horizontal split
        pane:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="SplitPane"
     data-orientation="horizontal-split"
     style="height: 100px;">
  <!-- left component -->
  <div class="ScrollPane"
       style=" background-color: Cyan;">
    <div style="text-align: center;">
      <p>Left content.</p>
    </div>
  </div>
  <!-- split pane divider border -->
  <div class="SplitPaneDividerBorder">
    <!-- split pane divider-->
    <div class="SplitPaneDivider"></div>
  </div>
  <!-- right component -->
  <div class="ScrollPane"
       style=" background-color: LightGreen;">
    <div style="text-align: center;">
      <p>Right content.</p>
    </div>
  </div>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        In the example above, we create a <code>div</code> container and assign
        it the class <code>SplitPane</code>. Then, we set the{" "}
        <code>data-orientation</code> attribute of the container to indicate a
        horizontal split.
      </p>
      <p>
        We then add two components wrapped in a <code>ScrollPane</code> and a{" "}
        <code>SplitPaneDivider</code> wrapped in a{" "}
        <code>SplitPaneDividerBorder</code> between then.
      </p>
      <p>
        The resulting split pane will display the two panels side by side, with
        a divider in between. You can resize the panels by dragging the divider
        to adjust the width of each panel.
      </p>
      <div className="SplitPane" style={{ height: "100px" }}>
        <div className="ScrollPane" style={{ backgroundColor: "Cyan" }}>
          <div style={{ textAlign: "center" }}>
            <p>Left content.</p>
          </div>
        </div>
        <div className="SplitPaneDividerBorder">
          <div className="SplitPaneDivider"></div>
        </div>
        <div className="ScrollPane" style={{ backgroundColor: "LightGreen" }}>
          <div style={{ textAlign: "center" }}>
            <p>Right content.</p>
          </div>
        </div>
      </div>
      <p></p>

      <NoteAboutSimpaJS subject="Simpa JS Components" />
    </Layout>
  );
};

export default SplitPanePage;
