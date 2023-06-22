import CopyToClipboardSyntaxHighlighter from "components/CopyToClipboardSyntaxHighlighter";
import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const title: string = "How to Use Scrollable Panes with HTML and CSS";
const description: string =
  "Discover how to implement scrollable panes in HTML and CSS to enhance the usability of components with overflowing content. Learn how ScrollPane provides a scrollable view of a component or a group of components, allowing users to navigate vertically and/or horizontally to access the complete content. Explore an example code snippet that demonstrates the usage of ScrollPane, where a div container with the ScrollPane class encapsulates a paragraph with lengthy text, showcasing the scrolling functionality. Find out how ScrollPane improves the user experience by automatically adding scrollbars when the content exceeds the visible area. Additionally, learn about the overlay attribute that, in some browsers, enables scrollbars to overlay the content without affecting its dimensions.";

const ScrollPanePage = ({ path }: PageProps) => {
  return (
    <Layout path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use Scrollable Panes</span>
        <span>with HTML and CSS</span>
      </h1>
      <p>
        ScrollPane is a tool for creating scrollable views of components or
        groups of components. It is particularly useful when the content within
        a component exceeds the available space, enabling users to scroll
        vertically and/or horizontally to access the entire content.
      </p>
      <p>
        The main purpose of ScrollPane is to enhance the usability of components
        that contain more content than can be displayed within the available
        area. By incorporating ScrollPane, scrollbars can be added to the
        container, facilitating navigation and viewing of content that extends
        beyond the visible boundaries.
      </p>
      <p>Here's an example illustrating how to utilize ScrollPane:</p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css" />
</head>
<body>
  <div class="ScrollPane"
       style="width: 200px;
              white-space: nowrap;
              border: 1px solid Gray;
              background-color: WhiteSmoke;">
    <p>This is a long text that requires scrolling.</p>
  </div>
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In this example, a div container with the class "ScrollPane" is created.
        Inside the div, a paragraph is included, serving as sample text that
        necessitates scrolling.
      </p>
      <p>
        Upon running this code, a panel with a scrollable paragraph will be
        displayed within the ScrollPane. The scrollbars will automatically
        appear when the text content extends beyond the visible area, enabling
        users to scroll and access the complete text.
      </p>
      <div className="CenterLayout">
        <div
          className="ScrollPane"
          style={{
            width: "200px",
            whiteSpace: "nowrap",
            border: "1px solid Gray",
            backgroundColor: "WhiteSmoke",
          }}
        >
          <p>This is a long text that requires scrolling.</p>
        </div>
      </div>
      <p></p>
      <hr />
      <h2>The Overlay Attribute</h2>
      <p>
        Certain browsers offer the option to display scrollbars on top of the
        content, rather than occupying additional space within the container.
        This overlay effect allows the content to maintain its original
        dimensions without being affected by the space occupied by the
        scrollbars.
      </p>
      <p>
        To enable scrollbar overlay, you can include the data-overlay attribute
        as follows:
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css" />
</head>
<body>
  <div class="ScrollPane"
       data-overlay
       style="width: 200px;
              white-space: nowrap;
              border: 1px solid Gray;
              background-color: WhiteSmoke;">
    <p>This is a long text that requires scrolling.</p>
  </div>
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        When executing this code, a semi-transparent scrollbar will appear when
        hovering over the scrollpane, provided that your browser natively
        supports scrollbar overlay.
      </p>
      <div className="CenterLayout">
        <div
          className="ScrollPane"
          data-overlay
          style={{
            maxWidth: "200px",
            whiteSpace: "nowrap",
            border: "1px solid Gray",
            backgroundColor: "WhiteSmoke",
          }}
        >
          <p>This is a long text that requires scrolling.</p>
        </div>
      </div>
      <p></p>
      <NoteAboutSimpaCSS subject="Simpa CSS Components" />
    </Layout>
  );
};

export default ScrollPanePage;

export const Head = () => <SEO title={title} description={description} />;
