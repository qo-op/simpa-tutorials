import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const title: string = "How to Use Grid Constraints with HTML and CSS";
const description: string =
  "This tutorial shows how to use grid constraints (GridConstraints) using HTML and CSS.";

const GridConstraintsPage = ({ path }: PageProps) => {
  return (
    <Layout path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use Grid Constraints</span>
        <span>with HTML and CSS</span>
      </h1>
      <p>
        <code>GridConstraints</code> is a layout manager that is used to lay out
        a single component in a container. It is used to specify how a component
        should be positioned as well as how the component should be resize
        within its container. It has two attributes: <code>data-anchor</code>{" "}
        and <code>data-fill</code>
      </p>
      <hr />
      <h2>The Anchor Attribute</h2>
      <p>
        The <code>data-anchor</code> attribute in the{" "}
        <code>GridConstraints</code> layout is used to specify the position of a
        component within its container.
      </p>
      <p>
        Here's an example of using <code>GridConstraints</code> layout with the{" "}
        <code>data-anchor</code> attribute:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="GridConstraints"
     data-anchor="center"
     style="height: 100px;">
  <button>Click me!</button>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        In this example, we create a <code>div</code> container, set its{" "}
        <code>class</code> attribute to <code>"GridConstraints"</code> and its{" "}
        <code>data-anchor</code> attribute to <code>center</code>. We then add a{" "}
        <code>button</code> with the text <code>"Click me!"</code> to the
        container.
      </p>
      <p>
        When you run this code, you will see a panel with a centered button:
      </p>
      <div
        className="GridConstraints"
        data-anchor="center"
        style={{ height: "100px", backgroundColor: "LightGray" }}
      >
        <button>Click me!</button>
      </div>
      <p>
        The <code>data-anchor</code> attribute can be set to one of the
        following values:
      </p>
      <ul>
        <li>
          <code>center</code>: Centers the component within its container
          (default).
          <div
            className="GridConstraints"
            data-anchor="center"
            style={{ height: "50px", backgroundColor: "LightGray" }}
          >
            <button>center</button>
          </div>
          <br />
        </li>
        <li>
          <code>page-start</code>: Aligns the component with the top edge of its
          container.
          <div
            className="GridConstraints"
            data-anchor="page-start"
            style={{ height: "50px", backgroundColor: "LightGray" }}
          >
            <button>page-start</button>
          </div>
          <br />
        </li>
        <li>
          <code>page-end</code>: Aligns the component with the bottom edge of
          its container.
          <div
            className="GridConstraints"
            data-anchor="page-end"
            style={{ height: "50px", backgroundColor: "LightGray" }}
          >
            <button>page-end</button>
          </div>
          <br />
        </li>
        <li>
          <code>line-start</code>: Aligns the component with the left edge of
          its container.
          <div
            className="GridConstraints"
            data-anchor="line-start"
            style={{ height: "50px", backgroundColor: "LightGray" }}
          >
            <button>line-start</button>
          </div>
          <br />
        </li>
        <li>
          <code>line-end</code>: Aligns the component with the right edge of its
          container.
          <div
            className="GridConstraints"
            data-anchor="line-end"
            style={{ height: "50px", backgroundColor: "LightGray" }}
          >
            <button>line-end</button>
          </div>
          <br />
        </li>
        <li>
          <code>first-line-start</code>: Aligns the component with the top-left
          corner of its container.
          <div
            className="GridConstraints"
            data-anchor="first-line-start"
            style={{ height: "50px", backgroundColor: "LightGray" }}
          >
            <button>first-line-start</button>
          </div>
          <br />
        </li>
        <li>
          <code>first-line-end</code>: Aligns the component with the top-right
          corner of its container.
          <div
            className="GridConstraints"
            data-anchor="first-line-end"
            style={{ height: "50px", backgroundColor: "LightGray" }}
          >
            <button>first-line-end</button>
          </div>
          <br />
        </li>
        <li>
          <code>last-line-start</code>: Aligns the component with the
          bottom-left corner of its container.
          <div
            className="GridConstraints"
            data-anchor="last-line-start"
            style={{ height: "50px", backgroundColor: "LightGray" }}
          >
            <button>last-line-start</button>
          </div>
          <br />
        </li>
        <li>
          <code>last-line-end</code>: Aligns the component with the bottom-right
          corner of its container.
          <div
            className="GridConstraints"
            data-anchor="last-line-end"
            style={{ height: "50px", backgroundColor: "LightGray" }}
          >
            <button>last-line-end</button>
          </div>
        </li>
      </ul>
      <p>
        Here is a picture that summarizes how these <code>data-anchor</code>{" "}
        values are interpreted in a container.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr",
          height: "100px",
          backgroundColor: "LightGray",
        }}
      >
        <div className="GridConstraints" data-anchor="first-line-start">
          <span>first-line-start</span>
        </div>
        <div className="GridConstraints" data-anchor="page-start">
          <span>page-start</span>
        </div>
        <div className="GridConstraints" data-anchor="first-line-end">
          <span>first-line-end</span>
        </div>
        <div className="GridConstraints" data-anchor="line-start">
          <span>line-start</span>
        </div>
        <div className="GridConstraints" data-anchor="center">
          <span>center</span>
        </div>
        <div className="GridConstraints" data-anchor="line-end">
          <span>line-end</span>
        </div>
        <div className="GridConstraints" data-anchor="last-line-start">
          <span>last-line-start</span>
        </div>
        <div className="GridConstraints" data-anchor="page-end">
          <span>page-end</span>
        </div>
        <div className="GridConstraints" data-anchor="last-line-end">
          <span>last-line-end</span>
        </div>
      </div>
      <p></p>
      <hr />
      <h2>The Fill Attribute</h2>
      <p>
        The <code>data-fill</code> attribute in the <code>GridConstraints</code>{" "}
        layout is used to specify how a component should be resized within its
        container.
      </p>
      <p>
        Here's an example of how to use the <code>data-fill</code> attribute to
        specify the fill behavior for a component:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="GridConstraints"
     data-fill="vertical"
     style="height: 100px;">
  <button>Click me!</button>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        In this example, we create a <code>div</code> container, sets its class
        to <code>GridConstraints</code> and set its <code>data-fill</code>{" "}
        attribute to <code>vertical</code>. This will resize the button
        vertically to fill the available space in its container, but will not
        resize it horizontally:
      </p>
      <div
        className="GridConstraints"
        data-fill="vertical"
        style={{ height: "100px", backgroundColor: "LightGray" }}
      >
        <button>Click me!</button>
      </div>
      <p>
        The <code>data-fill</code> attribute can be set to one of the following
        values:
      </p>
      <ul>
        <li>
          <code>none</code>: The component is not resized (default).
          <div
            className="GridConstraints"
            data-anchor="center"
            style={{ height: "100px", backgroundColor: "LightGray" }}
          >
            <button>none</button>
          </div>
          <br />
        </li>
        <li>
          <code>horizontal</code>: The component is resized horizontally to fill
          the available space in its container.
          <div
            className="GridConstraints"
            data-anchor="center"
            data-fill="horizontal"
            style={{ height: "100px", backgroundColor: "LightGray" }}
          >
            <button>horizontal</button>
          </div>
          <br />
        </li>
        <li>
          <code>vertical</code>: The component is resized vertically to fill the
          available space in its container.
          <div
            className="GridConstraints"
            data-anchor="center"
            data-fill="vertical"
            style={{ height: "100px", backgroundColor: "LightGray" }}
          >
            <button>vertical</button>
          </div>
          <br />
        </li>
        <li>
          <code>both</code>: The component is resized both horizontally and
          vertically to fill the available space in its container.
          <div
            className="GridConstraints"
            data-fill="both"
            style={{ height: "100px", backgroundColor: "LightGray" }}
          >
            <button>both</button>
          </div>
          <br />
        </li>
      </ul>
      <hr />
      <h2>Combining Anchor and Fill Attributes</h2>
      <p>
        You can combine the <code>data-anchor</code> and <code>data-fill</code>{" "}
        attributes in a GridConstraints. As already seen above, the{" "}
        <code>data-anchor</code> attribute determines where the component should
        be placed within its container, while the <code>data-fill</code>{" "}
        attribute determines how the component should be resized within its
        container. By combining these two attributes, you can position and
        resize components in a variety of ways to achieve the desired layout.
      </p>
      <p></p>
      <NoteAboutSimpaCSS subject="Simpa CSS Layouts" />
    </Layout>
  );
};

export default GridConstraintsPage;

export const Head = () => <SEO title={title} description={description} />;
