import Blender from "@mui/icons-material/Blender";
import CoffeeMaker from "@mui/icons-material/CoffeeMaker";
import Folder from "@mui/icons-material/Folder";
import Iron from "@mui/icons-material/Iron";
import CopyToClipboardSyntaxHighlighter from "components/CopyToClipboardSyntaxHighlighter";
import Layout from "components/Layout";
import NoteAboutSimpaJS from "components/NoteAboutSimpaJS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "How to Use Trees with HTML and CSS";
const description: string =
  "Learn how to effectively use trees in HTML and CSS to represent and manipulate hierarchical data. Discover the Tree component, which organizes data in a hierarchical structure consisting of nodes. Each node represents an element in the hierarchy, and nodes can have child nodes, forming a tree-like structure. Dive into a practical example showcasing the creation of a simple tree using HTML and CSS. Explore the utilization of the material icons library to enhance the visual representation of tree nodes. Gain insights into the data-closed attribute, which controls the visibility of leaf nodes within branch nodes, enabling convenient collapsing and expanding. Explore the option of utilizing JavaScript code to dynamically modify the data-closed attribute based on user interaction.";

const TreePage = ({ path }: PageProps) => {
  const expandOrCollapse = (ev: React.MouseEvent) => {
    const treeNode = ev.currentTarget as HTMLDivElement;
    const closed = treeNode.dataset.closed;
    treeNode.dataset.closed = closed === "true" ? "false" : "true";
  };
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
        A tree is a component that represents hierarchical data in a tree-like
        structure. It is commonly used to display and manipulate data that has a
        hierarchical relationship.
      </p>
      <p>
        The Tree css component organizes data using nodes, where each node
        represents an element in the hierarchy. Nodes can have child nodes,
        forming a tree-like structure.
      </p>
      <p>The data structure representing a node is called a TreeNode.</p>
      <p>Here's an example of how to create a simple Tree:</p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>
<body>
  <!-- Tree -->
  <ul class="Tree">
    <li>
      <!-- Tree Node -->
      <div class="TreeNode"
           data-closed="false">
        <span class="material-icons"></span>
        <span>Appliances</span>
      </div>
      <ul>
        <li>
          <!-- Tree Node -->
          <div class="TreeNode"
               style="padding: 0 0 0 1em">
            <span class="material-icons">
              blender
            </span>
            <span>Blender</span>
          </div>
        </li>
        <li>
          <!-- Tree Node -->
          <div class="TreeNode"
               style="padding: 0 0 0 1em">
            <span class="material-icons">
              coffee_maker
            </span>
            <span>Coffee Maker</span>
          </div>
        </li>
        <li>
          <!-- Tree Node -->
          <div class="TreeNode"
               style="padding: 0 0 0 1em">
            <span class="material-icons">
              iron
            </span>
            <span>Iron</span>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In this example, a tree structure is created using an unordered list
        (&lt;ul&gt;) with the class "Tree". Each node is represented by a list
        item (&lt;li&gt;) and a corresponding &lt;div&gt; element with the class
        "TreeNode". The tree nodes consist of icons and labels.
      </p>
      <p>
        When you run this code, you will see a tree with a branch node named
        "Appliances" and its child nodes related to different appliances.
      </p>
      <div style={{ height: "100px", border: "1px solid Gray" }}>
        <ul className="Tree">
          <li>
            <div className="TreeNode" data-closed="false">
              <span className="material-icons"></span>
              <span>Appliances</span>
            </div>
            <ul>
              <li>
                <div className="TreeNode" style={{ padding: "0 0 0 1em" }}>
                  <Blender fontSize="small" />
                  <span>Blender</span>
                </div>
              </li>
              <li>
                <div className="TreeNode" style={{ padding: "0 0 0 1em" }}>
                  <CoffeeMaker fontSize="small" />
                  <span>Coffee Maker</span>
                </div>
              </li>
              <li>
                <div className="TreeNode" style={{ padding: "0 0 0 1em" }}>
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
        The data-closed attribute allows you to control the visibility of leaf
        nodes within a branch node. By toggling this attribute, you can
        conveniently collapse or expand the branch node as needed.
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>
<body>
  <!-- Tree -->
  <ul class="Tree">
    <li>
      <!-- Tree Node -->
      <!-- data-closed="true" -->
      <div class="TreeNode"
           data-closed="true"
           onclick="expandOrCollapse(event);">
        <span class="material-icons">
          folder
        </span>
        <span>Appliances</span>
      </div>
      <ul>
        <li>
          <!-- Tree Node -->
          <div class="TreeNode"
               style="padding: 0 0 0 1em">
            <span class="material-icons">
              blender
            </span>
            <span>Blender</span>
          </div>
        </li>
        <li>
          <!-- Tree Node -->
          <div class="TreeNode"
               style="padding: 0 0 0 1em">
            <span class="material-icons">
              coffee_maker
            </span>
            <span>Coffee Maker</span>
          </div>
        </li>
        <li>
          <!-- Tree Node -->
          <div class="TreeNode"
               style="padding: 0 0 0 1em">
            <span class="material-icons">
              iron
            </span>
            <span>Iron</span>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In this modified example, the "Appliances" tree node has the
        data-closed="true" attribute, which collapses the branch node.
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
                <div className="TreeNode" style={{ padding: "0 0 0 1em" }}>
                  <Blender fontSize="small" />
                  <span>Blender</span>
                </div>
              </li>
              <li>
                <div className="TreeNode" style={{ padding: "0 0 0 1em" }}>
                  <CoffeeMaker fontSize="small" />
                  <span>Coffee Maker</span>
                </div>
              </li>
              <li>
                <div className="TreeNode" style={{ padding: "0 0 0 1em" }}>
                  <Iron fontSize="small" />
                  <span>Iron</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <p></p>
      <NoteAboutSimpaJS subject="Simpa JS Components" />
    </Layout>
  );
};

export default TreePage;

export const Head = () => <SEO title={title} description={description} />;
