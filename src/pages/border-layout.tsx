import CopyToClipboardSyntaxHighlighter from "components/CopyToClipboardSyntaxHighlighter";
import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const title: string = "How to Use Border Layouts with HTML and CSS";
const description: string =
  "Learn how to effectively use Border Layouts in HTML and CSS to organize and arrange components within a container. Understand the five regions of BorderLayout, such as PageStart, PageEnd, LineStart, LineEnd, and Center, and how they determine the placement of components. Explore examples and techniques to create responsive user interfaces with BorderLayout, including creating gaps between components and incorporating Simpa CSS Layouts for enhanced styling.";

const BorderLayoutPage = ({ path }: PageProps) => {
  return (
    <Layout path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use Border Layouts</span>
        <span>with HTML and CSS</span>
      </h1>
      <p>
        <code>BorderLayout</code> is a type of layout manager that organizes and
        arranges components within a container. It divides the container into
        five regions: <code>PageStart</code>, <code>PageEnd</code>,{" "}
        <code>LineStart</code>, <code>LineEnd</code>, and <code>Center</code>.
      </p>
      <div className="BorderLayout" style={{ height: "200px" }}>
        <div className="PageStart">
          <button>PageStart</button>
        </div>
        <div className="LineStart">
          <button>LineStart</button>
        </div>
        <button>Center</button>
        <div className="LineEnd">
          <button>LineEnd</button>
        </div>
        <div className="PageEnd">
          <button>PageEnd</button>
        </div>
      </div>
      <p>
        When components are added to a container with <code>BorderLayout</code>,
        they are placed in one of these five regions according to the rules of
        the layout. The <code>PageStart</code> region is placed at the top, the{" "}
        <code>PageEnd</code> region at the bottom, the <code>LineStart</code>{" "}
        region on the left side, the <code>LineEnd</code> region on the right
        side and the <code>Center</code> region in the middle.
      </p>
      <p>
        The components placed in the <code>PageStart</code> and{" "}
        <code>PageEnd</code> regions are sized to their preferred height and
        stretched to the full width of the container. The components placed in
        the <code>LineStart</code> and <code>LineEnd</code> regions are sized to
        their preferred width and stretched to the full height of the container.
        The component placed in the <code>Center</code> region is stretched to
        fill the remaining space in the container.
      </p>
      <hr />
      <h2>Example with Two Components</h2>
      <p>
        Here's an example of using <code>BorderLayout</code> to create a simple
        user interface with two buttons:
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter
          language="html"
          style={vs2015}
          wrapLongLines
        >
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
</head>
<body class="Frame">
  <!-- Container with BorderLayout -->
  <div class="BorderLayout">
    <!-- PageStart -->
    <div class="PageStart">
      <button>Button 1</button>
    </div>
    <!-- Center -->
    <button>Button 2</button>
  </div>
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        To specify a region for a component, wrap the component in a{" "}
        <code>&lt;div&gt;</code> element with the class attribute set to{" "}
        <code>"PageStart"</code>, <code>"PageEnd"</code>,{" "}
        <code>"LineStart"</code>, <code>"LineEnd"</code>, or{" "}
        <code>"Center"</code>.
      </p>
      <p>
        If no region is specified for a component, then the component is placed
        in the <code>Center</code> region by default.
      </p>
      <p>
        In the above example, we create a <code>&lt;div&gt;</code> container
        with the class set to <code>"BorderLayout"</code>. We then add a{" "}
        <code>&lt;button&gt;</code> with the text <code>"Button 1"</code>{" "}
        wrapped in a <code>&lt;div&gt;</code> to the PageStart region of the
        container. Lastly, we add another <code>&lt;button&gt;</code> with the
        text <code>"Button 2"</code> to the container. Since we didn't specify
        any region, the second button is automatically placed in the Center
        region of the container.
      </p>
      <p>
        When you use this code, you will see a panel with "Button 1" at the top
        and "Button 2" in the center, like this:
      </p>
      <div
        className="BorderLayout"
        style={{ height: "100px", backgroundColor: "LightGray" }}
      >
        <div className="PageStart">
          <button>Button 1</button>
        </div>
        <button>Button 2</button>
      </div>
      <p></p>
      <hr />
      <h2>Creating Component Gaps</h2>
      <p>
        To create gaps between components in <code>BorderLayout</code>, you can
        add margins to the respective components. For example, if you want to
        create a gap between a component in the PageStart region and a component
        in the Center region, you can add a margin as follows:
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter
          language="html"
          style={vs2015}
          wrapLongLines
        >
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
</head>
<body class="Frame">
  <!-- Container with Border Layout -->
  <div class="BorderLayout">
    <!-- Page Start with Margin -->
    <div class="PageStart"
         style="margin: 0 0 10px 0">
      <button>Button 1</button>
    </div>
    <!-- Center -->
    <button>Button 2</button>
  </div>
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        After running this code, you will see a panel with two buttons and a gap
        between them:
      </p>
      <div
        className="BorderLayout"
        style={{ height: "100px", backgroundColor: "LightGray" }}
      >
        <div className="PageStart" style={{ margin: "0 0 10px 0" }}>
          <button>Button 1</button>
        </div>
        <button>Button 2</button>
      </div>
      <p>
        Remember that you can apply margins to any region within BorderLayout to
        create gaps as needed. It provides flexibility in adjusting the spacing
        between components
      </p>
      <NoteAboutSimpaCSS subject="Simpa CSS Layouts" />
    </Layout>
  );
};

export default BorderLayoutPage;

export const Head = () => <SEO title={title} description={description} />;
