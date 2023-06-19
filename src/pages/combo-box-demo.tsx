import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "ComboBoxDemo";
const description: string =
  "Explore an HTML version of Oracle's ComboBoxDemo example implemented using simpa. Immerse yourself in this captivating demonstration that showcases the usage of combo boxes in a single-page application (SPA) environment. Experience the power of interactivity as users select pet names from the combo box and witness the dynamic display of corresponding pet images. Delve into the inner workings of this example to learn how to set up components, handle selection events from the combo box, and seamlessly update the displayed image based on the selected pet. Discover the possibilities of creating engaging user experiences and providing dynamic content updates in SPAs. Elevate your web development projects by mastering the art of combo box integration and enhancing user interactions in your applications.";
const id = "combo-box-demo";

const ComboBoxDemoPage = ({ path, location }: PageProps) => {
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
           data-axis="page-axis"
           style="gap: .5em;">
        <!-- combo box -->
        <select onchange="handleChange(event);">
          <option value="Bird">
            Bird
          </option>
          <option value="Cat">
            Cat
          </option>
          <option value="Dog">
            Dog
          </option>
          <option value="Rabbit">
            Rabbit
          </option>
          <option value="Pig"
                  selected>
            Pig
          </option>
        </select>
        <!-- picture -->
        <img src="../images/Pig.gif"
             alt="Pet image"
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
function handleChange(event) {
  const comboBox = event.currentTarget;
  const value = comboBox.value;
  const picture = document.getElementById("picture");
  picture.src = "../images/" + value + ".gif";
};
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
The purpose of this example is to create a SPA application that demonstrates the use of a combo box.
The application displays a list of pet names (Bird, Cat, Dog, Rabbit, Pig) in a combo box.
When a pet name is selected from the combo box, an image corresponding to the selected pet is displayed.
This example sets up the components, handles the selection events from the combo box and updates the displayed image.
`}
    />
  );
};

export default ComboBoxDemoPage;

export const Head = () => <SEO title={title} description={description} />;
