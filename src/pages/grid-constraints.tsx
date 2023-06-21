import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const title: string = "How to Use Grid Constraints with HTML and CSS";
const description: string =
  "Learn how to effectively utilize Grid Constraints in HTML and CSS to position and resize components within a container. Discover the power of the data-anchor attribute, allowing you to specify the precise position of a component, whether it's centered, aligned with edges, or placed in corners. Explore examples showcasing various data-anchor values and their interpretations in a container layout. Additionally, dive into the flexibility provided by the data-fill attribute, enabling you to resize components horizontally, vertically, or in both directions to efficiently utilize available space. Combine the data-anchor and data-fill attributes to achieve versatile layouts tailored to your design requirements.";

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
        GridConstraints is a layout manager that is used to lay out a single
        component in a container. It is used to specify how a component should
        be positioned as well as how the component should be resize within its
        container. It has two attributes: data-anchor and data-fill
      </p>
      <hr />
      <h2>The Anchor Attribute</h2>
      <p>
        The data-anchor attribute in the GridConstraints layout is used to
        specify the position of a component within its container.
      </p>
      <p>
        Here's an example of using GridConstraints layout with the data-anchor
        attribute:
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
        In this example, we create a div container, set its class attribute to
        "GridConstraints" and its data-anchor attribute to center. We then add a{" "}
        button with the text "Click me!" to the container.
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
        The data-anchor attribute can be set to one of the following values:
      </p>
      <ul>
        <li>
          center: Centers the component within its container (default).
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
          page-start: Aligns the component with the top edge of its container.
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
          page-end: Aligns the component with the bottom edge of its container.
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
          line-start: Aligns the component with the left edge of its container.
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
          line-end: Aligns the component with the right edge of its container.
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
          first-line-start: Aligns the component with the top-left corner of its
          container.
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
          first-line-end: Aligns the component with the top-right corner of its
          container.
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
          last-line-start: Aligns the component with the bottom-left corner of
          its container.
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
          last-line-end: Aligns the component with the bottom-right corner of
          its container.
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
        Here is a picture that summarizes how these data-anchor values are
        interpreted in a container.
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
        The data-fill attribute in the GridConstraints layout is used to specify
        how a component should be resized within its container.
      </p>
      <p>
        Here's an example of how to use the data-fill attribute to specify the
        fill behavior for a component:
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
        In this example, we create a div container, sets its class to
        GridConstraints and set its data-fill attribute to vertical. This will
        resize the button vertically to fill the available space in its
        container, but will not resize it horizontally:
      </p>
      <div
        className="GridConstraints"
        data-fill="vertical"
        style={{ height: "100px", backgroundColor: "LightGray" }}
      >
        <button>Click me!</button>
      </div>
      <p>The data-fill attribute can be set to one of the following values:</p>
      <ul>
        <li>
          none: The component is not resized (default).
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
          horizontal: The component is resized horizontally to fill the
          available space in its container.
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
          vertical: The component is resized vertically to fill the available
          space in its container.
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
          both: The component is resized both horizontally and vertically to
          fill the available space in its container.
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
        You can combine the data-anchor and data-fill attributes in a
        GridConstraints. As already seen above, the data-anchor attribute
        determines where the component should be placed within its container,
        while the data-fill attribute determines how the component should be
        resized within its container. By combining these two attributes, you can
        position and resize components in a variety of ways to achieve the
        desired layout.
      </p>
      <p></p>
      <NoteAboutSimpaCSS subject="Simpa CSS Layouts" />
    </Layout>
  );
};

export default GridConstraintsPage;

export const Head = () => <SEO title={title} description={description} />;
