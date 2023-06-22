import CopyToClipboardSyntaxHighlighter from "components/CopyToClipboardSyntaxHighlighter";
import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const title: string = "How to Use Grid Constraints with HTML and CSS";
const description: string =
  "Learn how to effectively utilize Grid Constraints in HTML and CSS to position and resize components within a container. Discover the power of the data-anchor attribute, allowing you to specify the precise position of a component, whether it's centered, aligned with edges, or placed in corners. Explore examples showcasing various data-anchor values and their interpretations in a container layout. Additionally, dive into the flexibility provided by the data-fill attribute, enabling you to resize components horizontally, vertically, or in both directions to efficiently utilize available space. Combine the data-anchor and data-fill attributes to achieve versatile layouts tailored to your design requirements.";

const GridConstraintsPage = ({ path }: PageProps) => {
  return (
    <Layout path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use Grid Constraints</span>
        <span>with HTML and CSS</span>
      </h1>
      <p>
        GridConstraints is a layout manager that allows you to define the
        positioning and resizing behavior of a single component within a
        container. It consists of two attributes: data-anchor and data-fill.
      </p>
      <hr />
      <h2>The Anchor Attribute</h2>
      <p>
        The data-anchor attribute in GridConstraints is utilized to specify the
        position of a component within its container.
      </p>
      <p>
        Here's an example of using GridConstraints with the data-anchor
        attribute:
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
  <!-- Container with GridConstraints -->
  <div class="GridConstraints"
       data-anchor="center"
       style="height: 100px;
              background-color: LightGray">
    <button>Button</button>
  </div>
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In this example, a &lt;div&gt; container is created with the class
        attribute set to "GridConstraints" and the data-anchor attribute set to
        center. A button with the text "Button" is added to the container.
      </p>
      <p>
        When you run this code, you will observe a panel with a button centered
        within it:
      </p>
      <div
        className="GridConstraints"
        data-anchor="center"
        style={{ height: "100px", backgroundColor: "LightGray" }}
      >
        <button>Button</button>
      </div>
      <p>
        The data-anchor attribute can be assigned one of the following values:
      </p>
      <ul>
        <li>
          <p>center: Centers the component within its container (default).</p>
          <div
            className="GridConstraints"
            data-anchor="center"
            style={{ height: "50px", backgroundColor: "LightGray" }}
          >
            <button>center</button>
          </div>
        </li>
        <li>
          <p>
            page-start: Aligns the component with the top edge of its container.
          </p>
          <div
            className="GridConstraints"
            data-anchor="page-start"
            style={{ height: "50px", backgroundColor: "LightGray" }}
          >
            <button>page-start</button>
          </div>
        </li>
        <li>
          <p>
            page-end: Aligns the component with the bottom edge of its
            container.
          </p>
          <div
            className="GridConstraints"
            data-anchor="page-end"
            style={{ height: "50px", backgroundColor: "LightGray" }}
          >
            <button>page-end</button>
          </div>
        </li>
        <li>
          <p>
            line-start: Aligns the component with the left edge of its
            container.
          </p>
          <div
            className="GridConstraints"
            data-anchor="line-start"
            style={{ height: "50px", backgroundColor: "LightGray" }}
          >
            <button>line-start</button>
          </div>
        </li>
        <li>
          <p>
            line-end: Aligns the component with the right edge of its container.
          </p>
          <div
            className="GridConstraints"
            data-anchor="line-end"
            style={{ height: "50px", backgroundColor: "LightGray" }}
          >
            <button>line-end</button>
          </div>
        </li>
        <li>
          <p>
            first-line-start: Aligns the component with the top-left corner of
            its container.
          </p>
          <div
            className="GridConstraints"
            data-anchor="first-line-start"
            style={{ height: "50px", backgroundColor: "LightGray" }}
          >
            <button>first-line-start</button>
          </div>
        </li>
        <li>
          <p>
            first-line-end: Aligns the component with the top-right corner of
            its container.
          </p>
          <div
            className="GridConstraints"
            data-anchor="first-line-end"
            style={{ height: "50px", backgroundColor: "LightGray" }}
          >
            <button>first-line-end</button>
          </div>
        </li>
        <li>
          <p>
            last-line-start: Aligns the component with the bottom-left corner of
            its container.
          </p>
          <div
            className="GridConstraints"
            data-anchor="last-line-start"
            style={{ height: "50px", backgroundColor: "LightGray" }}
          >
            <button>last-line-start</button>
          </div>
        </li>
        <li>
          <p>
            last-line-end: Aligns the component with the bottom-right corner of
            its container.
          </p>
          <div
            className="GridConstraints"
            data-anchor="last-line-end"
            style={{ height: "50px", backgroundColor: "LightGray" }}
          >
            <button>last-line-end</button>
          </div>
        </li>
      </ul>
      <p>
        Here is a visual representation summarizing the interpretation of these
        data-anchor values within a container:
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr",
          height: "100px",
          backgroundColor: "LightGray",
        }}
      >
        <div className="GridConstraints" data-anchor="first-line-start">
          <button>first-line-start</button>
        </div>
        <div className="GridConstraints" data-anchor="page-start">
          <button>page-start</button>
        </div>
        <div className="GridConstraints" data-anchor="first-line-end">
          <button>first-line-end</button>
        </div>
        <div className="GridConstraints" data-anchor="line-start">
          <button>line-start</button>
        </div>
        <div className="GridConstraints" data-anchor="center">
          <button>center</button>
        </div>
        <div className="GridConstraints" data-anchor="line-end">
          <button>line-end</button>
        </div>
        <div className="GridConstraints" data-anchor="last-line-start">
          <button>last-line-start</button>
        </div>
        <div className="GridConstraints" data-anchor="page-end">
          <button>page-end</button>
        </div>
        <div className="GridConstraints" data-anchor="last-line-end">
          <button>last-line-end</button>
        </div>
      </div>
      <p></p>
      <hr />
      <h2>The Fill Attribute</h2>
      <p>
        The data-fill attribute in GridConstraints is used to specify the
        resizing behavior of a component within its container.
      </p>
      <p>
        Here's an example of how to use the data-fill attribute to define the
        fill behavior for a component:
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://qo-op.github.io/simpa/simpa.css">
  </head>
  <body>
    <!-- Container with GridConstraints -->
    <div
      class="GridConstraints"
      data-fill="vertical"
      style="height: 100px; background-color: LightGray"
    >
      <button>Button</button>
    </div>
  </body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In this example, a &lt;div&gt; container is created with the class
        attribute set to "GridConstraints" and the data-fill attribute set to
        vertical. This will resize the button vertically to fill the available
        space within its container, while maintaining its original horizontal
        size.
      </p>
      <p>
        When you run this code, you will see a button that is vertically resized
        to fill the available space:
      </p>
      <div
        className="GridConstraints"
        data-fill="vertical"
        style={{ height: "100px", backgroundColor: "LightGray" }}
      >
        <button>Button</button>
      </div>
      <p>The data-fill attribute can take one of the following values:</p>
      <ul>
        <li>
          <p>none: The component is not resized (default).</p>
          <div
            className="GridConstraints"
            data-anchor="center"
            style={{ height: "100px", backgroundColor: "LightGray" }}
          >
            <button>none</button>
          </div>
        </li>
        <li>
          <p>
            horizontal: The component is resized horizontally to fill the
            available space within its container.
          </p>
          <div
            className="GridConstraints"
            data-anchor="center"
            data-fill="horizontal"
            style={{ height: "100px", backgroundColor: "LightGray" }}
          >
            <button>horizontal</button>
          </div>
        </li>
        <li>
          <p>
            vertical: The component is resized vertically to fill the available
            space within its container.
          </p>
          <div
            className="GridConstraints"
            data-anchor="center"
            data-fill="vertical"
            style={{ height: "100px", backgroundColor: "LightGray" }}
          >
            <button>vertical</button>
          </div>
        </li>
        <li>
          <p>
            both: The component is resized both horizontally and vertically to
            fill the available space within its container.
          </p>
          <div
            className="GridConstraints"
            data-fill="both"
            style={{ height: "100px", backgroundColor: "LightGray" }}
          >
            <button>both</button>
          </div>
        </li>
      </ul>
      <hr />
      <h2>Combining Anchor and Fill Attributes</h2>
      <p>
        You can combine the data-anchor and data-fill attributes in
        GridConstraints. As shown in the examples above, the data-anchor
        attribute determines the component's placement within the container,
        while the data-fill attribute determines its resizing behavior. By
        combining these attributes, you can position and resize components in
        various ways to achieve the desired layout.
      </p>
      <p></p>
      <NoteAboutSimpaCSS subject="Simpa CSS Layouts" />
    </Layout>
  );
};

export default GridConstraintsPage;

export const Head = () => <SEO title={title} description={description} />;
