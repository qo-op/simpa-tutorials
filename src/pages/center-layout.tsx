import CopyToClipboardSyntaxHighlighter from "components/CopyToClipboardSyntaxHighlighter";
import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

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
        CenterLayout is a layout manager that facilitates the centering of a
        component both horizontally and vertically within a container.
      </p>
      <p>
        To employ CenterLayout, you must first create a container to hold your
        component. This container can be represented by a &lt;div&gt; element.
        Once the container is established, you can apply the CenterLayout by
        adding the class attribute "CenterLayout" to it.
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
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
        In this example, the layout of the &lt;div&gt; is set to CenterLayout in
        order to center its content. A button with the text "Button" is added
        within the container.
      </p>
      <p>
        Upon executing this code, you will observe a panel with a button
        positioned in the center, as demonstrated below:
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
