import React from "react";
import { PageProps } from "gatsby";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Layout from "components/Layout";
import NoteAboutSimpaJS from "components/NoteAboutSimpaJS";
import { SEO } from "components/SEO";

const title: string = "How to Use Split Panes with HTML, CSS and JavaScript";
const description: string = "This tutorial shows how to use split panes (SplitPane) using HTML, CSS and JavaScript.";

const SplitPanePage = ({ path }: PageProps) => {
  return (
    <Layout title={title} path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use Split Panes</span>
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
  <div style="width: 100px; background-color: Cyan;">
  </div>
  <!-- split pane divider border -->
  <div class="SplitPaneDividerBorder">
    <!-- split pane divider-->
    <div class="SplitPaneDivider"></div>
  </div>
  <!-- right component -->
  <div style="background-color: LightGreen;">
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
        We then add two components and a <code>SplitPaneDivider</code> wrapped
        in a <code>SplitPaneDividerBorder</code> between then.
      </p>
      <p>
        The resulting split pane will display the two panels side by side, with
        a divider in between. You can resize the panels by dragging the divider
        to adjust the width of each panel.
      </p>
      <div
        className="SplitPane"
        style={{ height: "100px", paddingInline: "32px" }}
      >
        <div
          style={{
            width: "100px",
            backgroundColor: "Cyan",
          }}
        ></div>
        <div className="SplitPaneDividerBorder">
          <div className="SplitPaneDivider"></div>
        </div>
        <div style={{ backgroundColor: "LightGreen" }}></div>
      </div>
      <p></p>
      <NoteAboutSimpaJS subject="Simpa JS Components" />
    </Layout>
  );
};

export default SplitPanePage;

export const Head = () => <SEO title={title} description={description} />;
