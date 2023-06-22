import CopyToClipboardSyntaxHighlighter from "components/CopyToClipboardSyntaxHighlighter";
import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "How to Use Box Layouts with HTML and CSS";
const description: string =
  "Discover how to effectively utilize Box Layouts in HTML and CSS to arrange components in a single row or column. Learn how BoxLayout can be applied to create horizontal or vertical layouts, enabling you to structure components based on your specific requirements. Explore examples showcasing the alignment options, such as stretching, starting, ending, and centering components within the layout. Additionally, learn how to create component gaps and gain insights into using Simpa CSS Layouts to enhance your web designs.";

const BorderLayoutPage = ({ path }: PageProps) => {
  return (
    <Layout path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use Box Layouts</span>
        <span>with HTML and CSS</span>
      </h1>
      <p>
        BoxLayout is a layout manager that arranges components in a single row
        or column. It's useful when you need to lay out components in a specific
        direction, such as in a toolbar.
      </p>
      <p>
        To start using Box Layouts, you'll need to create a container to hold
        your components. This can be achieved by using a &lt;div&gt; element.
        Once you have created your container, you can apply the Box Layout by
        assigning the class name "BoxLayout" to the container's class attribute.
      </p>
      <hr />
      <h2>Example with Components Arranged Horizontally</h2>
      <p>Let's begin with an example of arranging components horizontally:</p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
</head>
<body>
  <!-- Container with Horizontal BoxLayout -->
  <div class="BoxLayout"
       data-axis="line-axis"
       style="height: 100px;
              background-color: LightGray">
    <button>Button</button>
    <button>Another<br />button</button>
  </div>
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In the above example, we set the container's layout to Box Layout by
        assigning the class "BoxLayout" to the &lt;div&gt;. To arrange the
        components horizontally, we specify data-axis="line-axis". By default,
        BoxLayout arranges its components horizontally, so specifying
        data-axis="line-axis" is not necessary in this case. However, including
        the data-axis="line-axis" attribute explicitly highlights the intention
        to arrange the components horizontally.
      </p>
      <p>
        The provided code will result in the components being laid out
        horizontally within the container.
      </p>
      <div
        className="BoxLayout"
        data-axis="line-axis"
        style={{ height: "100px", backgroundColor: "LightGray" }}
      >
        <button>Button</button>
        <button>
          Another
          <br />
          button
        </button>
      </div>
      <p></p>
      <hr />
      <h2>Example with Components Arranged Vertically</h2>
      <p>Now, let's explore an example of arranging components vertically:</p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
</head>
<body>
  <!-- Container with Vertical BoxLayout -->
  <div class="BoxLayout"
       data-axis="page-axis"
       style="height: 150px;
              background-color: LightGray">
    <button>First</button>
    <button>Second</button>
    <button>Third</button>
    <button>Fourth</button>
  </div>
</body>
</html>`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In this code snippet, we set the container's layout to Box Layout with
        data-axis="page-axis" to arrange the components vertically.
      </p>
      <div
        className="BoxLayout"
        data-axis="page-axis"
        style={{ height: "150px", backgroundColor: "LightGray" }}
      >
        <button>First</button>
        <button>Second</button>
        <button>Third</button>
        <button>Fourth</button>
      </div>
      <p></p>
      <hr />
      <h2>Horizontal Alignment of the Components</h2>
      <p>
        To stretch components horizontally within a vertical Box Layout
        container, use data-alignment-x="stretch". By default, if no
        data-alignment-x is specified, the components align to the center of the
        vertical container.
      </p>
      <p>For example:</p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
</head>
<body>
  <!-- Container with Vertical BoxLayout -->
  <!-- data-alignment-x="stretch" -->
  <div class="BoxLayout"
       data-axis="page-axis"
       data-alignment-x="stretch"
       style="height: 150px; background-color: LightGray">
    <button>First</button>
    <button>Second</button>
    <button>Third</button>
    <button>Fourth</button>
  </div>
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        The above code will result in stretched buttons within the vertical
        container.
      </p>
      <div
        className="BoxLayout"
        data-axis="page-axis"
        data-alignment-x="stretch"
        style={{ height: "150px", backgroundColor: "LightGray" }}
      >
        <button>First</button>
        <button>Second</button>
        <button>Third</button>
        <button>Fourth</button>
      </div>
      <p>Other data-alignment-x values that control horizontal alignment:</p>
      <ul>
        <li>
          <p>
            data-alignment-x="start" aligns components to the left edge of the
            container.
          </p>
          <div
            className="BoxLayout"
            data-axis="page-axis"
            data-alignment-x="start"
            style={{
              height: "150px",
              backgroundColor: "LightGray",
            }}
          >
            <button>First</button>
            <button>Second</button>
            <button>Third</button>
            <button>Fourth</button>
          </div>
          <p>
            On a horizontal Box Layout container, components will be justified
            to the left edge.
          </p>
          <div
            className="BoxLayout"
            data-axis="line-axis"
            data-alignment-x="start"
            style={{
              height: "100px",
              backgroundColor: "LightGray",
            }}
          >
            <button>Button</button>
            <button>
              Another
              <br />
              button
            </button>
          </div>
        </li>
        <li>
          <p>
            data-alignment-x="end" aligns components to the right edge of the
            container.
          </p>
          <div
            className="BoxLayout"
            data-axis="page-axis"
            data-alignment-x="end"
            style={{
              height: "150px",
              backgroundColor: "LightGray",
            }}
          >
            <button>First</button>
            <button>Second</button>
            <button>Third</button>
            <button>Fourth</button>
          </div>
          <p>
            On a horizontal Box Layout container, components will be justified
            to the right edge.
          </p>
          <div
            className="BoxLayout"
            data-axis="line-axis"
            data-alignment-x="end"
            style={{
              height: "100px",
              backgroundColor: "LightGray",
            }}
          >
            <button>Button</button>
            <button>
              Another
              <br />
              button
            </button>
          </div>
        </li>
        <li>
          <p>
            data-alignment-x="center" aligns components at the center of the
            container.
          </p>
          <div
            className="BoxLayout"
            data-axis="page-axis"
            data-alignment-x="center"
            style={{
              height: "100px",
              backgroundColor: "LightGray",
            }}
          >
            <button>First</button>
            <button>Second</button>
            <button>Third</button>
            <button>Fourth</button>
          </div>
          <p>
            On a horizontal Box Layout container, components will be justified
            at the center within the container.
          </p>
          <div
            className="BoxLayout"
            data-axis="line-axis"
            data-alignment-x="center"
            style={{
              height: "100px",
              backgroundColor: "LightGray",
            }}
          >
            <button>Button</button>
            <button>
              Another
              <br />
              button
            </button>
          </div>
        </li>
      </ul>
      <hr />
      <h2>Vertical Alignment of the Components</h2>
      <p>
        The vertical position of child components in a Box Layout container is
        controlled by the data-alignment-y attribute.
      </p>
      <p>
        For example, to stretch components vertically within a horizontal Box
        Layout container, use:
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
  <!-- Container with Horizontal BoxLayout -->
  <!-- data-alignment-y="stretch" -->
  <div class="BoxLayout"
       data-axis="line-axis"
       data-alignment-y="stretch"
       style="height: 100px;
              background-color: LightGray">
    <button>Button</button>
    <button>Another<br />button</button>
  </div>
</body>
</html>`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        The code above will result in stretched buttons laid out horizontally.
      </p>
      <div
        className="BoxLayout"
        data-axis="line-axis"
        data-alignment-y="stretch"
        style={{ height: "100px", backgroundColor: "LightGray" }}
      >
        <button>Button</button>
        <button>
          Another
          <br />
          button
        </button>
      </div>
      <p></p>
      <p>Other data-alignment-y values that control vertical alignment:</p>
      <ul>
        <li>
          <p>
            data-alignment-y="start" aligns components to the top edge of the
            container.
          </p>
          <div
            className="BoxLayout"
            data-axis="line-axis"
            data-alignment-y="start"
            style={{
              height: "100px",
              backgroundColor: "LightGray",
            }}
          >
            <button>Button</button>
            <button>
              Another
              <br />
              button
            </button>
          </div>
          <p>
            On a vertical Box Layout container, components will be justified to
            the top edge.
          </p>
          <div
            className="BoxLayout"
            data-axis="page-axis"
            data-alignment-y="start"
            style={{
              height: "150px",
              backgroundColor: "LightGray",
            }}
          >
            <button>First</button>
            <button>Second</button>
            <button>Third</button>
            <button>Fourth</button>
          </div>
        </li>
        <li>
          <p>
            data-alignment-y="end" aligns components to the bottom edge of the
            container.
          </p>
          <div
            className="BoxLayout"
            data-axis="line-axis"
            data-alignment-y="end"
            style={{
              height: "100px",
              backgroundColor: "LightGray",
            }}
          >
            <button>Button</button>
            <button>
              Another
              <br />
              button
            </button>
          </div>
          <p>
            On a vertical Box Layout container, components will be justified to
            the bottom edge.
          </p>
          <div
            className="BoxLayout"
            data-axis="page-axis"
            data-alignment-y="end"
            style={{
              height: "150px",
              backgroundColor: "LightGray",
            }}
          >
            <button>First</button>
            <button>Second</button>
            <button>Third</button>
            <button>Fourth</button>
          </div>
        </li>
        <li>
          <p>
            data-alignment-y="center" aligns components at the center of the
            container.
          </p>
          <div
            className="BoxLayout"
            data-axis="line-axis"
            data-alignment-y="center"
            style={{
              height: "100px",
              backgroundColor: "LightGray",
            }}
          >
            <button>Button</button>
            <button>
              Another
              <br />
              button
            </button>
          </div>
          <p>
            On a vertical Box Layout container, components will be justified at
            the center within the container.
          </p>
          <div
            className="BoxLayout"
            data-axis="page-axis"
            data-alignment-y="center"
            style={{
              height: "150px",
              backgroundColor: "LightGray",
            }}
          >
            <button>First</button>
            <button>Second</button>
            <button>Third</button>
            <button>Fourth</button>
          </div>
        </li>
      </ul>
      <hr />
      <h2>Combining X and Y Alignments</h2>
      <p>
        You can combine both the x and y alignments of a Box Layout container to
        position child components both horizontally and vertically within the
        container. Keep in mind that the x and y alignments are independent of
        each other, allowing for different positioning effects.
      </p>
      <p></p>
      <hr />
      <h2>Creating Component Gaps</h2>
      <p>
        To create gaps between components in a Box Layout, use the gap style
        property.
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
  <!-- Container with Horizontal BoxLayout -->
  <!-- gap="10px" -->
  <div class="BoxLayout"
       data-axis="line-axis"
       style="gap: 10px;
              height: 100px;
              background-color: LightGray">
    <button>Button 1</button>
    <button>Button 2</button>
  </div>
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        The example above creates a container with a 10-pixel gap between two
        buttons.
      </p>
      <div
        className="BoxLayout"
        data-axis="line-axis"
        style={{ gap: "10px", height: "100px", backgroundColor: "LightGray" }}
      >
        <button>Button 1</button>
        <button>Button 2</button>
      </div>
      <p></p>
      <NoteAboutSimpaCSS subject="Simpa CSS Layouts" />
    </Layout>
  );
};

export default BorderLayoutPage;

export const Head = () => <SEO title={title} description={description} />;
