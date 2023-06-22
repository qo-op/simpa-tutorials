import CopyToClipboardSyntaxHighlighter from "components/CopyToClipboardSyntaxHighlighter";
import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const title: string = "How to Use Center Layouts with HTML and CSS";
const description: string =
  "Discover how to effectively utilize Center Layouts in HTML and CSS to center components both horizontally and vertically within a container. Learn how to implement CenterLayout, a powerful layout manager, by creating a container using a div element and setting its class attribute to CenterLayout. Explore a practical example where a button is centered using CenterLayout, providing a visually appealing user interface.";

const CenterLayoutPage = ({ path }: PageProps) => {
  return (
    <Layout path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use Center Layouts</span>
        <span>with HTML and CSS</span>
      </h1>
      <p>
        CenterLayout is a layout manager that is used to center a component both
        horizontally and vertically.
      </p>
      <p>
        To use CenterLayout, you first need to create a container to hold your
        component. This can be a &lt;div&gt; element. Once you have your
        container, you can set its layout to CenterLayout by adding
        "CenterLayout" to its class attribute.
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://qo-op.github.io/simpa/simpa.css" />
</head>
<body>
  <!-- Container with CenterLayout -->
  <div class="CenterLayout"
       style="height: 100px;
              background-color: LightGray">
    <button>Button</button>
  </div>
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In this example, we're setting the div's layout to CenterLayout to
        center its content. We then add a button with the text "Click me!" to
        the container.
      </p>
      <p>
        When you run this code, you will see a panel with a button in the
        center, like this:
      </p>
      <div
        className="CenterLayout"
        style={{ height: "100px", backgroundColor: "LightGray" }}
      >
        <button>Button</button>
      </div>
      <p></p>
      <NoteAboutSimpaCSS subject="Simpa CSS Layouts" />
    </Layout>
  );
};

export default CenterLayoutPage;

export const Head = () => <SEO title={title} description={description} />;
