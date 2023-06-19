import Layout from "components/Layout";
import NoteAboutSimpaJS from "components/NoteAboutSimpaJS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const title: string = "How to Use Split Panes with HTML, CSS and JavaScript";
const description: string =
  "Learn how to use split panes with HTML, CSS, and JavaScript to create resizable and interactive areas in your web application. SplitPane is a versatile component that allows you to divide a container into two resizable areas with a draggable divider. This tutorial provides step-by-step instructions on implementing horizontal and vertical split panes, adjusting panel widths, and handling user interactions. Enhance your user interface and provide a seamless experience with split panes.";

const SplitPanePage = ({ path }: PageProps) => {
  return (
    <Layout path={path}>
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
        <code>SplitPane</code> is a component that provides a way to divide a
        container into two resizable areas, with a divider in between. It allows
        the user to interactively resize the two areas by dragging the divider.
      </p>
      <p>
        It is commonly used to create resizable split views, such as a vertical
        or horizontal split pane in an application's user interface.
      </p>
      <p>
        Here's a basic example of using <code>SplitPane</code> to create a
        horizontal split pane:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="SplitPane"
     data-orientation="horizontal-split"
     style="height: 100px;">
  <!-- left container -->
  <div style="width: 50%; min-width: 16px; background-color: Cyan;">
    <button>Left component</button>
  </div>
  <!-- split pane divider-->
  <div class="EmptyDivider">
  </div>
  <!-- right container -->
  <div style="width: 50%; min-width: 16px; background-color: LightGreen;">
    <button>Left component</button>
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
        We then add two containers with no margin, border, or padding, and place
        an <code>EmptyDivider</code> between them.
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
          style={{ width: "50%", minWidth: "16px", backgroundColor: "Cyan" }}
        ></div>
        <div className="EmptyDivider"></div>
        <div
          style={{
            width: "50%",
            minWidth: "16px",
            backgroundColor: "LightGreen",
          }}
        ></div>
      </div>
      <p></p>
      <NoteAboutSimpaJS subject="Simpa JS Components" />
    </Layout>
  );
};

export default SplitPanePage;

export const Head = () => <SEO title={title} description={description} />;
