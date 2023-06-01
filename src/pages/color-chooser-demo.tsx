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
        href="./${title}.css">
  <script src="./${title}.js">
  </script>
</head>
<body class="ScrollPane"
      data-scrollbar-overlay
      id="${id}">
  <div class="GridBagConstraints"
       data-anchor="page-start"
       style="padding: .25em;">
    <div class="BorderLayout">
      <div class="PageStart">
        <div class="TitledBorder"
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
      <div class="TitledBorder"
            style="background-color: White;">
        <h6>Choose Background Color</h6>
        <div class="CenterLayout"
             style="padding: .25em;">
          <!-- color chooser -->
          <input type="color"
                 value="#0000FF"
                 id="color-chooser"
                 oninput="changeBannerBackgroundColor(event);">
        </div>
      </div>
      <div class="PageEnd">
        <div class="TitledBorder"
             style="background-color: White;">
          <h6>Choose Text Color</h6>
          <div style="padding: .25em;
                      display: grid;
                      grid-template-columns: 1fr 1fr;
                      gap: .25em;">
            <button onclick="changeBannerColor(event);"
                    data-action-command="red">
              <span class="BorderLayout">
                <img src="/red.gif"
                     alt="The red crayon"
                     style="width: 180px; height: 22px">
              </span>
            </button>
            <button onclick="changeBannerColor(event);"
                    data-action-command="yellow">
              <span class="BorderLayout">
                <img src="/yellow.gif"
                     alt="The yellow crayon"
                     style="width: 180px; height: 22px">
              </span>
            </button>
            <button onclick="changeBannerColor(event);"
                    data-action-command="green">
              <span class="BorderLayout">
                <img src="/green.gif"
                     alt="The green crayon"
                     style="width: 180px; height: 22px">
              </span>
            </button>
            <button onclick="changeBannerColor(event);"
                    data-action-command="blue">
              <span class="BorderLayout">
                <img src="/blue.gif"
                     alt="The blue crayon"
                     style="width: 180px; height: 22px">
              </span>
            </button>
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
An HTML version of Oracle's ColorChooserDemo2 example, using simpa.css
`}
    />
  );
};

export default ColorChooserDemoPage;

export const Head = () => <SEO title={title} description={description} />;
