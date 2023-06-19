import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "SplitPaneDemo";
const description: string =
  "An HTML version of Oracle's SplitPaneDemo example. This example showcases a split pane with a scrollable list of image names on one side and an image display area on the other side. The program allows users to select an image name from the list, and the corresponding image is dynamically displayed. Explore this example to learn how to implement split panes and interactive image displays in HTML applications.";
const id = "split-pane-demo";

const SplitPaneDemoPage = ({ path, location }: PageProps) => {
  return (
    <ExampleLayout
      path={path}
      hostname={location.hostname}
      htmlCode={`<!-- ${title}.html -->
<!-- An HTML version of Oracle's ${title} example, using simpa. -->
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
</head>
<body class="Frame"
      id="${id}">
  <div class="ScrollPane"
       data-overlay>
    <div class="CenterLayout"
         style="padding: .25em;">
      <div class="SplitPane"
            style="width: 300px;
                   height: 150px;">
        <div id="left-container">
          <div class="ScrollPane"
               style="border: 1px solid Gray;">
            <ul style="margin: 0;
                      padding: 0;
                      list-style-type: none;
                      cursor: default;"
                      onclick="handleClick(event);">
              <li style="background-color: LightGray;">Bird</li>
              <li>Cat</li>
              <li>Dog</li>
              <li>Rabbit</li>
              <li>Pig</li>
              <li>dukeWaveRed</li>
              <li>left</li>
              <li>middle</li>
              <li>right</li>
            </ul>
          </div>
        </div>
        <div id="divider"></div>
        <div id="right-container">
          <div class="ScrollPane CenterLayout"
               style="border: 1px solid Gray;">
            <img src="../images/Bird.gif"
                 alt="Pet image"
                 id="picture">
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`}
      cssCode={`/* ${title}.css */
@media (pointer: coarse) {
  #divider {
    width: 32px;
  }
}
@media (pointer: fine) {
  #divider {
    width: 8px;
  }
}
`}
      jsCode={`/* ${title}.js */
function handleClick(event) {
  const ul = event.currentTarget;
  const li = event.target;
  let index = Array.from(ul.children).indexOf(li);
  if (index === -1) {
    return;
  }
  for (let i = 0; i < ul.children.length; i++) {
    const child = ul.children[i];
    child.style.backgroundColor = i === index ? "LightGray" : "";
  }
  const value = li.textContent;
  const picture = document.getElementById("picture");
  picture.src = "../images/" + value + ".gif";
};
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
The purpose of this example is to create a SPA application that demonstrates a split pane with a list of image names on one side and an image display on the other side.
The program allows the user to select an image name from the list, and the corresponding image is displayed in the picture area.
It consists of a split pane that divides the window horizontally, with a scrollable list of image names on the left side and a scrollable image display on the right side.
The split pane allows the user to resize the two components.
The program utilizes a event handler to respond to list selection changes and updates the image display accordingly.
`}
    />
  );
};

export default SplitPaneDemoPage;

export const Head = () => <SEO title={title} description={description} />;
