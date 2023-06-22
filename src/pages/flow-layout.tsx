import CopyToClipboardSyntaxHighlighter from "components/CopyToClipboardSyntaxHighlighter";
import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "How to Use Flow Layouts with HTML and CSS";
const description: string =
  "Learn how to effectively utilize Flow Layouts in HTML and CSS to arrange components in a left-to-right or right-to-left flow within a container, with the ability to wrap components to the next row if needed. Explore the step-by-step process of implementing FlowLayout, where components are arranged in the order they are added. Discover how to control the alignment of components using the data-alignment attribute, enabling leading or trailing alignment based on the container's orientation. Additionally, explore examples showcasing leading alignment, changing flow direction, and creating component gaps using row-gap and column-gap. Unlock the potential of Flow Layouts to achieve flexible and responsive component arrangements in your web designs.";

const FlowLayoutPage = ({ path }: PageProps) => {
  return (
    <Layout path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use Flow Layouts</span>
        <span>with HTML and CSS</span>
      </h1>
      <p>
        FlowLayout is a layout manager that organizes components within a
        container in either a left-to-right or right-to-left flow, with the
        ability to wrap components to the next row if necessary.
      </p>
      <p>
        When you add components to a container using FlowLayout, they will be
        arranged in the order they are added. If the container's width is
        insufficient to accommodate all the components on a single row, they
        will automatically wrap to the next row.
      </p>
      <div
        className="FlowLayout"
        style={{ height: "200px", backgroundColor: "LightGray" }}
      >
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
        <button>Button 4</button>
        <button>Button 5</button>
        <button>Button 6</button>
        <button>Button 7</button>
        <button>Button 8</button>
        <button>Button 9</button>
        <button>Button 10</button>
        <button>Button 11</button>
        <button>Button 12</button>
        <button>Button 13</button>
        <button>Button 14</button>
        <button>Button 15</button>
        <button>Button 16</button>
      </div>
      <p></p>
      <hr />
      <h2>Example with Leading Alignment</h2>
      <p>
        The alignment of components within the container is controlled by the
        data-alignment attribute. By default, components are centered within the
        container. However, you can modify the alignment by setting the
        data-alignment attribute to "leading" or "trailing".
      </p>
      <p>
        In the context of FlowLayout, leading alignment places components at the
        left edge of the container in a left-to-right (LTR) orientation, and at
        the right edge of the container in a right-to-left (RTL) orientation.
      </p>
      <p>
        On the other hand, trailing alignment positions components at the right
        edge of the container in a left-to-right layout, and at the left edge in
        a right-to-left layout.
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
  <!-- Container with FlowLayout -->
  <!-- data-alignment="leading" -->
  <div class="FlowLayout"
       data-alignment="leading"
       style="height: 100px;
              background-color: LightGray">
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
  </div>
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In this example, we create a &lt;div&gt; container and assign it the
        class "FlowLayout". The data-alignment attribute is set to "leading",
        resulting in a leading alignment. Three buttons are added within the
        &lt;div&gt; container.
      </p>
      <p>
        When you run this example, you will observe the three buttons arranged
        in a leading alignment:
      </p>
      <div
        className="FlowLayout"
        data-alignment="leading"
        style={{ height: "100px", backgroundColor: "LightGray" }}
      >
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </div>
      <p></p>
      <hr />
      <h2>Example with RTL Direction</h2>
      <p>
        To change the flow direction from left to right to right to left, you
        can apply the "rtl" value to the direction style.
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://qo-op.github.io/simpa/simpa.css">
</head>
<body>
  <!-- Container with FlowLayout -->
  <!-- data-alignment="leading" -->
  <!-- direction: rtl -->
  <div class="FlowLayout"
       data-alignment="leading"
       style="direction: rtl;
              height: 100px;
              background-color: LightGray">
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
  </div>
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In this example, a &lt;div&gt; container with the FlowLayout class is
        created, along with leading alignment and a specified height. By adding
        the style "direction: rtl", the flow direction changes to right-to-left.
      </p>
      <div
        className="FlowLayout"
        data-alignment="leading"
        style={{
          direction: "rtl",
          height: "100px",
          backgroundColor: "LightGray",
        }}
      >
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </div>
      <p></p>
      <hr />
      <h2>Creating Component Gaps</h2>
      <p>
        To introduce gaps between rows of components in FlowLayout, you can
        utilize the row-gap style property. If you wish to create gaps between
        components within a row, you can use the column-gap style property.
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://qo-op.github.io/simpa/simpa.css">
</head>
<body>
  <!-- Container with FlowLayout -->
  <!-- row-gap: 20px -->
  <!-- column-gap: 40px -->
  <div class="FlowLayout"
       style="row-gap: 20px;
              column-gap: 40px;
              height: 200px;
              background-color: LightGray">
    <button>Button 1</button>
    <button>Button 2</button>
    <button>Button 3</button>
    <button>Button 4</button>
    <button>Button 5</button>
    <button>Button 6</button>
    <button>Button 7</button>
    <button>Button 8</button>
    <button>Button 9</button>
  </div>
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        After executing this code, you will see a panel with nine buttons, where
        the horizontal gap is set to 40 pixels and the vertical gap is set to 20
        pixels, as defined by the row-gap and column-gap style properties.
      </p>
      <div
        className="FlowLayout"
        style={{
          rowGap: "20px",
          columnGap: "40px",
          height: "200px",
          backgroundColor: "LightGray",
        }}
      >
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
        <button>Button 4</button>
        <button>Button 5</button>
        <button>Button 6</button>
        <button>Button 7</button>
        <button>Button 8</button>
        <button>Button 9</button>
      </div>
      <p></p>
      <NoteAboutSimpaCSS subject="Simpa CSS Layouts" />
    </Layout>
  );
};

export default FlowLayoutPage;

export const Head = () => <SEO title={title} description={description} />;
