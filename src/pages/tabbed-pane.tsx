import React from "react";
import { PageProps } from "gatsby";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Layout from "components/Layout";
import NoteAboutSimpaJS from "components/NoteAboutSimpaJS";
import { SEO } from "components/SEO";

const title: string = "How to Use Tabbed Panes with HTML, CSS and JavaScript";
const description: string =
  "This tutorial shows how to use tabbed panes (TabbedPane) using HTML, CSS and JavaScript.";

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
        <code>TabbedPane</code> is a component that provides a tabbed pane
        container for organizing and displaying multiple components or panels.
        It allows the user to switch between different panels by selecting the
        corresponding tabs.
      </p>
      <p>
        It is commonly used to create tabbed interfaces in applications, where
        each tab represents a different section or functionality of the
        application.
      </p>
      <p>
        Here's a basic example of using <code>TabbedPane</code> to create a
        tabbed pane with two tabs:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="TabbedPane"
     style="height: 200px; border: 1px solid gray;">
  <!-- tab layout -->
  <div class="TabLayout">
    <!-- tab component -->
    <button value="Card 1">
      <span></span> <!-- tab icon -->
      <span>Tab 1</span> <!-- tab text -->
      <span></span> <!-- tab close icon -->
    </button>
    <!-- tab component selected -->
    <!-- with tabindex="-1" -->
    <button value="Card 2"
            tabindex="-1">
      <span></span>
      <span>Tab 2</span>
      <span></span>
    </button>
  </div>
  <!-- card layout -->
  <div class="CardLayout">
    <!-- card component -->
    <div class="CenterLayout"
         data-name="Card 1"
         style="visibility: hidden;">
      <span>Panel #1</span>
    </div>
    <!-- card component selected -->
    <!-- not hidden -->
    <div class="CenterLayout"
         data-name="Card 2"
         style="visibility: inherit;">
      <span>Panel #2</span>
    </div>
  </div>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        In the example above, we create a <code>TabbedPane</code> container with
        a height of 200 pixels. Then, we incorporate two containers: a container
        for tabs with <code>TabLayout</code> class and a container for cards
        with <code>CardLayout</code> class in the <code>TabbedPane</code>{" "}
        container. Next, we added two tabs in the tab container along with their
        corresponding cards in the card container.
      </p>
      <p>
        When you run this code, you should see a tabbed pane containing two tabs
        labeled "Tab 1" and "Tab 2". Try clicking on a tab to see the associated
        card.
      </p>
      <div
        className="TabbedPane"
        style={{ height: "200px", border: "1px solid gray" }}
      >
        <div className="TabLayout">
          <button value="Card 1">
            <span></span>
            <span>Tab 1</span>
            <span></span>
          </button>
          <button value="Card 2" tabIndex={-1}>
            <span></span>
            <span>Tab 2</span>
            <span></span>
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
