import CopyToClipboardSyntaxHighlighter from "components/CopyToClipboardSyntaxHighlighter";
import Layout from "components/Layout";
import NoteAboutSimpaJS from "components/NoteAboutSimpaJS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

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
        A SplitPane is a component that allows you to divide a container into
        two resizable areas with a draggable divider. It is commonly used to
        create resizable split views, such as vertical or horizontal split panes
        in a user interface.
      </p>
      <p>
        Here's a basic example of using SplitPane to create a horizontal split
        pane:
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
  <script src="https://qo-op.github.io/simpa/simpa.js">
  </script>
</head>
<body class="Frame"
      id="split-pane-demo">
  <!-- Container with SplitPane -->
  <div class="SplitPane"
       data-orientation="horizontal-split">
    <!-- Left Container -->
    <div style="width: 100px; background-color: blue;">
    </div>
    <!-- Divider -->
    <div></div>
    <!-- Right Container -->
    <div style="background-color: green;">
    </div>
  </div>
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In the above example, we create a &lt;div&gt; container with the class
        "SplitPane" and set the data-orientation attribute to "horizontal-split"
        to configure it as a horizontal split pane.
      </p>
      <p>
        Inside the split pane, we have a left container, a divider, and a right
        container. The left and right containers contain buttons.
      </p>
      <p>
        When you run this code, you will see two buttons positioned next to each
        other, with the draggable divider in the middle. You can adjust the
        width of the containers and resize the buttons by dragging the divider.
      </p>
      <div className="SplitPane" style={{ height: "100px" }}>
        <div style={{ width: "100px", backgroundColor: "blue" }}></div>
        <div></div>
        <div style={{ backgroundColor: "green" }}></div>
      </div>
      <p></p>
      <NoteAboutSimpaJS subject="Simpa JS Components" />
    </Layout>
  );
};

export default SplitPanePage;

export const Head = () => <SEO title={title} description={description} />;
