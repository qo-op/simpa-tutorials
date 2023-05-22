import React from "react";
import { PageProps } from "gatsby";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";

const title: string = "How to Use Layered Panes with HTML and CSS";
const description: string = "This tutorial shows how to use layered panes (LayeredPane) using HTML and CSS.";

const LayeredPanePage = ({ path }: PageProps) => {
  return (
    <Layout title={title} path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use Layered Panes</span>
        <span>with HTML and CSS</span>
      </h1>
      <p>
        A <code>LayeredPane</code> provides a way to organize and manage
        multiple components or layers within a single container.
      </p>
      <p>
        The main purpose of a <code>LayeredPane</code> is to allow components to
        be stacked on top of each other, with each component occupying a
        specific layer. This layering arrangement enables components to overlap
        each other.
      </p>
      <p>
        When components are added to a <code>LayeredPane</code>, they can be
        assigned a unique depth value or layer, with the <code>z-index</code>{" "}
        style property. The <code>z-index</code> determines the order in which
        the components are rendered, with higher values appearing on top of
        lower values.
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="LayeredPane"
     style="position: relative; height: 200px;">
  <div style="z-index: 0; position: absolute; top: 10px; left: 10px; width: 140px; height: 140px; text-align: center; background-color: Cyan;">
    <span>Cyan (0)</span>
  </div>
  <div style="z-index: 1; position: absolute; top: 50px; left: 50px; width: 140px; height: 140px; text-align: center; background-color: LightGreen;">
    <span>Green (1)</span>
  </div>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        When you run this code, you will see two panels, with the second panel
        appearing on top and overlapping the first panel:
      </p>
      <div
        className="LayeredPane"
        style={{
          position: "relative",
          height: "200px",
          backgroundColor: "LightGray",
        }}
      >
        <div
          style={{
            zIndex: 0,
            position: "absolute",
            top: "10px",
            left: "10px",
            width: "140px",
            height: "140px",
            textAlign: "center",
            backgroundColor: "Cyan",
          }}
        >
          <span>Cyan (0)</span>
        </div>
        <div
          style={{
            zIndex: 1,
            position: "absolute",
            top: "50px",
            left: "50px",
            width: "140px",
            height: "140px",
            textAlign: "center",
            backgroundColor: "LightGreen",
          }}
        >
          <span>Green (1)</span>
        </div>
      </div>
      <p></p>
      <NoteAboutSimpaCSS subject="Simpa CSS Components" />
    </Layout>
  );
};

export default LayeredPanePage;

export const Head = () => <SEO title={title} description={description} />;
