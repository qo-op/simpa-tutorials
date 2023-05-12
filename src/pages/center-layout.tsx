import React from "react";
import { PageProps } from "gatsby";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Layout from "components/Layout";
import NoteAboutLayouts from "components/NoteAboutLayouts";

const CenterLayoutPage = ({ path }: PageProps) => {
  return (
    <Layout pageTitle={"How to Use CenterLayout with HTML and CSS"} path={path}>
      <h1 className="BoxLayout" data-axis="page-axis">
        <span>How to Use CenterLayout</span>
        <span>with HTML and CSS</span>
      </h1>
      <p>
        <code>CenterLayout</code> is a layout manager that is used to center a
        component both horizontally and vertically.
      </p>
      <p>
        To use <code>CenterLayout</code>, you first need to create a container
        to hold your component. This can be a <code>div</code> element. Once you
        have your container, you can set its layout manager to{" "}
        <code>CenterLayout</code> by adding "<code>CenterLayout</code>" to its{" "}
        <code>class</code> attribute.
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
        <code>button</code> with the text "<code>Click me!</code>" to the
        container.
      </p>
      <p>
        When we run this code, we will see a panel with a button in the center,
        like this:
      </p>
      <div
        className="CenterLayout"
        style={{ height: "100px", backgroundColor: "LightGray" }}
      >
        <button>Click me!</button>
      </div>
      <p></p>
      <NoteAboutLayouts />
    </Layout>
  );
};

export default CenterLayoutPage;
