import CopyToClipboardSyntaxHighlighter from "components/CopyToClipboardSyntaxHighlighter";
import Layout from "components/Layout";
import NoteAboutSimpaJS from "components/NoteAboutSimpaJS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "How to Use Tabbed Panes with HTML, CSS and JavaScript";
const description: string =
  "Discover how to use tabbed panes with HTML, CSS, and JavaScript to create organized and interactive interfaces in your web application. TabbedPane is a versatile component that enables users to switch between different panels by selecting corresponding tabs. This comprehensive tutorial provides step-by-step instructions on implementing tabbed interfaces, creating multiple tabs, managing tab content, and enhancing user navigation. Elevate your application's user experience and streamline functionality with tabbed panes.";

const TabbedPanePage = ({ path }: PageProps) => {
  return (
    <Layout path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use Tabbed Panes</span>
        <span>with HTML, CSS</span>
        <span>and JavaScript</span>
      </h1>
      <p>
        A TabbedPane is a component that provides a container for organizing and
        displaying multiple components or panels using tabs. It enables users to
        switch between different panels by selecting the corresponding tabs.
      </p>
      <p>
        Tabbed panes are commonly used to create tabbed interfaces in
        applications, where each tab represents a different section or
        functionality.
      </p>
      <p>
        Here's a basic example of using TabbedPane to create a tabbed pane with
        two tabs:
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
  <script src="https://qo-op.github.io/simpa/simpa.js">
  </script>
</head>
<body>
  <div class="TabbedPane"
       style="height: 200px;
              border: 1px solid gray">
    <!-- Tab Container -->
    <div>
      <!-- Tab Component -->
      <button value="Card 1">
        <span>
          <!-- Tab Icon -->
          <span></span>
          <!-- Tab Text -->
          <span>Tab 1</span>
          <!-- Tab Close Icon -->
          <span></span>
        </span>
      </button>
      <!-- Tab Component Selected -->
      <!-- tabindex="-1" -->
      <button value="Card 2" tabindex="-1">
        <span>
          <span></span>
          <span>Tab 2</span>
          <span></span>
        </span>
      </button>
    </div>
    <!-- Card Container -->
    <div class="CardLayout">
      <!-- Card Component -->
      <div class="CenterLayout"
           data-name="Card 1"
           style="visibility: hidden">
        <span>Panel #1</span>
      </div>
      <!-- Card Component Selected -->
      <!-- visibility: inherit -->
      <div class="CenterLayout"
           data-name="Card 2"
           style="visibility: inherit">
        <span>Panel #2</span>
      </div>
    </div>
  </div>
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In the example above, we create a TabbedPane container with a height of
        200 pixels. Inside the TabbedPane container, we have a container for
        tabs and a container for cards (using the CardLayout class). We add two
        tabs in the tab container along with their corresponding cards in the
        card container.
      </p>
      <p>
        When you run this code, you will see a tabbed pane containing two tabs
        labeled "Tab 1" and "Tab 2". Clicking on a tab will show the associated
        card.
      </p>
      <div
        className="TabbedPane"
        style={{ height: "200px", border: "1px solid gray" }}
      >
        <div>
          <button value="Card 1">
            <span>
              <span></span>
              <span>Tab 1</span>
              <span></span>
            </span>
          </button>
          <button value="Card 2" tabIndex={-1}>
            <span>
              <span></span>
              <span>Tab 2</span>
              <span></span>
            </span>
          </button>
        </div>
        <div className="CardLayout">
          <div
            className="CenterLayout"
            data-name="Card 1"
            style={{ visibility: "hidden" }}
          >
            <span>Panel #1</span>
          </div>
          <div
            className="CenterLayout"
            data-name="Card 2"
            style={{ visibility: "inherit" }}
          >
            <span>Panel #2</span>
          </div>
        </div>
      </div>
      <p></p>
      <NoteAboutSimpaJS subject="Simpa JS Components" />
    </Layout>
  );
};

export default TabbedPanePage;

export const Head = () => <SEO title={title} description={description} />;
