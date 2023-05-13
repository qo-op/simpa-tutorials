import React from "react";
import { PageProps } from "gatsby";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Layout from "components/Layout";
import NoteAboutLayouts from "components/NoteAboutLayouts";

const BorderLayoutPage = ({ path }: PageProps) => {
  return (
    <Layout pageTitle={"How to Use BorderLayout with HTML and CSS"} path={path}>
      <h1 className="FlowLayout" style={{ textAlign: "center" }}>
        <span>How to Use BorderLayout</span>
        <span>with HTML and CSS</span>
      </h1>
      <p>
        <code>BorderLayout</code> is a type of layout manager that is used to
        arrange and organize components in a container. It divides the container
        into five regions: <code>PageStart</code>, <code>PageEnd</code>,{" "}
        <code>LineStart</code>, <code>LineEnd</code> and <code>Center</code>.
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
      <h2>Example with two components</h2>
      <p>
        Here's an example of using <code>BorderLayout</code> to create a simple
        user interface with a text and a button:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="BorderLayout"
     style="height: 100px;">
  <div class="PageStart">
    <span>Hello, World!</span>
  </div>
  <button>Click me!</button>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        To specify a region for a component, wrap the component in a{" "}
        <code>div</code> element with the <code>class</code> attribute set to{" "}
        <code>"PageStart"</code>, <code>"PageEnd"</code>,{" "}
        <code>"LineStart"</code> or <code>"LineEnd"</code> regions.
      </p>
      <p>
        If no region is specified for a component, then the component is placed
        in the <code>Center</code> region by default.
      </p>
      <p>
        In this example, we create a <code>div</code> container with{" "}
        <code>style="height: 100px;"</code> and set its <code>class</code> to{" "}
        <code>"BorderLayout"</code>. We then add a wrapped <code>span</code>{" "}
        that says "<code>Hello, World!</code>" to the <code>PageStart</code>{" "}
        region of the container. We add a <code>button</code> with the text "
        <code>Click me!</code>" to the container. Since we didn't specify any
        region, the <code>button</code> is automatically placed in the{" "}
        <code>Center</code> region of the container.
      </p>
      <p>
        When we run this code, we will see a panel with the text at the top and
        the button in the center, like this:
      </p>
      <div
        className="BorderLayout"
        style={{ height: "100px", backgroundColor: "LightGray" }}
      >
        <div className="PageStart">
          <span>Hello, World!</span>
        </div>
        <button>Click me!</button>
      </div>
      <p></p>
      <hr />
      <h2>Adding gaps</h2>
      <p>
        To create gaps between components in <code>BorderLayout</code>, you can
        add a margin to the component placed in the <code>center</code> region.
        For example, if you want to create a gap between a component in the{" "}
        <code>page-start</code> region and a component in the{" "}
        <code>center</code> region, you can add a margin to the{" "}
        <code>center</code> component, as seen below:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="BorderLayout"
     style="height: 100px;">
  <div class="PageStart">
    <button>Button 1</button>
  </div>
  <button style="margin-block-start: 10px">Button 2</button>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        After running this code, we will see a panel with two buttons with a gap
        between them.
      </p>
      <div
        className="BorderLayout"
        style={{ height: "100px", backgroundColor: "LightGray" }}
      >
        <div className="PageStart">
          <button>Button 1</button>
        </div>
        <button style={{ marginBlockStart: "10px" }}>Button 2</button>
      </div>
      <p></p>
      <NoteAboutLayouts />
    </Layout>
  );
};

export default BorderLayoutPage;
