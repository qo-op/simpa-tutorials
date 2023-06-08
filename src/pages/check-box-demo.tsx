import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "CheckBoxDemo";
const description: string = `An HTML version of Oracle's ${title} example`;
const id = "check-box-demo";

const CheckBoxDemoPage = ({ path, location }: PageProps) => {
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
  const picture = document.getElementById("picture");
  picture.src = "../images/geek-" + choices.join("") + ".gif";
};
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
`}
    />
  );
};

export default CheckBoxDemoPage;

export const Head = () => <SEO title={title} description={description} />;
