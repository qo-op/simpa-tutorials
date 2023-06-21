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
        ScrollPane provides a scrollable view of another component or a group of
        components. It is often used when the content within a component exceeds
        the available space, allowing users to scroll vertically and/or
        horizontally to view the entire content.
      </p>
      <p>
        The primary purpose of ScrollPane is to enhance the usability of
        components that contain more content than can be displayed within the
        available area. It may add scrollbars to the container, which can be
        used to navigate and view the content that extends beyond the visible
        boundaries.
      </p>
      <p>Here's an example of how to use ScrollPane:</p>
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
        In this example, we create a div container and set its class to
        "ScrollPane". Inside the div container, we create a paragraph and set
        some sample text to demonstrate scrolling.
      </p>
      <p>
        When you run this code, you will see a panel with a scrollable paragraph
        inside the ScrollPane. The scrollbars may appear automatically when the
        text content extends beyond the visible area, allowing you to scroll and
        view the complete text.
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
        Some browsers can display the scrollbars on top of the content, rather
        than taking up additional space within the container. This overlay
        effect allows the content to maintain its original dimensions without
        being affected by the space taken up by the scrollbars.
      </p>
      <p>
        If your browser supports scrollbar overlay, you can add the data-overlay
        attribute to enable it.
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="ScrollPane"
     data-overlay
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
