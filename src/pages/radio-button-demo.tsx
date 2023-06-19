import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "RadioButtonDemo";
const description: string = `An HTML version of Oracle's ${title} example`;
const id = "radio-button-demo";

const RadioButtonDemoPage = ({ path, location }: PageProps) => {
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
       data-overlay>
    <div class="CenterLayout"
         style="padding: .25em;">
      <div class="BorderLayout">
        <div class="LineStart">
          <!-- radio buttons -->
          <div style="display: grid;">
            <label>
              <input type="radio"
                     name="option"
                     value="Bird"
                     data-key="b"
                     data-alt
                     onchange="handleChange(event);"
                     checked>
                <u>B</u>ird
            </label>
            <label>
              <input type="radio"
                     name="option"
                     value="Cat"
                     data-key="c"
                     data-alt
                     onchange="handleChange(event);">
                <u>C</u>at
            </label>
            <label>
              <input type="radio"
                     name="option"
                     value="Dog"
                     data-key="d"
                     data-alt
                     onchange="handleChange(event);">
                <u>D</u>og
            </label>
            <label>
              <input type="radio"
                     name="option"
                     value="Rabbit"
                     data-key="r"
                     data-alt
                     onchange="handleChange(event);">
                <u>R</u>abbit
            </label>
            <label>
              <input type="radio"
                     name="option"
                     value="Pig"
                     data-key="p"
                     data-alt
                     onchange="handleChange(event);">
                <u>P</u>ig
            </label>
          </div>
        </div>
        <div class="CenterLayout"
             style="padding: 0 0 0 .5em;
                    width: 130px;
                    height: 130px;">
          <!-- picture -->
          <img src="../images/Bird.gif"
               alt="Pet image"
               id="picture">
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
  const radioButton = event.currentTarget;
  const value = radioButton.value;
  const picture = document.getElementById("picture");
  picture.src = "../images/" + value + ".gif";
};
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
The purpose of the provided code is to create a SPA application that showcases the use of radio buttons and displays corresponding images based on the selected option.
The application consists of a UI with a set of radio buttons representing different animals (bird, cat, dog, rabbit, pig) and a central picture img element.
Each radio button is associated with a value that corresponds to an image file.
When a radio button is selected, the event listener is triggered, changing the image displayed in the picture img element based on the selected animal.
`}
    />
  );
};

export default RadioButtonDemoPage;

export const Head = () => <SEO title={title} description={description} />;
