import React from "react";
import { PageProps } from "gatsby";
import { SEO } from "components/SEO";
import ExampleLayout from "components/ExampleLayout";

const title: string = "CheckBoxDemo";
const description: string = `An HTML version of Oracle's ${title} example`;

const CheckBoxDemoPage = ({ path }: PageProps) => {
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
    <div class="BoxLayout"
         style="gap: .5em;">
      <!-- check boxes -->
      <div>
        <!-- Chin check box -->
        <label>
          <input type="checkbox"
                  name="accessories"
                  value="c"
                  onchange="updatePicture(event);"
                  checked>
            Chin
        </label><br>
        <!-- Glasses check box -->
        <label>
          <input type="checkbox"
                  name="accessories"
                  value="g"
                  onchange="updatePicture(event);"
                  checked>
            Glasses
        </label><br>
        <!-- Hair check box -->
        <label>
          <input type="checkbox"
                  name="accessories"
                  value="h"
                  onchange="updatePicture(event);"
                  checked>
            Hair
        </label><br>
        <!-- Teeth check box -->
        <label>
          <input type="checkbox"
                  name="accessories"
                  value="t"
                  onchange="updatePicture(event);"
                  checked>
            Teeth
        </label>
      </div>
      <!-- picture -->
      <img src="/geek-cght.gif"
           alt="Geek image"
           id="picture">
    </div>
  </div>
</body>
</html>
`}
      cssCode={`/* ${title}.css */
`}
      jsCode={`/* ${title}.js */
var choices = "cght".split("");
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
  const img = document.getElementById("picture");
  img.src = "/geek-" + choices.join("") + ".gif";
};
`}
      info={`
An HTML version of Oracle's CheckBoxDemo example, using simpa.css
`}
    />
  );
};

export default CheckBoxDemoPage;

export const Head = () => <SEO title={title} description={description} />;
