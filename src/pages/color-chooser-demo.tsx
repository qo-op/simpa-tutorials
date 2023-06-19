import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "ColorChooserDemo";
const description: string =
  "Discover an HTML version of Oracle's ColorChooserDemo2 example implemented using simpa. Immerse yourself in this captivating demonstration that showcases the usage of color choosers in a single-page application (SPA) environment. Experience the power of interactivity as users are empowered to choose both the background color and the text color. Witness the seamless integration of a color chooser for the background color selection and a collection of vibrant crayon buttons for text color selection. See the magic unfold as the chosen colors are dynamically displayed in a custom preview panel. Explore the inner workings of this example to learn how to handle user interactions with the color chooser, update the SPA application based on color selections, and provide a visually appealing preview of the chosen colors. Unlock the secrets of effective color management in SPAs and elevate your web development projects to new heights.";
const id = "color-chooser-demo";

const ColorChooserDemoPage = ({ path, location }: PageProps) => {
  return (
    <ExampleLayout
      path={path}
      hostname={location.hostname}
      htmlCode={`<!-- ${title}.html -->
<!-- An HTML version of Oracle's ${title}2 example, using simpa. -->
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
  const button = event.currentTarget;
  const actionCommand = button.dataset.actionCommand;
  const banner = document.getElementById("banner");
  banner.style.color = actionCommand;
}
`}
      info={`
An HTML version of Oracle's ${title}2 example, using simpa.
The purpose of this example is to showcase the usage of color choosers in a SPA application.
In this example, users have the ability to choose both the background color and the text color.
They can do so through a color chooser for the background color and a set of colored crayon buttons for the text color.
The chosen colors are then displayed in a custom preview panel.
This example demonstrates how to handle user interactions with the color chooser, update the SPA application based on color selections, and provide a visual preview of the chosen colors.
`}
    />
  );
};

export default ColorChooserDemoPage;

export const Head = () => <SEO title={title} description={description} />;
