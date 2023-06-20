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
          {`<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://qo-op.github.io/simpa/simpa.css" />
    <script src="https://qo-op.github.io/simpa/simpa.js"></script>
  </head>
  <body class="Frame" id="split-pane-demo">
    <!-- split pane -->
    <div class="SplitPane"
         data-orientation="horizontal-split">
      <!-- left container -->
      <div>
        <button>Left Button</button>
      </div>
      <!-- divider -->
      <div></div>
      <!-- right container -->
      <div>
        <button>Right Button</button>
      </div>
    </div>
  </body>
</html>
`}
        </SyntaxHighlighter>
      </div>
      <p>
        In the given example, we start by creating a <code>&lt;div&gt;</code>{" "}
        container and assigning it the class <code>"SplitPane"</code>. This
        container is configured for a horizontal split by setting the{" "}
        <code>data-orientation</code> attribute.
      </p>
      <p>
        Next, we include a left container and a right container without any
        margins, borders, or padding. These containers are separated by a
        divider. Each container contains a button.
      </p>
      <p>
        As a result, the split pane will show the two buttons positioned next to
        each other, with the divider in the middle. You can adjust the width of
        the containers and resize the buttons by dragging the divider.
      </p>
      <div className="SplitPane" style={{ height: "100px" }}>
        <div>
          <button>Left Button</button>
        </div>
        <div></div>
        <div>
          <button>Right Button</button>
        </div>
      </div>
      <p></p>
      <NoteAboutSimpaJS subject="Simpa JS Components" />
    </Layout>
  );
};

export default SplitPanePage;

export const Head = () => <SEO title={title} description={description} />;
