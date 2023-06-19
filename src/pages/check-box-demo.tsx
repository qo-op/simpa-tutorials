import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "CheckBoxDemo";
const description: string =
  "Explore an HTML version of Oracle's CheckBoxDemo example implemented using simpa. This tutorial focuses on the usage of checkboxes in a single-page application (SPA) environment. Dive into a captivating demonstration that presents a window with four checkboxes: 'Chin,' 'Glasses,' 'Hair,' and 'Teeth.' Witness the dynamic behavior as the program updates a string representation of the selected accessories based on the user's checkbox selections. Experience the magic of visual transformation as the program dynamically updates and displays an image of a 'geek' character based on the selected accessories. Delve into the event handling mechanism that drives these updates, gaining insight into checkbox event management in SPAs. Acquire practical knowledge on integrating checkboxes, managing state changes, and leveraging event-driven functionality to create engaging user experiences within your SPA development endeavors.";
const id = "check-box-demo";

const CheckBoxDemoPage = ({ path, location }: PageProps) => {
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
      <div class="BoxLayout"
           style="gap: .5em;">
        <!-- check boxes -->
        <form>
          <!-- Chin check box -->
          <label>
            <input type="checkbox"
                   value="c"
                   onchange="updatePicture(event);"
                   checked>
              Chin
          </label><br>
          <!-- Glasses check box -->
          <label>
            <input type="checkbox"
                   value="g"
                   onchange="updatePicture(event);"
                   checked>
              Glasses
          </label><br>
          <!-- Hair check box -->
          <label>
            <input type="checkbox"
                   value="h"
                   onchange="updatePicture(event);"
                   checked>
              Hair
          </label><br>
          <!-- Teeth check box -->
          <label>
            <input type="checkbox"
                   value="t"
                   onchange="updatePicture(event);"
                   checked>
              Teeth
          </label>
        </form>
        <!-- picture -->
        <img src="../images/geek-cght.gif"
             alt="Geek image"
             id="picture">
      </div>
    </div>
  </div>
</body>
</html>
`}
      cssCode={`/* ${title}.css */
`}
      jsCode={`/* ${title}.js */
choices = "cght".split("");
function updatePicture(event) {
  let index = 0;
  const checkBox = event.currentTarget;
  let c = checkBox.value;
  switch (c) {
    case "c":
      index = 0;
      break;
    case "g":
      index = 1;
      break;
    case "h":
      index = 2;
      break;
    case "t":
      index = 3;
      break;
  }
  if (!checkBox.checked) {
    c = "-";
  }
  choices[index] = c;
  const picture = document.getElementById("picture");
  picture.src = "../images/geek-" + choices.join("") + ".gif";
};
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
This example demonstrates the usage of checkboxes in a SPA application.
It creates a window with four checkboxes labeled "Chin," "Glasses," "Hair," and "Teeth."
When the user selects or deselects these checkboxes, the program updates a string representing the selected accessories.
Based on this string, the program dynamically updates the displayed image of a "geek" character.
The purpose of this example is to showcase how to handle checkbox events in a SPA application.
`}
    />
  );
};

export default CheckBoxDemoPage;

export const Head = () => <SEO title={title} description={description} />;
