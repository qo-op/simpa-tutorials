import React from "react";
import type { HeadFC } from "gatsby";
import Layout from "components/Layout";

const pageTitle: string = "How to Use BorderLayout";

class BorderLayoutPage extends React.Component {
  render = () => {
    return (
      <Layout pageTitle={pageTitle}>
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
        <p>
          Here's an example of using <code>BorderLayout</code> to create a
          simple user interface with a text and a button:
        </p>
        <div style={{ backgroundColor: "black" }}>
          <code className="Code">
            <div>{"..."}</div>
            <div>
              {"<"}
              <span style={{ color: "blue" }}>div</span>
              <span style={{ color: "lightblue" }}> class</span>=
              <span style={{ color: "orange" }}>"BorderLayout"</span>
              {">"}
            </div>
            <div>
              &nbsp;&nbsp;
              {"<"}
              <span style={{ color: "blue" }}>span</span>
              <span style={{ color: "lightblue" }}> data-constraints</span>=
              <span style={{ color: "orange" }}>"page-start"</span>
              {">"}
              {"Hello, World!"}
              {"<"}
              <span style={{ color: "blue" }}>/span</span>
              {">"}
            </div>
            <div>
              &nbsp;&nbsp;
              {"<"}
              <span style={{ color: "blue" }}>button</span>
              {">"}
              {"Click me!"}
              {"<"}
              <span style={{ color: "blue" }}>/button</span>
              {">"}
            </div>
            <div>
              {"<"}
              <span style={{ color: "blue" }}>/div</span>
              {">"}
            </div>
            <div>{"..."}</div>
          </code>
        </div>
        <p>
          In a BorderLayout, if no <code>data-constraints</code> are specified
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
        <p>
          In order to use BorderLayout in your HTML file, you need to include a
          link to the Simpa stylesheet in the head section of your HTML
          document.
        </p>
        <div style={{ backgroundColor: "black" }}>
          <code className="Code">
            <div>
              {"<"}
              <span style={{ color: "blue" }}>head</span>
              {">"}
            </div>
            <div>
              &nbsp;&nbsp;
              {"<"}
              <span style={{ color: "blue" }}>link</span>
              <span style={{ color: "lightblue" }}> rel</span>=
              <span style={{ color: "orange" }}>"stylesheet"</span>
              <span style={{ color: "lightblue" }}> href</span>=
              <span style={{ color: "orange" }}>
                "https://qo-op.github.io/simpa/simpa.css"
              </span>
              {">"}
            </div>
            <div>
              {"<"}
              <span style={{ color: "blue" }}>/head</span>
              {">"}
            </div>
          </code>
        </div>
        <p>
          It's important to note that the URL in the <code>href</code> attribute
          points to an external resource on the internet. This means that your
          web page will only be able to use Simpa if it has a working internet
          connection and can access the Simpa CDN (Content Delivery Network) at
          the specified URL. If you want to use Simpa offline or on a local
          server, you can download the Simpa stylesheet and include it in your
          project directory instead of using the CDN.
        </p>
        <p></p>
      </Layout>
    );
  };
}

export const Head: HeadFC = () => (
  <>
    <title>{pageTitle}</title>
    <script src="https://qo-op.github.io/simpa/simpa.js"></script>
  </>
);

export default BorderLayoutPage;
