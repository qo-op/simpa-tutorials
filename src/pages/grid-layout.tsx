import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";
import { Link, PageProps } from "gatsby";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const title: string = "How to Use Grid Layouts with Grid Constraints";
const description: string =
  "Explore the power of CSS Grid Layout and learn how to create dynamic and responsive two-dimensional grid-based layouts. Discover how to activate the grid layout by applying the display: grid property to the container and define the size and proportions of rows and columns using flexible units like fr, percentages, or fixed values. Learn to control the placement and spanning of grid items within the grid using grid-specific properties like grid-row and grid-column. Dive into an example showcasing the usage of CSS Grid Layout to create a panel with multiple buttons, and understand how to apply GridConstraints layout to expand the buttons horizontally within their cells.";

const CSSGridLayoutPage = ({ path }: PageProps) => {
  return (
    <Layout path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use Grid Layouts</span>
        <span>with Grid Constraints</span>
      </h1>
      <p>
        CSS Grid Layout is a type of layout manager that enables you to create
        two-dimensional grid-based layouts.
      </p>
      <p>
        By applying the display: grid property to the container, you activate
        the grid layout. The container can have any number of rows and columns
        and you can define their sizes and proportions using flexible units like
        fr (fraction of available space), percentages, or fixed values. You can
        also specify the gap between grid cells using the gap property.
      </p>
      <p>
        Grid items are the child elements within the grid container. They can be
        placed in any cell of the grid using grid-specific properties like{" "}
        grid-row, grid-column and more. These properties allow you to precisely
        control the placement and spanning of items across the grid.
      </p>
      <p>Here's an example of how to use CSS Grid Layout:</p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div style="display: grid;">
  <div style="grid-row: 1;
              grid-column: 1;">
    <button>
      Button 1
    </button>
  </div>
  <div style="grid-row: 1;
              grid-column: 2;">
    <button>
      Button 2
    </button>
  </div>
  <div style="grid-row: 1;
              grid-column: 3;">
    <button>
      Button 3
    </button>
  </div>
  <div style="grid-row: 2;
              grid-column: 1 / span 3;">
    <button>
      <span class="EmptyBorder"
            style="padding: 40px 0;">
        Long-Named Button 4
      </span>
    </button>
  </div>
  <div style="grid-row: 3;
              grid-column: 2 / span 2;
              padding: 10px 0 0 0;">
    <button>
      5
    </button>
  </div>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        When you run this code, you will see a panel with five buttons. To aid
        the comprehension of the preceding code, a red grid was overlaid onto
        the image:
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
            <button>
              <span className="EmptyBorder" style={{ padding: "40px 0" }}>
                Long-Named Button 4
              </span>
            </button>
          </div>
          <div
            style={{
              gridRow: 3,
              gridColumn: "2 / span 2",
              padding: "10px 0 0 0",
            }}
          >
            <button>5</button>
          </div>
          <div
            style={{
              gridRow: 1,
              gridColumn: "1 / span 3",
              border: "1px solid Red",
            }}
          />
          <div
            style={{
              gridRow: 2,
              gridColumn: "1 / span 3",
              border: "1px solid Red",
            }}
          />
          <div
            style={{
              gridRow: 3,
              gridColumn: "1 / span 3",
              border: "1px solid Red",
            }}
          />
          <div
            style={{
              gridColumn: 1,
              gridRow: "1 / span 3",
              border: "1px solid Red",
            }}
          />
          <div
            style={{
              gridColumn: 2,
              gridRow: "1 / span 3",
              border: "1px solid Red",
            }}
          />
          <div
            style={{
              gridColumn: 3,
              gridRow: "1 / span 3",
              border: "1px solid Red",
            }}
          />
        </div>
      </div>
      <p></p>
      <hr />
      <h2>Example with Grid Constraints</h2>
      <p>
        We have modified the previous example so that the buttons now expand
        horizontally to occupy the entire space within their grid cell, by
        applying GridConstraints layout with horizontal fill to the grid cell:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div style="display: grid;">
  <div style="grid-row: 1;
              grid-column: 1;"
       class="GridConstraints"
       data-fill="horizontal">
    <button>
      Button 1
    </button>
  </div>
  <div style="grid-row: 1;
              grid-column: 2;"
       class="GridConstraints"
       data-fill="horizontal">
    <button>
      Button 2
    </button>
  </div>
  <div style="grid-row: 1;
              grid-column: 3;"
       class="GridConstraints"
       data-fill="horizontal">
    <button>
      Button 3
    </button>
  </div>
  <div style="grid-row: 2;
              grid-column: 1 / span 3;"
       class="GridConstraints"
       data-fill="horizontal">
    <button>
      <span class="EmptyBorder"
            style="padding: 40px 0;">
        Long-Named Button 4
      </span>
    </button>
  </div>
  <div style="grid-row: 3;
              grid-column: 2 / span 2;
              padding: 10px 0 0 0;"
       class="GridConstraints"
       data-fill="horizontal">
    <button>
      5
    </button>
  </div>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        When you run this code, you will see a panel with five buttons stretched
        horizontally within its cell. To aid the comprehension of the preceding
        code, a red grid was overlaid onto the image:
      </p>
      <div className="BorderLayout" style={{ backgroundColor: "LightGray" }}>
        <div style={{ display: "grid" }}>
          <div
            style={{ gridRow: 1, gridColumn: 1 }}
            className="GridConstraints"
            data-fill="horizontal"
          >
            <button>Button 1</button>
          </div>
          <div
            style={{ gridRow: 1, gridColumn: 2 }}
            className="GridConstraints"
            data-fill="horizontal"
          >
            <button>Button 2</button>
          </div>
          <div
            style={{ gridRow: 1, gridColumn: 3 }}
            className="GridConstraints"
            data-fill="horizontal"
          >
            <button>Button 3</button>
          </div>
          <div
            style={{ gridRow: 2, gridColumn: "1 / span 3" }}
            className="GridConstraints"
            data-fill="horizontal"
          >
            <button>
              <span className="EmptyBorder" style={{ padding: "40px 0" }}>
                Long-Named Button 4
              </span>
            </button>
          </div>
          <div
            style={{
              gridRow: 3,
              gridColumn: "2 / span 2",
              padding: "10px 0 0 0",
            }}
            className="GridConstraints"
            data-fill="horizontal"
          >
            <button>5</button>
          </div>
          <div
            style={{
              gridRow: 1,
              gridColumn: "1 / span 3",
              border: "1px solid Red",
            }}
          />
          <div
            style={{
              gridRow: 2,
              gridColumn: "1 / span 3",
              border: "1px solid Red",
            }}
          />
          <div
            style={{
              gridRow: 3,
              gridColumn: "1 / span 3",
              border: "1px solid Red",
            }}
          />
          <div
            style={{
              gridColumn: 1,
              gridRow: "1 / span 3",
              border: "1px solid Red",
            }}
          />
          <div
            style={{
              gridColumn: 2,
              gridRow: "1 / span 3",
              border: "1px solid Red",
            }}
          />
          <div
            style={{
              gridColumn: 3,
              gridRow: "1 / span 3",
              border: "1px solid Red",
            }}
          />
        </div>
      </div>
      <p>Here's the result without the grid lines:</p>
      <div className="BorderLayout" style={{ backgroundColor: "LightGray" }}>
        <div style={{ display: "grid" }}>
          <div
            style={{ gridRow: 1, gridColumn: 1 }}
            className="GridConstraints"
            data-fill="horizontal"
          >
            <button>Button 1</button>
          </div>
          <div
            style={{ gridRow: 1, gridColumn: 2 }}
            className="GridConstraints"
            data-fill="horizontal"
          >
            <button>Button 2</button>
          </div>
          <div
            style={{ gridRow: 1, gridColumn: 3 }}
            className="GridConstraints"
            data-fill="horizontal"
          >
            <button>Button 3</button>
          </div>
          <div
            style={{ gridRow: 2, gridColumn: "1 / span 3" }}
            className="GridConstraints"
            data-fill="horizontal"
          >
            <button>
              <span className="EmptyBorder" style={{ padding: "40px 0" }}>
                Long-Named Button 4
              </span>
            </button>
          </div>
          <div
            style={{
              gridRow: 3,
              gridColumn: "2 / span 2",
              padding: "10px 0 0 0",
            }}
            className="GridConstraints"
            data-fill="horizontal"
          >
            <button>5</button>
          </div>
        </div>
      </div>
      <p>
        If you want to learn more about GridConstraints, refer to the{" "}
        <Link to="/grid-constraints/">How to Use GridConstraints</Link>{" "}
        tutorial.
      </p>
      <p></p>
      <NoteAboutSimpaCSS subject="Simpa CSS Layouts" />
    </Layout>
  );
};

export default CSSGridLayoutPage;

export const Head = () => <SEO title={title} description={description} />;
