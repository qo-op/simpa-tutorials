import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "ScrollPaneDemo";
const description: string =
  "An HTML version of Oracle's ScrollPaneDemo example. This example showcases the functionality of scrolling within a graphical user interface. The program creates a panel with a drawing area where circles can be drawn by clicking the left mouse button. Circles are represented as div elements and displayed using different colors. Clicking the right mouse button clears the drawing area. The panel is placed inside a scroll pane, allowing users to scroll and view the entire drawing area if it exceeds the visible area. The program uses mouse event listeners to handle circle placement and clearing, dynamically adjusts the size of the drawing area, and updates the scroll pane accordingly. Explore this example to learn how to implement scrolling functionality and interactive drawing areas in HTML applications.";
const id = "scroll-pane-demo";

const ScrollPaneDemoPage = ({ path, location }: PageProps) => {
  return (
    <ExampleLayout
      path={path}
      hostname={location.hostname}
      htmlCode={`<!-- ${title}.html -->
<!-- An HTML version of Oracle's ScrollDemo2 example, using simpa.} -->
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
      <div style="display: grid;">
        <span>Click left mouse button to place a circle.</span>
        <span>Click right mouse button to clear drawing area.</span>
        <div class="ScrollPane"
             style="border: 1px solid Gray;
                    height: 200px;
                    position: relative;"
             onclick="handleClick(event);"
             oncontextmenu="handleContextMenu(event);">
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`}
      cssCode={`/* ${title}.css */
.Circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
}
`}
      jsCode={`/* ${title}.js */
colors = [
  "Red",
  "Blue",
  "LightGreen",
  "Orange",
  "Cyan",
  "Magenta",
  "DarkGray",
  "Yellow"
];
colorIndex = 0;
function handleClick(event) {
  const scrollPane = event.currentTarget;
  const scrollPaneRect = scrollPane.getBoundingClientRect();
  const circle = document.createElement("div");
  circle.classList.add("Circle");
  circle.style.left =
    event.clientX -
    scrollPaneRect.left +
    scrollPane.scrollLeft -
    50 + "px";
  circle.style.top =
    event.clientY -
    scrollPaneRect.top +
    scrollPane.scrollTop -
    50 + "px";
  circle.style.backgroundColor = colors[
    colorIndex++ % colors.length
  ];
  scrollPane.appendChild(circle);
  circle.scrollIntoView();
}
function handleContextMenu(event) {
  event.preventDefault();
  const scrollPane = event.currentTarget;
  while (scrollPane.firstElementChild) {
    scrollPane.firstElementChild.remove();
  }
}
`}
      info={`
An HTML version of Oracle's ScrollDemo2 example, using simpa.
The purpose of this example is to demonstrate the functionality of scrolling within a graphical user interface.
The program creates a panel that contains a drawing area where circles can be drawn by clicking the left mouse button.
The circles are represented as div elements and are displayed using different colors.
Clicking the right mouse button clears the drawing area.
The panel is placed inside a scroll pane, allowing the user to scroll and view the entire drawing area if it exceeds the visible area.
The program utilizes mouse event listeners to handle the placement and clearing of circles, and it dynamically adjusts the size of the drawing area and updates the scroll pane accordingly.
`}
    />
  );
};

export default ScrollPaneDemoPage;

export const Head = () => <SEO title={title} description={description} />;
