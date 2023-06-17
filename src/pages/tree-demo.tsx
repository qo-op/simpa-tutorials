import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "TreeDemo";
const description: string = `An HTML version of Oracle's ${title} example`;
const id = "tree-demo";

const TreeDemoPage = ({ path, location }: PageProps) => {
  return (
    <ExampleLayout
      path={path}
      hostname={location.hostname}
      htmlCode={`<!-- ${title}.html -->
<!-- ${description} -->
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
  <script src="https://qo-op.github.io/simpa/simpa.js">
  </script>
  <link rel="stylesheet"
        href="./${title}.css">
  <script src="./${title}.js">
  </script>
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>
<body class="Frame"
      style="padding-block: .25em;"
      id="${id}">
  <div class="SplitPane"
       data-orientation="vertical-split">
    <div class="BorderLayout"
          id="top-container">
      <div class="ScrollPane"
            style="border: 1px solid Gray;">
        <ul class="Tree">
          <li>
            <div class="TreeNode"
                onclick="expandOrCollapse(event);"
                data-closed="false">
              <span class="material-icons"></span>
              <span>The Java Series</span>
            </div>
            <ul>
              <li>
                <div class="TreeNode"
                    style="padding: 0 0 0 24px;"
                    onclick="expandOrCollapse(event);"
                    data-closed="true">
                  <span class="material-icons"></span>
                  <span>Books for Java Programmers</span>                
                </div>
                <ul>
                  <li>
                    <div class="TreeNode"
                        style="padding: 0 0 0 48px;"
                        data-user-object="tutorial"
                        onclick="handleClick(event);">
                      <span class="material-icons"></span>
                      <span>The Java Tutorial: A Short Course on the Basics</span>
                    </div>
                  </li>
                  <li>
                    <div class="TreeNode"
                        style="padding: 0 0 0 48px;"
                        data-user-object="tutorialcont"
                        onclick="handleClick(event);">
                      <span class="material-icons"></span>
                      <span>The Java Tutorial Continued: The Rest of the JDK</span>
                    </div>
                  </li>
                  <li>
                    <div class="TreeNode"
                        style="padding: 0 0 0 48px;"
                        data-user-object="swingtutorial"
                        onclick="handleClick(event);">
                      <span class="material-icons"></span>
                      <span>The JFC Swing Tutorial: A Guide to Constructing GUIs</span>
                    </div>
                  </li>
                  <li>
                    <div class="TreeNode"
                        style="padding: 0 0 0 48px;"
                        data-user-object="bloch"
                        onclick="handleClick(event);">
                      <span class="material-icons"></span>
                      <span>Effective Java Programming Language Guide</span>
                    </div>
                  </li>
                  <li>
                    <div class="TreeNode"
                        style="padding: 0 0 0 48px;"
                        data-user-object="arnold"
                        onclick="handleClick(event);">
                      <span class="material-icons"></span>
                      <span>The Java Programming Language</span>
                    </div>
                  </li>
                  <li>
                    <div class="TreeNode"
                        style="padding: 0 0 0 48px;"
                        data-user-object="chan"
                        onclick="handleClick(event);">
                      <span class="material-icons"></span>
                      <span>The Java Developers Almanac</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div class="TreeNode"
                    style="padding: 0 0 0 24px;"
                    onclick="expandOrCollapse(event);"
                    data-closed="true">
                  <span class="material-icons"></span>
                  <span>Books for Java Implementers</span>                
                </div>
                <ul>
                  <li>
                    <div class="TreeNode"
                        style="padding: 0 0 0 48px;"
                        data-user-object="vm"
                        onclick="handleClick(event);">
                      <span class="material-icons"></span>
                      <span>The Java Virtual Machine Specification</span>
                    </div>
                  </li>
                  <li>
                    <div class="TreeNode"
                        style="padding: 0 0 0 48px;"
                        data-user-object="jls"
                        onclick="handleClick(event);">
                      <span class="material-icons"></span>
                      <span>The Java Language Specification</span>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div id="divider"></div>
    <div id="bottom-container">
      <div class="ScrollPane"
            style="border: 1px solid Gray;"
                  id="htmlPane">
      </div>
    </div>
  </div>
</body>
</html>
`}
      cssCode={`/* ${title}.css */
#top-container,
#bottom-container {
  @media (pointer: coarse) {
    height: calc(50% - 16px);
  }
  @media (pointer: fine) {
    height: calc(50% - 4px);
  }
}
#divider {
  @media (pointer: coarse) {
    height: 32px;
  }
  @media (pointer: fine) {
    height: 8px;
  }
}
.TreeNode>.material-icons::after {
  content: "description";
}
.TreeNode[data-closed="true"]>.material-icons::after {
  content: "keyboard_arrow_right";
}
.TreeNode[data-closed="false"]>.material-icons::after {
  content: "keyboard_arrow_down";
}
`}
      jsCode={`/* ${title}.js */
function expandOrCollapse(event) {
  const treeNode = event.currentTarget;
  const closed = treeNode.dataset.closed;
  treeNode.dataset.closed = closed === "false" ? "true" : "false";
  displayURL("../html/TreeDemoHelp.txt");
}
function handleClick(event) {
  const treeNode = event.currentTarget;
  const userObject = treeNode.dataset.userObject;
  displayURL("../html/" + userObject + ".txt");
}
async function displayURL(url) {
  const response = await fetch(url);
  const text = await response.text();
  const htmlPane = document.getElementById("htmlPane");
  htmlPane.innerHTML = text;
}
displayURL("../html/TreeDemoHelp.txt");
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
`}
    />
  );
};

export default TreeDemoPage;

export const Head = () => <SEO title={title} description={description} />;
