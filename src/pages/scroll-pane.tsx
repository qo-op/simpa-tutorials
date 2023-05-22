import React from "react";
import { PageProps } from "gatsby";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";

const title: string = "How to Use Scrollable Panes with HTML and CSS";
const description: string = "This tutorial shows how to use scrollable panes (ScrollPane) using HTML and CSS.";

const ScrollPanePage = ({ path }: PageProps) => {
  return (
    <Layout title={title} path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use Scrollable Panes</span>
        <span>with HTML and CSS</span>
      </h1>
      <p>
        <code>ScrollPane</code> provides a scrollable view of another component
        or a group of components. It is often used when the content within a
        component exceeds the available space, allowing users to scroll
        vertically and/or horizontally to view the entire content.
      </p>
      <p>
        The primary purpose of <code>ScrollPane</code> is to enhance the
        usability of components that contain more content than can be displayed
        within the available area. It may add scrollbars to the container, which
        can be used to navigate and view the content that extends beyond the
        visible boundaries.
      </p>
      <p>
        Here's an example of how to use <code>ScrollPane</code>:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="ScrollPane"
     style="width: 200px; white-space: nowrap;">
  <p>This is a long text that requires scrolling.</p>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        In this example, we create a <code>div</code> container and set its
        class to <code>"ScrollPane"</code>. Inside the <code>div</code>{" "}
        container, we create a paragraph and set some sample text to demonstrate
        scrolling.
      </p>
      <p>
        When you run this code, you will see a panel with a scrollable paragraph
        inside the <code>ScrollPane</code>. The scrollbars may appear
        automatically when the text content extends beyond the visible area,
        allowing you to scroll and view the complete text.
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
      <h2>
        The <code>data-scrollbar-ovelay</code> attribute
      </h2>
      <p>
        Some browsers can display the scrollbars on top of the content, rather
        than taking up additional space within the container. This overlay
        effect allows the content to maintain its original dimensions without
        being affected by the space taken up by the scrollbars.
      </p>
      <p>
        If your browser supports scrollbar overlay, you can add the{" "}
        <code>data-scrollbar-overlay</code> attribute to enable it.
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="ScrollPane"
     data-scrollbar-overlay
     style="max-width: 200px; white-space: nowrap;">
  <p>This is a long text that requires scrolling.</p>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        When you run this code, you will see a semi-transparent scrollbar when
        you hover over the scrollpane if scrollbar overlay is natively supported
        by your browser.
      </p>
      <div className="CenterLayout">
        <div
          className="ScrollPane"
          data-scrollbar-overlay
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
