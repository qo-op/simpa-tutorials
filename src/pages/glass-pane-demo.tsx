import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "GlassPaneDemo";
const description: string = `An HTML version of Oracle's ${title} example`;
const id = "glass-pane-demo";

const GlassPaneDemoPage = ({ path, location }: PageProps) => {
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
    <div class="GridBagConstraints"
         data-anchor="page-start"
         style="padding: .25em;">
      <div class="BorderLayout"
           style="border: 1px solid gray;">
        <div class="LayeredPane">
          <div class="BorderLayout">
            <div class="PageStart">
              <ul class="MenuBar">
                <li>
                  <div class="Menu">
                    <span>Menu</span>
                  </div>
                  <ul>
                    <li>
                      <div class="MenuItem">
                        <span></span>
                        <span>Do nothing</span>
                        <span></span>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="EmptyBorder"
                 style="padding: .5em;">
              <div class="FlowLayout"
                   style="gap: .5em;">
                <button>
                  Button 1
                </button>
                <button>
                  Button 2
                </button>
              </div>
            </div>
          </div>
          <!-- GlassPane -->
          <div class="GlassPane"
               style="visibility: hidden;
                      background-color: rgba(0, 0, 0, .2);"
               onclick="handleClick(event);"
               id="glass-pane">
          </div>
        </div>
        <div class="PageEnd"
             style="border: solid Gray;
                    border-width: 1px 0 0 0;
                    padding: .5em;">
          <label>
            <input type="checkbox"
                   onchange="handleChange(event);">
            Glass pane "visible"
          </label>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`}
      cssCode={`/* ${title}.css */
.Circle {
  width: 20px;
  height: 20px;
  background-color: Red;
  border-radius: 10px;
  position: fixed;
}
`}
      jsCode={`/* ${title}.js */
function handleChange(event) {
  const checkBox = event.currentTarget;
  const glassPane = document.getElementById("glass-pane");
  while (glassPane.firstElementChild) {
    glassPane.firstElementChild.remove();
  }
  glassPane.style.visibility = checkBox.checked ? "inherit" : "hidden";
}
function handleClick(event) {
  console.log("handleClick");
  const glassPane = event.currentTarget;
  while (glassPane.firstElementChild) {
    glassPane.firstElementChild.remove();
  }
  const circle = document.createElement("div");
  circle.classList.add("Circle");
  circle.style.left = event.clientX - 10 + "px";
  circle.style.top = event.clientY - 10 + "px";
  glassPane.appendChild(circle);
}
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
`}
    />
  );
};

export default GlassPaneDemoPage;

export const Head = () => <SEO title={title} description={description} />;
