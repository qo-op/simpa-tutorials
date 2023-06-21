import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
        FlowLayout is a layout manager that arranges components in a container
        in a left-to-right or right-to-left flow, wrapping to the next row if
        necessary.
      </p>
      <p>
        When you add components to a container with FlowLayout, they are
        arranged in the order they are added. If the width of the container is
        too small to fit all the components on one row, the components will be
        wrapped to the next row.
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
        The data-alignment attribute controls the alignment of the components in
        the container. By default, components are centered in the container. You
        can change the alignment of the components by setting data-alignment to
        leading or trailing.
      </p>
      <p>
        The leading alignment refers to the arrangement of components in the
        container based on the container orientation. When the container
        orientation is left-to-right (LTR), the leading alignment places
        components at the left edge of the container. When the container
        orientation is right-to-left (RTL), the leading alignment places
        components at the right edge of the container.
      </p>
      <p>
        The trailing alignment, on the other hand, places components at the
        right edge of the container in a left-to-right layout, and at the left
        edge of the container in a right-to-left layout.
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="FlowLayout"
     data-alignment="leading"
     style="height: 100px;">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        In this example, we create a div container, set its class to
        "FlowLayout" and set the data-alignment attribute to leading. We then
        add three buttons to the div container.
      </p>
      <p>
        When we run the example, we will see three buttons arranged in a leading
        alignment.
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
        In order to change the flow direction from right to left, you can set
        its direction style to rtl.
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="FlowLayout"
     data-alignment="leading"
     style="direction: rtl; height: 100px;">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        In this example, we create a div container, set its layout to FlowLayout
        and its alignment to leading. Then we set the direction style to rtl,
        which changes the flow direction to right-to-left.
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
        To create gaps between rows of components in FlowLayout, you can use the
        row-gap style property. If you want to create gaps between components in
        a row, you can use the column-gap style property.
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="FlowLayout"
     style="row-gap: 20px; column-gap: 40px; height: 100px;">
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
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        After running this code, you will see a panel with 9 buttons with the
        horizontal gap set to 40 pixels and the vertical gap set to 20 pixels.
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
