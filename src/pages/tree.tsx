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
  "Learn how to effectively use trees in HTML and CSS to represent and manipulate hierarchical data. Discover the Tree component, which organizes data in a hierarchical structure consisting of nodes. Each node represents an element in the hierarchy, and nodes can have child nodes, forming a tree-like structure. Dive into a practical example showcasing the creation of a simple tree using HTML and CSS. Explore the utilization of the material icons library to enhance the visual representation of tree nodes. Gain insights into the data-closed attribute, which controls the visibility of leaf nodes within branch nodes, enabling convenient collapsing and expanding. Explore the option of utilizing JavaScript code to dynamically modify the data-closed attribute based on user interaction.";

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
        A Tree is a component that represents a hierarchical
        structure of data in a tree-like format. It is used to display and
        manipulate hierarchical data.
      </p>
      <p>
        The Tree component organizes data in a hierarchical
        structure consisting of nodes. Each node represents an element in the
        hierarchy, and nodes can have child nodes to form a tree-like structure.
      </p>
      <p>
        The data structure that represents a node is called a{" "}
        TreeNode.
      </p>
      <p>
        Here's an example of how you can create a simple Tree:
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
        The data-closed attribute serves the purpose of controlling
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
        By assigning the value "true" to the{" "}
        data-closed attribute of the "Appliances" tree node, we
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
        data-closed attribute, setting it to "true" or "false"
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
