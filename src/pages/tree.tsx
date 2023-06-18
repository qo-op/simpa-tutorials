import Blender from "@mui/icons-material/Blender";
import CoffeeMaker from "@mui/icons-material/CoffeeMaker";
import Folder from "@mui/icons-material/Folder";
import Iron from "@mui/icons-material/Iron";
import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const title: string = "How to Use Trees with HTML and CSS";
const description: string =
  "This tutorial shows how to use trees (Tree) using HTML, CSS and JavaScript.";

const TreePage = ({ path }: PageProps) => {
  return (
    <Layout path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use Trees</span>
        <span>with HTML and CSS</span>
      </h1>
      <p>
        A <code>Tree</code> is a component that represents a hierarchical
        structure of data in a tree-like format. It is used to display and
        manipulate hierarchical data.
      </p>
      <p>
        The <code>Tree</code> component organizes data in a hierarchical
        structure consisting of nodes. Each node represents an element in the
        hierarchy, and nodes can have child nodes to form a tree-like structure.
      </p>
      <p>
        The data structure that represents a node is called a{" "}
        <code>TreeNode</code>.
      </p>
      <p>
        Here's an example of how you can create a simple <code>Tree</code>:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<!-- material icons -->
<link rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons">
...
<ul class="Tree">
  <li>
    <!-- tree node -->
    <div class="TreeNode">
      <span class="material-icons">
        folder
      </span>
      <span>Appliances</span>
    </div>
    <ul>
      <li>
        <!-- tree node -->
        <div class="TreeNode"
             style="padding: 0 0 0 24px;">
          <span class="material-icons">
            blender
          </span>
          <span>Blender</span>
        </div>
      </li>
      <li>
        <!-- tree node -->
        <div class="TreeNode"
             style="padding: 0 0 0 24px;">
          <span class="material-icons">
            coffee_maker
          </span>
          <span>Coffee Maker</span>
        </div>
      </li>
      <li>
        <!-- tree node -->
        <div class="TreeNode"
             style="padding: 0 0 0 24px;">
          <span class="material-icons">
            iron
          </span>
          <span>Iron</span>
        </div>
      </li>
    </ul>
  </li>
</ul>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        When you run this code, you will see a tree with a branch node named
        "Appliances" and its appliance-related child nodes.
      </p>
      <div style={{ height: "100px", border: "1px solid Gray" }}>
        <ul className="Tree">
          <li>
            <div className="TreeNode">
              <Folder fontSize="small" />
              <span>Appliances</span>
            </div>
            <ul>
              <li>
                <div className="TreeNode" style={{ padding: "0 0 0 24px" }}>
                  <Blender fontSize="small" />
                  <span>Blender</span>
                </div>
              </li>
              <li>
                <div className="TreeNode" style={{ padding: "0 0 0 24px" }}>
                  <CoffeeMaker fontSize="small" />
                  <span>Coffee Maker</span>
                </div>
              </li>
              <li>
                <div className="TreeNode" style={{ padding: "0 0 0 24px" }}>
                  <Iron fontSize="small" />
                  <span>Iron</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <p></p>
      <hr />
      <h2>The Closed Attribute</h2>
      <p>
        The <code>data-closed</code> attribute serves the purpose of controlling
        the visibility of leaf nodes within a branch node. By toggling this
        attribute, you can conveniently collapse or expand the branch node as
        needed.
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<link rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons">
...
<ul class="Tree">
  <li>
    <!-- tree node with data-closed="true" -->
    <div class="TreeNode"
         data-closed="true">
      <span class="material-icons">
        folder
      </span>
      <span>Appliances</span>
    </div>
    <ul>
      <li>
        <div class="TreeNode"
             style="padding: 0 0 0 24px;">
          <span class="material-icons">
            blender
          </span>
          <span>Blender</span>
        </div>
      </li>
      <li>
        <div class="TreeNode"
             style="padding: 0 0 0 24px;">
          <span class="material-icons">
            coffee_maker
          </span>
          <span>Coffee Maker</span>
        </div>
      </li>
      <li>
        <div class="TreeNode"
             style="padding: 0 0 0 24px;">
          <span class="material-icons">
            iron
          </span>
          <span>Iron</span>
        </div>
      </li>
    </ul>
  </li>
</ul>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        By assigning the value <code>"true"</code> to the{" "}
        <code>data-closed</code> attribute of the "Appliances" tree node, we
        effectively collapse it.
      </p>
      <div style={{ height: "100px", border: "1px solid Gray" }}>
        <ul className="Tree">
          <li>
            <div className="TreeNode" data-closed="true">
              <Folder fontSize="small" />
              <span>Appliances</span>
            </div>
            <ul>
              <li>
                <div className="TreeNode" style={{ padding: "0 0 0 24px" }}>
                  <Blender fontSize="small" />
                  <span>Blender</span>
                </div>
              </li>
              <li>
                <div className="TreeNode" style={{ padding: "0 0 0 24px" }}>
                  <CoffeeMaker fontSize="small" />
                  <span>Coffee Maker</span>
                </div>
              </li>
              <li>
                <div className="TreeNode" style={{ padding: "0 0 0 24px" }}>
                  <Iron fontSize="small" />
                  <span>Iron</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <p>
        When the user interacts with the branch node, you have the option to
        utilize JavaScript code to dynamically modify the{" "}
        <code>data-closed</code> attribute, setting it to "true" or "false"
        accordingly. This mechanism enables you to expand or collapse the node
        as desired.
      </p>
      <p></p>
      <NoteAboutSimpaCSS subject="Simpa CSS Components" />
    </Layout>
  );
};

export default TreePage;

export const Head = () => <SEO title={title} description={description} />;
