import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "ScrollPaneDemo";
const description: string = `An HTML version of Oracle's ScrollDemo2 example`;
const id = "scroll-pane-demo";

const ScrollPaneDemoPage = ({ path, location }: PageProps) => {
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
</head>
<body class="Frame"
      id="${id}">
  <div class="ScrollPane"
       data-scrollbar-overlay>
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
`}
    />
  );
};

export default ScrollPaneDemoPage;

export const Head = () => <SEO title={title} description={description} />;
