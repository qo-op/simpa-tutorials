import React from "react";
import { PageProps } from "gatsby";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";

const title: string = "How to Use Center Layouts with HTML and CSS";
const description: string = "This tutorial shows how to use center layouts (CenterLayout) using HTML and CSS.";

const CenterLayoutPage = ({ path }: PageProps) => {
  return (
    <Layout title={title} path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use Center Layouts</span>
        <span>with HTML and CSS</span>
      </h1>
      <p>
        <code>CenterLayout</code> is a layout manager that is used to center a
        component both horizontally and vertically.
      </p>
      <p>
        To use <code>CenterLayout</code>, you first need to create a container
        to hold your component. This can be a <code>div</code> element. Once you
        have your container, you can set its layout to <code>CenterLayout</code>{" "}
        by adding <code>"CenterLayout"</code> to its <code>class</code>{" "}
        attribute.
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="CenterLayout"
     style="height: 100px">
  <button>Click me!</button>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        In this example, we're setting the <code>div</code>'s layout to{" "}
        <code>CenterLayout</code> to center its content. We then add a{" "}
        <code>button</code> with the text <code>"Click me!"</code> to the
        container.
      </p>
      <p>
        When you run this code, you will see a panel with a <code>button</code>{" "}
        in the center, like this:
      </p>
      <div
        className="CenterLayout"
        style={{ height: "100px", backgroundColor: "LightGray" }}
      >
        <button>Click me!</button>
      </div>
      <p></p>
      <NoteAboutSimpaCSS subject="Simpa CSS Layouts" />
    </Layout>
  );
};

export default CenterLayoutPage;

export const Head = () => <SEO title={title} description={description} />;
