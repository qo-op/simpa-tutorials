import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Layout from "components/Layout";
import NoteAboutLayouts from "components/NoteAboutLayouts";

class BorderLayoutPage extends React.Component {
  render = () => {
    return (
      <Layout pageTitle={"How to Use BorderLayout\nwith HTML and CSS"}>
        <p>
          <code>BorderLayout</code> is a type of layout manager that is used to
          arrange and organize components in a container. It divides the
          container into five regions: <code>page-start</code> (north),{" "}
          <code>page-end</code> (south), <code>line-start</code> (west),{" "}
          <code>line-end</code> (east) and <code>center</code>.
        </p>
        <div className="BorderLayout" style={{ height: "8rem" }}>
          <button data-constraints="page-start">page-start</button>
          <button data-constraints="line-start">line-start</button>
          <button>center</button>
          <button data-constraints="line-end">line-end</button>
          <button data-constraints="page-end">page-end</button>
        </div>
        <p>
          When components are added to a container with{" "}
          <code>BorderLayout</code>, they are placed in one of these five
          regions according to the rules of the layout. The{" "}
          <code>page-start</code> region is placed at the top, the{" "}
          <code>page-end</code> region at the bottom, the{" "}
          <code>line-start</code> region on the left side, the{" "}
          <code>line-end</code> region on the right side and the{" "}
          <code>center</code> region in the middle.
        </p>
        <p>
          The components placed in the <code>page-start</code> and{" "}
          <code>page-end</code> regions are sized to their preferred height and
          stretched to the full width of the container. The components placed in
          the <code>line-start</code> and <code>line-end</code> regions are
          sized to their preferred width and stretched to the full height of the
          container. The component placed in the <code>center</code> region is
          stretched to fill the remaining space in the container.
        </p>
        <hr />
        <h2>Example with two components</h2>
        <p>
          Here's an example of using <code>BorderLayout</code> to create a
          simple user interface with a text and a button:
        </p>
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...\n` +
            `<div class="BorderLayout">\n` +
            `  <span data-constraints="page-start">Hello, World!</span>\n` +
            `  <button>Click me!</button>\n` +
            `</div>\n` +
            `...`}
        </SyntaxHighlighter>
        <p>
          In a BorderLayout, if no <code>data-constraints</code> is specified
          for a component, then the component is placed in the{" "}
          <code>center</code> region by default.
        </p>
        <p>
          In this example, we create a <code>div</code> and set its{" "}
          <code>class</code> to <code>"BorderLayout"</code>. We then add a{" "}
          <code>span</code> that says "Hello, World!" to the{" "}
          <code>page-start</code> region of the <code>div</code>. We add a{" "}
          <code>button</code> with the text "Click me!" to the <code>div</code>,
          without any <code>data-constraints</code>. Since we didn't specify any{" "}
          <code>data-constraints</code>, the <code>button</code> is
          automatically placed in the center region of the <code>div</code>.
        </p>
        <p>
          When we run this code, we will see a panel with the text at the top
          and the button in the center, like this:
        </p>
        <div className="BorderLayout" style={{ backgroundColor: "lightgray" }}>
          <span data-constraints="page-start">Hello, World!</span>
          <button>Click me!</button>
        </div>
        <p />
        <hr />
        <h2>Adding gaps</h2>
        <p>
          To create gaps between components in <code>BorderLayout</code>, you
          can add a margin to the component placed in the <code>center</code>{" "}
          region. For example, if you want to create a gap between a component
          in the <code>page-start</code> region and a component in the{" "}
          <code>center</code> region, you can add a margin to the{" "}
          <code>center</code> component.
        </p>
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...\n` +
            `<div class="BorderLayout">\n` +
            `  <button data-constraints="page-start">Button 1</button>\n` +
            `  <button style="margin-block-start: 5px">Button 2</button>\n` +
            `</div>\n` +
            `...`}
        </SyntaxHighlighter>
        <p>After running this code, we will see a panel with two buttons.</p>
        <div className="BorderLayout" style={{ backgroundColor: "lightgray" }}>
          <button data-constraints="page-start">Button 1</button>
          <button style={{ marginBlockStart: "5px" }}>Button 2</button>
        </div>
        <p />
        <NoteAboutLayouts />
        <p />
      </Layout>
    );
  };
}

export default BorderLayoutPage;
