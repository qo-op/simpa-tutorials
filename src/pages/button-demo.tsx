import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "ButtonDemo";
const description: string =
  "Discover an HTML version of Oracle's ButtonDemo example implemented using simpa. This tutorial showcases the implementation of button components in a single-page application (SPA) environment. Experience the power and versatility of buttons as essential user interface elements. Explore a panel container that features three buttons, each with unique text and icons. Learn how to configure buttons with mnemonic keys and action commands, enhancing accessibility and user interaction. Dive into event handling as event listeners respond to button clicks, dynamically enabling or disabling buttons based on their states. Acquire practical knowledge on managing button behavior and integrating event-driven functionality into your SPA development. Elevate your skills in creating engaging and interactive user interfaces with the ButtonDemo.";
const id = "button-demo";

const ButtonDemoPage = ({ path, location }: PageProps) => {
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
      <!-- button panel -->
      <div class="BoxLayout"
           style="gap: .5em">
        <!-- disable middle button -->
        <button onclick="disable(event);"
                id="b1">
          <span class="BoxLayout">
            <span data-key="d"
                  data-alt>
              <u>D</u>isable middle button
            </span>
            <img src="../images/right.gif">
          </span>
        </button>
        <!-- middle button -->
        <button id="b2">
          <span class="BoxLayout"
                data-axis="page-axis">
            <span data-key="m"
                  data-alt>
              <u>M</u>iddle button
            </span>
            <img src="../images/middle.gif">
          </span>
        </button>
        <!-- enable middle button -->
        <button onclick="enable(event);"
                id="b3"
                disabled>
          <span class="BoxLayout">
            <img src="../images/left.gif">
            <span data-key="e"
                  data-alt>
              <u>E</u>nable middle button
            </span>
          </span>
        </button>
      </div>
    </div>
  </div>
</body>
</html>
`}
      cssCode={`/* ${title}.css */
`}
      jsCode={`/* ${title}.js */
function disable(event) {
  const b1 = document.getElementById("b1");
  const b2 = document.getElementById("b2");
  const b3 = document.getElementById("b3");
  b1.disabled = true;
  b2.disabled = true;
  b3.disabled = false;
};
function enable(event) {
  const b1 = document.getElementById("b1");
  const b2 = document.getElementById("b2");
  const b3 = document.getElementById("b3");
  b1.disabled = false;
  b2.disabled = false;
  b3.disabled = true;
};
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
The purpose of this example is to create a SPA application that demonstrates the usage of button components.
This example creates a panel container. It adds three buttons to the panel, each with different text and icons.
The buttons are configured with mnemonic keys and action commands.
When the buttons are clicked, event listeners handle the events and enables/disables the buttons accordingly.
`}
    />
  );
};

export default ButtonDemoPage;

export const Head = () => <SEO title={title} description={description} />;
