import CopyToClipboardSyntaxHighlighter from "components/CopyToClipboardSyntaxHighlighter";
import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

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
        BorderLayout is a type of layout manager that organizes and arranges
        components within a container. It divides the container into five
        regions: PageStart, PageEnd, LineStart, LineEnd, and Center.
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
        When components are added to a container with BorderLayout, they are
        placed in one of these five regions according to the rules of the
        layout. The PageStart region is placed at the top, the PageEnd region at
        the bottom, the LineStart region on the left side, the LineEnd region on
        the right side, and the Center region in the middle.
      </p>
      <p>
        The components placed in the PageStart and PageEnd regions are sized to
        their preferred height and stretched to the full width of the container.
        The components placed in the LineStart and LineEnd regions are sized to
        their preferred width and stretched to the full height of the container.
        The component placed in the Center region is stretched to fill the
        remaining space in the container.
      </p>
      <hr />
      <h2>Example with Two Components</h2>
      <p>
        Here's an example of using BorderLayout to create a simple user
        interface with two buttons:
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
</head>
<body>
  <!-- Container with BorderLayout -->
  <div class="BorderLayout"
       style="height: 100px">
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
        To specify a region for a component, wrap the component in a &lt;div&gt;
        element with the class attribute set to "PageStart", "PageEnd",{" "}
        "LineStart", "LineEnd", or "Center".
      </p>
      <p>
        If no region is specified for a component, then the component is placed
        in the Center region by default.
      </p>
      <p>
        In the above example, we create a &lt;div&gt; container with the class
        set to "BorderLayout". We then add a &lt;button&gt; with the text
        "Button 1" wrapped in a &lt;div&gt; to the PageStart region of the
        container. Lastly, we add another &lt;button&gt; with the text "Button
        2" to the container. Since we didn't specify any region, the second
        button is automatically placed in the Center region of the container.
      </p>
      <p>
        When you use this code, you will see a "Button 1" at the top and a
        "Button 2" in the center, like this:
      </p>
      <div className="BorderLayout" style={{ height: "100px" }}>
        <div className="PageStart">
          <button>Button 1</button>
        </div>
        <button>Button 2</button>
      </div>
      <p></p>
      <hr />
      <h2>Creating Component Gaps</h2>
      <p>
        To create gaps between components in BorderLayout, you can add margins
        to the respective components. For example, if you want to create a gap
        between a component in the PageStart region and a component in the
        Center region, you can add a margin as follows:
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
</head>
<body>
  <!-- Container with Border Layout -->
  <div class="BorderLayout"
       style="height: 100px">
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
        After running this code, you will see two buttons and a gap between
        them:
      </p>
      <div className="BorderLayout" style={{ height: "100px" }}>
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
