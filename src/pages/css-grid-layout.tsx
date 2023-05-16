import React from "react";
import { PageProps } from "gatsby";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Layout from "components/Layout";
import NoteAboutLayouts from "components/NoteAboutLayouts";

const CSSGridLayoutPage = ({ path }: PageProps) => {
  return (
    <Layout
      pageTitle={"How to Use CSS Grid Layout with GridBagConstraints"}
      path={path}
    >
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use CSS Grid Layout</span>
        <span>with GridBagConstraints</span>
      </h1>
      <p>
        CSS <code>Grid</code> Layout is a type of layout manager that enables
        you to create two-dimensional grid-based layouts.
      </p>
      <p>
        By applying the <code>display: grid</code> property to the container,
        you activate the grid layout. The container can have any number of rows
        and columns and you can define their sizes and proportions using
        flexible units like <code>fr</code> (fraction of available space),
        percentages, or fixed values. You can also specify the gap between grid
        cells using the <code>gap</code> property.
      </p>
      <p>
        Grid items are the child elements within the grid container. They can be
        placed in any cell of the grid using grid-specific properties like{" "}
        <code>grid-row</code>, <code>grid-column</code> and more. These
        properties allow you to precisely control the placement and spanning of
        items across the grid.
      </p>
      <p>
        Here's an example of how to use CSS <code>Grid</code> Layout:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div style="display: grid;">
  <div style="grid-row: 1; grid-column: 1;">
    <button>Button 1</button>
  </div>
  <div style="grid-row: 1; grid-column: 2;">
    <button>Button 2</button>
  </div>
  <div style="grid-row: 1; grid-column: 3;">
    <button>Button 3</button>
  </div>
  <div style="grid-row: 2; grid-column: 1 / span 3;">
    <button style="padding: 40px 0;">Long-Named Button 4</button>
  </div>
  <div style="grid-row: 3; grid-column: 2 / span 2;">
    <button style="margin: 10px 0 0 0;">5</button>
  </div>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        When we run this code, we will see a panel with five buttons. To aid the
        comprehension of the preceding code, a red grid was overlaid onto the
        image:
      </p>
      <div className="BorderLayout" style={{ backgroundColor: "LightGray" }}>
        <div style={{ display: "grid" }}>
          <div style={{ gridRow: 1, gridColumn: 1 }}>
            <button>Button 1</button>
          </div>
          <div style={{ gridRow: 1, gridColumn: 2 }}>
            <button>Button 2</button>
          </div>
          <div style={{ gridRow: 1, gridColumn: 3 }}>
            <button>Button 3</button>
          </div>
          <div style={{ gridRow: 2, gridColumn: "1 / span 3" }}>
            <button style={{ padding: "40px 0" }}>Long-Named Button 4</button>
          </div>
          <div style={{ gridRow: 3, gridColumn: "2 / span 2" }}>
            <button style={{ margin: "10px 0 0 0" }}>5</button>
          </div>
          <div
            style={{
              gridRow: 1,
              gridColumn: "1 / span 3",
              border: "1px solid red",
            }}
          />
          <div
            style={{
              gridRow: 2,
              gridColumn: "1 / span 3",
              border: "1px solid red",
            }}
          />
          <div
            style={{
              gridRow: 3,
              gridColumn: "1 / span 3",
              border: "1px solid red",
            }}
          />
          <div
            style={{
              gridColumn: 1,
              gridRow: "1 / span 3",
              border: "1px solid red",
            }}
          />
          <div
            style={{
              gridColumn: 2,
              gridRow: "1 / span 3",
              border: "1px solid red",
            }}
          />
          <div
            style={{
              gridColumn: 3,
              gridRow: "1 / span 3",
              border: "1px solid red",
            }}
          />
        </div>
      </div>
      <p></p>
      <hr />
      <h2>Example with GridBagConstraints</h2>
      <p>
        We have modified the previous example so that the buttons now expand
        horizontally to occupy the entire space within their grid cell, by
        applying <code>GridBagConstraints</code> layout to the grid cell:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div style="display: grid;">
  <div style="grid-row: 1; grid-column: 1;"
       class="GridBagConstraints"
       data-fill="horizontal">
    <button>Button 1</button>
  </div>
  <div style="grid-row: 1; grid-column: 2;"
       class="GridBagConstraints"
       data-fill="horizontal">
    <button>Button 2</button>
  </div>
  <div style="grid-row: 1; grid-column: 3;"
       class="GridBagConstraints"
       data-fill="horizontal">
    <button>Button 3</button>
  </div>
  <div style="grid-row: 2; grid-column: 1 / span 3;"
       class="GridBagConstraints"
       data-fill="horizontal">
    <button style="padding: 40px 0;">Long-Named Button 4</button>
  </div>
  <div style="grid-row: 3; grid-column: 2 / span 2;"
       class="GridBagConstraints"
       data-fill="horizontal">
    <button style="margin: 10px 0 0 0;">5</button>
  </div>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        When we run this code, we will see a panel with five buttons stretched
        horizontally within its cell. To aid the comprehension of the preceding
        code, a red grid was overlaid onto the image:
      </p>
      <div className="BorderLayout" style={{ backgroundColor: "LightGray" }}>
        <div style={{ display: "grid" }}>
          <div
            style={{ gridRow: 1, gridColumn: 1 }}
            className="GridBagConstraints"
            data-fill="horizontal"
          >
            <button>Button 1</button>
          </div>
          <div
            style={{ gridRow: 1, gridColumn: 2 }}
            className="GridBagConstraints"
            data-fill="horizontal"
          >
            <button>Button 2</button>
          </div>
          <div
            style={{ gridRow: 1, gridColumn: 3 }}
            className="GridBagConstraints"
            data-fill="horizontal"
          >
            <button>Button 3</button>
          </div>
          <div
            style={{ gridRow: 2, gridColumn: "1 / span 3" }}
            className="GridBagConstraints"
            data-fill="horizontal"
          >
            <button style={{ padding: "40px 0" }}>Long-Named Button 4</button>
          </div>
          <div
            style={{ gridRow: 3, gridColumn: "2 / span 2" }}
            className="GridBagConstraints"
            data-fill="horizontal"
          >
            <button style={{ margin: "10px 0 0 0" }}>5</button>
          </div>
          <div
            style={{
              gridRow: 1,
              gridColumn: "1 / span 3",
              border: "1px solid red",
            }}
          />
          <div
            style={{
              gridRow: 2,
              gridColumn: "1 / span 3",
              border: "1px solid red",
            }}
          />
          <div
            style={{
              gridRow: 3,
              gridColumn: "1 / span 3",
              border: "1px solid red",
            }}
          />
          <div
            style={{
              gridColumn: 1,
              gridRow: "1 / span 3",
              border: "1px solid red",
            }}
          />
          <div
            style={{
              gridColumn: 2,
              gridRow: "1 / span 3",
              border: "1px solid red",
            }}
          />
          <div
            style={{
              gridColumn: 3,
              gridRow: "1 / span 3",
              border: "1px solid red",
            }}
          />
        </div>
      </div>
      <p>Here's the result without the grid lines:</p>
      <div className="BorderLayout" style={{ backgroundColor: "LightGray" }}>
        <div style={{ display: "grid" }}>
          <div
            style={{ gridRow: 1, gridColumn: 1 }}
            className="GridBagConstraints"
            data-fill="horizontal"
          >
            <button>Button 1</button>
          </div>
          <div
            style={{ gridRow: 1, gridColumn: 2 }}
            className="GridBagConstraints"
            data-fill="horizontal"
          >
            <button>Button 2</button>
          </div>
          <div
            style={{ gridRow: 1, gridColumn: 3 }}
            className="GridBagConstraints"
            data-fill="horizontal"
          >
            <button>Button 3</button>
          </div>
          <div
            style={{ gridRow: 2, gridColumn: "1 / span 3" }}
            className="GridBagConstraints"
            data-fill="horizontal"
          >
            <button style={{ padding: "40px 0" }}>Long-Named Button 4</button>
          </div>
          <div
            style={{ gridRow: 3, gridColumn: "2 / span 2" }}
            className="GridBagConstraints"
            data-fill="horizontal"
          >
            <button style={{ margin: "10px 0 0 0" }}>5</button>
          </div>
        </div>
      </div>
      <p></p>
      <NoteAboutLayouts />
    </Layout>
  );
};

export default CSSGridLayoutPage;
