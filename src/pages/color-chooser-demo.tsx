import React from "react";
import { PageProps } from "gatsby";
import { SEO } from "components/SEO";
import ExampleLayout from "components/ExampleLayout";

const title: string = "ColorChooserDemo";
const description: string = `An HTML version of Oracle's ${title} example`;

const ColorChooserDemoPage = ({ path }: PageProps) => {
  const id = path.replaceAll(/\//g, "");
  return (
    <ExampleLayout
      path={path}
      htmlCode={`<!-- ${title}.html -->
<!-- ${description} -->
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet"
        href="./${title}.css">
  <script src="./${title}.js">
  </script>
</head>
<body class="ScrollPane"
      data-scrollbar-overlay
      id="${id}">
  <div class="GridBagConstraints"
       data-anchor="page-start">
    <div class="BorderLayout">
      <div class="PageStart">
        <div class="TitleBorder"
              style="background-color: White;">
          <h6>Banner</h6>
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
      <div class="TitleBorder"
            style="background-color: White;">
        <h6>Choose Background Color</h6>
        <div class="CenterLayout"
             style="padding: .25em;
                    position: relative;">
          <!-- color chooser -->
          <input type="color"
                 style="position: absolute;
                        visibility: hidden;"
                 id="colorChooser"
                 oninput="changeBannerBackgroundColor(event);">
          <button onclick="showColorChooser(event);">
            Show Color Chooser...
          </button>
        </div>
      </div>
      <div class="PageEnd">
        <div class="TitleBorder"
             style="background-color: White;">
          <h6>Choose Text Color</h6>
          <div style="padding: .25em;
                      display: grid;
                      grid-template-columns: 1fr 1fr;
                      gap: .25em;">
            <img src="/red.gif"
                 alt="The red crayon"
                 style="width: 180px; height: 22px"
                 data-action-command="red"
                 onclick="changeBannerColor(event);">
            <img src="/yellow.gif"
                 alt="The yellow crayon"
                 style="width: 180px; height: 22px"
                 data-action-command="yellow"
                 onclick="changeBannerColor(event);">
            <img src="/green.gif"
                 alt="The green crayon"
                 style="width: 180px; height: 22px"
                 data-action-command="green"
                 onclick="changeBannerColor(event);">
            <img src="/blue.gif"
                 alt="The blue crayon"
                 style="width: 180px; height: 22px"
                 data-action-command="blue"
                 onclick="changeBannerColor(event);">
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
function showColorChooser(event) {
  const colorChooser = document.getElementById("colorChooser");
  colorChooser.click();
};
function changeBannerBackgroundColor(event) {
  const colorChooser = event.currentTarget;
  const color = colorChooser.value;
  const banner = document.getElementById("banner");
  banner.style.backgroundColor = color;
}
function changeBannerColor(event) {
  var img = event.currentTarget;
  var actionCommand = img.dataset.actionCommand;
  const banner = document.getElementById("banner");
  banner.style.color = actionCommand;
}
`}
      info={`
An HTML version of Oracle's ColorChooserDemo2 example, using simpa.css
`}
    />
  );
};

export default ColorChooserDemoPage;

export const Head = () => <SEO title={title} description={description} />;
