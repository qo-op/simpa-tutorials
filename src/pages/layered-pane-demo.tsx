import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "LayeredPaneDemo";
const description: string = `An HTML version of Oracle's ${title} example`;
const id = "layered-pane-demo";

const LayeredPaneDemoPage = ({ path, location }: PageProps) => {
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
      id="${id}"
      onpointerup="handlePointerUp(event);">
  <div class="ScrollPane"
       data-overlay>
    <div class="CenterLayout"
         style="padding: .25em;">
      <div class="BoxLayout"
           data-axis="page-axis"
           data-alignment-x="stretch">
        <div class="TitledBorder">
          <span>Choose Duke's Layer and Position</span>
          <div class="FlowLayout"
               style="gap:.5em;
                      padding: .5em;">
            <select onchange="handleChange(event);">
              <option value="0">
                Yellow (0)
              </option>
              <option value="1">
                Magenta (1)
              </option>
              <option value="2"
                      selected>
                Cyan (2)
              </option>
              <option value="3">
                Red (3)
              </option>
              <option value="4">
                Green (4)
              </option>
            </select>
          </div>
        </div>
        <div class="TitledBorder">
          <span>Move the Mouse To Move Duke</span>
          <div class="LayeredPane"
               style="width: 300px;
                      height: 300px;"
                onpointerdown="handlePointerDown(event);"
                onpointermove="handlePointerMove(event);"">
            <div class="FlowLayout"
                 style="position: absolute;
                        top: 10px;
                        left: 10px;
                        width: 140px;
                        height: 140px;
                        border: 1px solid Gray;
                        background-color: Yellow;
                        z-index: 0;">
              <span>Yellow (0)</span>
            </div>
            <div class="FlowLayout"
                 style="position: absolute;
                        top: 45px;
                        left: 45px;
                        width: 140px;
                        height: 140px;
                        border: 1px solid Gray;
                        background-color: Magenta;
                        z-index: 1;">
              <span>Magenta (1)</span>
            </div>
            <div class="FlowLayout"
                 style="position: absolute;
                        top: 80px;
                        left: 80px;
                        width: 140px;
                        height: 140px;
                        border: 1px solid Gray;
                        background-color: Cyan;
                        z-index: 2;">
              <span>Cyan (2)</span>
            </div>
            <div class="FlowLayout"
                 style="position: absolute;
                        top: 115px;
                        left: 115px;
                        width: 140px;
                        height: 140px;
                        border: 1px solid Gray;
                        background-color: Red;
                        z-index: 3;">
              <span>Red (3)</span>
            </div>
            <div class="FlowLayout"
                 style="position: absolute;
                        top: 150px;
                        left: 150px;
                        width: 140px;
                        height: 140px;
                        border: 1px solid Gray;
                        background-color: LightGreen;
                        z-index: 4;">
              <span>Green (4)</span>
            </div>
            <img src="../images/dukeWaveRed.gif"
                 style="position: absolute;
                        top: 15px;
                        left: 225px;
                        z-index: 2;"
                 id="duke">
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`}
      cssCode={`/* ${title}.css */
`}
      jsCode={`/* ${title}.js */
function handleChange(event) {
  const comboBox = event.currentTarget;
  const value = comboBox.value;
  const duke = document.getElementById("duke");
  duke.style.zIndex = value;
}
function handlePointerDown(event) {
  if (event.pointerType !== "mouse") {
    const frame = document.getElementById("${id}");
    frame.firstElementChild.classList.remove("ScrollPane");
    handlePointerMove(event);
  }
}
function handlePointerMove(event) {
  const layered = event.currentTarget;
  const rect = layered.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const duke = document.getElementById("duke");
  duke.style.top = Math.max((Math.min(y, 300) - 57), -7) + "px";
  duke.style.left = Math.max((Math.min(x, 300) - 40), -10) + "px";
}
function handlePointerUp(event) {
  if (event.pointerType !== "mouse") {
    const frame = document.getElementById("${id}");
    frame.firstElementChild.classList.add("ScrollPane");
  }
}
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
The purpose of this example is to create a SPA application that showcases the use of a layered pane to display and manipulate layered components.
The application creates a layered pane with several colored panels and a Duke icon.
The user can move the Duke icon by moving the mouse cursor and can also change the layer of the Duke icon using a combo box.
This example handles user interactions and updates the layering of the Duke icon accordingly.
`}
    />
  );
};

export default LayeredPaneDemoPage;

export const Head = () => <SEO title={title} description={description} />;
