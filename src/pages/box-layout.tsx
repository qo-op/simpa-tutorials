import React from "react";
import { PageProps } from "gatsby";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";

const BorderLayoutPage = ({ path }: PageProps) => {
  return (
    <Layout pageTitle={"How to Use BoxLayout with HTML and CSS"} path={path}>
      <h1 className="BoxLayout" data-axis="page-axis" style={{ textAlign: "center" }}>
        <span>How to Use BoxLayout</span>
        <span>with HTML and CSS</span>
      </h1>
      <p>
        <code>BoxLayout</code> is a layout manager that arranges components in a
        single row or column. It's useful when you need to lay out components in
        a specific direction, such as in a toolbar.
      </p>
      <hr />
      <h2>Example with components arranged horizontally</h2>
      <p>
        To use <code>BoxLayout</code>, you first need to create a container to
        hold your components. This can be a <code>div</code> element. Once you
        have your container, you can set its layout to{" "}
        <code>BoxLayout</code> by adding "<code>BoxLayout</code>" to its{" "}
        <code>class</code> attribute.
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="BoxLayout"
     data-axis="line-axis"
     style="height: 100px">
  <button>Button</button>
  <button>Another<br />button</button>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        In this example, we're setting the <code>div</code>'s layout to{" "}
        <code>BoxLayout</code> and specifying that we want components to be laid
        out horizontally by setting <code>data-axis</code> to{" "}
        <code>"line-axis"</code>.
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
      <h2>Example with components arranged vertically</h2>
      <p>
        To use BoxLayout to lay out components vertically, you need to set{" "}
        <code>data-axis</code> to <code>"page-axis"</code>. Here's an example:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="BoxLayout"
     data-axis="page-axis"
     style="height: 200px;">
  <button>First</button>
  <button>Second</button>
  <button>Third</button>
  <button>Fourth</button>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        When we run this code, we will see a panel with buttons laid out
        vertically, from top to bottom, like this:
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
      <h2>Horizontal alignment of the components</h2>
      <p>
        To stretch components horizontally within a vertical{" "}
        <code>BoxLayout</code> container, you need to set the{" "}
        <code>data-alignment-x</code> to <code>"stretch"</code>. If no{" "}
        <code>data-alignment-x</code> is specified, then the components are
        aligned to the center of the vertical container by default.
      </p>
      <p>
        For example, to stretch components horizontally within a{" "}
        <code>BoxLayout</code> container with a vertical layout, you would set
        the <code>data-alignment-x</code> to <code>"stretch"</code>:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="BoxLayout"
     data-axis="page-axis"
     data-alignment-x="stretch"
     style="height: 200px;">
  <button>First</button>
  <button>Second</button>
  <button>Third</button>
  <button>Fourth</button>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        After running this code, we will see a panel with stretched buttons.
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
      <p>
        There are other values that can be used to control the horizontal
        alignment of <code>BoxLayout</code> components:
      </p>
      <ul>
        <li>
          <div>
            <code>data-alignment-x="start"</code>: This value aligns the
            components to the left edge of the container
          </div>
          <br />
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
        </li>
        <br />
        <li>
          <div>
            <code>data-alignment-x="end"</code>: This value aligns the
            components to the right edge of the container
          </div>
          <br />
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
          <br />
          <div>
            On a <code>BoxLayout</code> container with a horizontal layout, the
            components will be justified to the right edge
          </div>
          <br />
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
        <br />
        <li>
          <div>
            <code>data-alignment-x="center"</code>: This value centers the
            components horizontally within a horizontal container
          </div>
          <br />
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
      <h2>Vertical alignment of the components</h2>
      <p>
        Note that the x alignment property of a <code>BoxLayout</code> container
        only affects the horizontal position of the child components. The
        vertical position of the child components is determined by the y
        alignment property, which can be set separately using{" "}
        <code>data-alignment-y</code> attribute.
      </p>
      <p>
        For example, the following code sets the y alignment of a horizontal{" "}
        <code>BoxLayout</code> container to <code>"stretch"</code>:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="BoxLayout"
     data-axis="line-axis"
     data-alignment-y="stretch"
     style="height: 100px">
  <button>Button</button>
  <button>Another<br />button</button>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        After running this code, we will see a panel with stretched buttons laid
        out horizontally.
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
      <p>
        There are other values that can be used to control the vertical
        alignment of BoxLayout components:
      </p>
      <ul>
        <li>
          <div>
            <code>data-alignment-y="start"</code>: This value aligns the
            components to the top edge of the container
          </div>
          <br />
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
        </li>
        <br />
        <li>
          <div>
            <code>data-alignment-y="end"</code>: This value aligns the
            components to the bottom edge of the container
          </div>
          <br />
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
          <br />
          <div>
            On a <code>BoxLayout</code> container with a vertical layout, the
            components will be justified to the bottom edge
          </div>
          <br />
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
        <br />
        <li>
          <div>
            <code>data-alignment-y="center"</code>: This value centers the
            components vertically within a vertical container
          </div>
          <br />
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
      <h2>Combining the x and y alignments</h2>
      <p>
        You can combine the x and y alignments of a <code>BoxLayout</code>{" "}
        container to position the child components both horizontally and
        vertically within the container.
      </p>
      <p>
        Note that the x and y alignments are independent of each other, so you
        can set them to different values to achieve different positioning
        effects.
      </p>
      <p></p>
      <hr />
      <h2>Adding gaps</h2>
      <p>
        To create gaps between components in <code>BoxLayout</code>, you can use
        the <code>gap</code> style property.
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="BoxLayout"
     data-axis="line-axis"
     style="gap: 10px; height: 100px">
  <button>Button 1</button>
  <button>Button 2</button>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        In this example, we create a container with the gap set to 10 pixels.
        When we run this code, we will see two buttons with a gap between them.
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
      <NoteAboutSimpaCSS subject="Simpa Layouts"/>
    </Layout>
  );
};

export default BorderLayoutPage;
