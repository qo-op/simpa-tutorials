import React from "react";
import { PageProps } from "gatsby";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";

const title: string = "How to Use Flow Layouts with HTML and CSS";
const description: string =
  "This tutorial shows how to use flow layouts (FlowLayout) using HTML and CSS.";

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
        <code>FlowLayout</code> is a layout manager that arranges components in
        a container in a left-to-right or right-to-left flow, wrapping to the
        next row if necessary.
      </p>
      <p>
        When you add components to a container with <code>FlowLayout</code>,
        they are arranged in the order they are added. If the width of the
        container is too small to fit all the components on one row, the
        components will be wrapped to the next row.
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
      <h2>
        Example with <code>leading</code> alignment
      </h2>
      <p>
        The <code>data-alignment</code> attribute controls the alignment of the
        components in the container. By default, components are centered in the
        container. You can change the alignment of the components by setting{" "}
        <code>data-alignment</code> to <code>leading</code> or{" "}
        <code>trailing</code>.
      </p>
      <p>
        The <code>leading</code> alignment refers to the arrangement of
        components in the container based on the container orientation. When the
        container orientation is left-to-right (LTR), the <code>leading</code>{" "}
        alignment places components at the left edge of the container. When the
        container orientation is right-to-left (RTL), the <code>leading</code>{" "}
        alignment places components at the right edge of the container.
      </p>
      <p>
        The <code>trailing</code> alignment, on the other hand, places
        components at the right edge of the container in a left-to-right layout,
        and at the left edge of the container in a right-to-left layout.
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
        In this example, we create a <code>div</code> container, set its{" "}
        <code>class</code> to <code>"FlowLayout"</code> and set the{" "}
        <code>data-alignment</code> attribute to <code>leading</code>. We then
        add three <code>buttons</code> to the <code>div</code> container.
      </p>
      <p>
        When we run the example, we will see three buttons arranged in a{" "}
        <code>leading</code> alignment.
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
      <h2>
        Example with <code>rtl</code> direction
      </h2>
      <p>
        In order to change the flow direction from right to left, you can set
        its <code>direction</code> style to <code>rtl</code>.
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
        In this example, we create a <code>div</code> container, set its layout
        to <code>FlowLayout</code> and its alignment to <code>leading</code>.
        Then we set the <code>direction</code> style to <code>rtl</code>, which
        changes the flow direction to right-to-left.
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
      <h2>Adding gaps</h2>
      <p>
        To create gaps between rows of components in <code>FlowLayout</code>,
        you can use the <code>row-gap</code> style property. If you want to
        create gaps between components in a row, you can use the{" "}
        <code>column-gap</code> style property.
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
