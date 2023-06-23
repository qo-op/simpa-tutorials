import CopyToClipboardSyntaxHighlighter from "components/CopyToClipboardSyntaxHighlighter";
import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "How to Use Frames with HTML and CSS";
const description: string = "";

const ScrollPanePage = ({ path }: PageProps) => {
  return (
    <Layout path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use Frames</span>
        <span>with HTML and CSS</span>
      </h1>
      <p>
        The Frame class is used to represent a frame within a Single Page
        Application (SPA). It covers the entire visible area of the browser
        window, occupying the entire viewport.
      </p>
      <p>Here's an example illustrating how to utilize Frame:</p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
</head>
<body class="Frame"
      style="background-color: LightGray">
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>In this example, we apply the class "Frame" to the body element.</p>
      <p>When you run this code, the browser screen will appear light gray.</p>
      <p></p>
      <NoteAboutSimpaCSS subject="Simpa CSS Components" />
    </Layout>
  );
};

export default ScrollPanePage;

export const Head = () => <SEO title={title} description={description} />;
