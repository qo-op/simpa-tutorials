import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Layout from "components/Layout";
import NoteAboutLayouts from "components/NoteAboutLayouts";

class BorderLayoutPage extends React.Component {
  render = () => {
    return (
      <Layout pageTitle={"How to Use BoxLayout with HTML and CSS"}>
        <h1 className="BoxLayout" data-axis="page-axis">
          <span>How to Use BoxLayout</span>
          <span>with HTML and CSS</span>
        </h1>
        <p>
          <code>BoxLayout</code> is a layout manager that arranges components in
          a single row or column. It's useful when you need to lay out
          components in a specific direction, such as in a toolbar.
        </p>
        <hr />
        <h2>Example with components arranged horizontally</h2>
        <p>
          To use <code>BoxLayout</code>, you first need to create a container to
          hold your components. This can be a <code>div</code> element. Once you
          have your container, you can set its layout manager to{" "}
          <code>BoxLayout</code> by adding <code>"BoxLayout"</code> to its{" "}
          <code>class</code> attribute.
        </p>
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...\n` +
            `<div class="BoxLayout"\n` +
            `     data-axis="line-axis"\n` +
            `     style="gap: 5px;">\n` +
            `  <button>Button</button>\n` +
            `  <button>Another<br />button</button>\n` +
            `</div>\n` +
            `...`}
        </SyntaxHighlighter>
        <p>
          In this example, we're setting the <code>div</code>'s layout to{" "}
          <code>BoxLayout</code> and specifying that we want components to be
          laid out horizontally by setting <code>data-axis</code> to{" "}
          <code>"line-axis"</code>.
        </p>
        <div
          className="BoxLayout"
          data-axis="line-axis"
          style={{ gap: "5px", backgroundColor: "lightgray" }}
        >
          <button>Button</button>
          <button>
            Another
            <br />
            button
          </button>
        </div>
        <p />
        <hr />
        <h2>Example with components arranged vertically</h2>
        <p>
          To use BoxLayout to lay out components vertically, you need to set{" "}
          <code>data-axis</code> to <code>"page-axis"</code>. Here's an example:
        </p>
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...\n` +
            `<div class="BoxLayout"\n` +
            `     data-axis="page-axis"\n` +
            `     style="gap: 5px;">\n` +
            `  <button>First</button>\n` +
            `  <button>Second</button>\n` +
            `  <button>Third</button>\n` +
            `  <button>Fourth</button>\n` +
            `</div>\n` +
            `...`}
        </SyntaxHighlighter>
        <p>
          When we run this code, we will see a panel with buttons laid out
          vertically, from top to bottom, like this:
        </p>
        <div
          className="BoxLayout"
          data-axis="page-axis"
          style={{ gap: "5px", backgroundColor: "lightgray" }}
        >
          <button>First</button>
          <button>Second</button>
          <button>Third</button>
          <button>Fourth</button>
        </div>
        <p />
        <hr />
        <h2>Example with alignment set to "stretch"</h2>
        <p>
          To stretch components within a <code>BoxLayout</code> container, you
          need to set the <code>data-alignment</code> to <code>"stretch"</code>.
          If no <code>data-alignment</code> is specified, then the components
          are aligned to the center of the container by default.
        </p>
        <p>
          For example, to stretch components within a <code>BoxLayout</code>{" "}
          container with a vertical layout, you would set the{" "}
          <code>data-alignment</code> to <code>"stretch"</code>:
        </p>
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...\n` +
            `<div class="BoxLayout"\n` +
            `     data-axis="page-axis"\n` +
            `     data-alignment="stretch"\n` +
            `     style="gap: 5px;">\n` +
            `  <button>First</button>\n` +
            `  <button>Second</button>\n` +
            `  <button>Third</button>\n` +
            `  <button>Fourth</button>\n` +
            `</div>\n` +
            `...`}
        </SyntaxHighlighter>
        <p>
          After running this code, we will see a panel with stretched buttons.
        </p>
        <div
          className="BoxLayout"
          data-axis="page-axis"
          data-alignment="stretch"
          style={{ gap: "5px", backgroundColor: "lightgray" }}
        >
          <button>First</button>
          <button>Second</button>
          <button>Third</button>
          <button>Fourth</button>
        </div>
        <p></p>
        <NoteAboutLayouts />
        <p></p>
      </Layout>
    );
  };
}

export default BorderLayoutPage;
