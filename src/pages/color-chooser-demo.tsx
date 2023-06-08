import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "ColorChooserDemo";
const description: string = `An HTML version of Oracle's ${title} example`;
const id = "color-chooser-demo";

const ColorChooserDemoPage = ({ path, location }: PageProps) => {
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
      <div class="BorderLayout">
        <div class="PageStart">
          <div class="TitledBorder">
            <span>Banner</span>
            <div class="CenterLayout"
                 style="background-color: blue;
                        padding: .25em;
                        color: Yellow;
                        font-size: 24px;"
                 id="banner">
              <span>
                Welcome to the Tutorial Zone!
              <span>
            </div>
          </div>
        </div>
        <div class="TitledBorder">
          <span>Choose Background Color</span>
          <div class="CenterLayout"
               style="padding: .25em;">
            <!-- color chooser -->
            <label class="ColorChooser">
              <input type="color"
                     value="#0000FF"
                     id="color-chooser"
                     oninput="changeBannerBackgroundColor(event);">
              <button onclick="showDialog(event);">
                <span class="BoxLayout"
                      style="gap: .5em;">
                  <span>Show Color Chooser...</span>
                </span>
              </button>
            </label>
          </div>
        </div>
        <div class="PageEnd">
          <div class="TitledBorder">
            <span>Choose Text Color</span>
            <div style="padding: .25em;
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: .25em;">
              <button onclick="changeBannerColor(event);"
                      data-action-command="red">
                <span class="BorderLayout">
                  <img src="../images/red.gif"
                       alt="The red crayon"
                       style="width: 100%;">
                </span>
              </button>
              <button onclick="changeBannerColor(event);"
                      data-action-command="yellow">
                <span class="BorderLayout">
                  <img src="../images/yellow.gif"
                       alt="The yellow crayon"
                       style="width: 100%;">
                </span>
              </button>
              <button onclick="changeBannerColor(event);"
                      data-action-command="green">
                <span class="BorderLayout">
                  <img src="../images/green.gif"
                       alt="The green crayon"
                       style="width: 100%;">
                </span>
              </button>
              <button onclick="changeBannerColor(event);"
                      data-action-command="blue">
                <span class="BorderLayout">
                  <img src="../images/blue.gif"
                       alt="The blue crayon"
                       style="width: 100%;">
                </span>
              </button>
            </div>
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
function showDialog(event) {
  const button = event.currentTarget;
  const label = button.parentNode;
  label.click();
}
function changeBannerBackgroundColor(event) {
  const colorChooser = event.currentTarget;
  const color = colorChooser.value;
  const banner = document.getElementById("banner");
  banner.style.backgroundColor = color;
}
function changeBannerColor(event) {
  var button = event.currentTarget;
  var actionCommand = button.dataset.actionCommand;
  const banner = document.getElementById("banner");
  banner.style.color = actionCommand;
}
`}
      info={`
An HTML version of Oracle's ${title}2 example, using simpa.
`}
    />
  );
};

export default ColorChooserDemoPage;

export const Head = () => <SEO title={title} description={description} />;
