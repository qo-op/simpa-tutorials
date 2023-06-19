import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "FlowLayoutDemo";
const description: string =
  "Discover an HTML version of Oracle's FlowLayoutDemo example implemented using simpa. This tutorial focuses on the utilization of the FlowLayout layout manager in a single-page application (SPA). Experience the dynamic arrangement of components in a flow-like manner, where a series of buttons are positioned based on available space. Explore the flexibility of FlowLayout in adapting to different screen sizes and orientations. Additionally, experiment with the component orientation options, allowing you to choose between left-to-right or right-to-left flow. With a simple click on the 'Apply component orientation' button, observe how the layout seamlessly adjusts its flow direction. Enhance your understanding of layout management and gain practical insights into implementing FlowLayout in SPA applications.";
const id = "flow-layout-demo";

const FlowLayoutDemoPage = ({ path, location }: PageProps) => {
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
      <div class="BorderLayout"
           style="border: 1px solid gray;
                  padding: .5em;">
        <div class="FlowLayout"
             style="gap: .5em;
                    padding: 0 0 .5em 0;"
             id="compsToExperiment">
          <button>
            Button 1
          </button>
          <button>
            Button 2
          </button>
          <button>
            Button 3
          </button>
          <button>
            Long-Named Button 4
          </button>
          <button>
            5
          </button>
        </div>
        <div class="PageEnd">
          <form class="FlowLayout"
               style="gap: .5em;">
            <label>
              <input type="radio"
                     name="option"
                     value="ltr"
                     checked>
              Left to right
            </label>
            <label>
              <input type="radio"
                     name="option"
                     value="rtl">
              Right to left
            </label>
            <button onclick="applyComponentOrientation(event);">
              Apply component orientation
            </button>
          </form>
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
function applyComponentOrientation(event) {
  event.preventDefault();
  const button = event.currentTarget;
  const form = button.parentElement;
  const checkedRadioButton = form.querySelector(":scope input:checked");
  const value = checkedRadioButton.value;
  const compsToExperiment = document.getElementById("compsToExperiment");
  compsToExperiment.style.direction = value;
}
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
The purpose of this example is to create a SPA application that demonstrates the usage of the FlowLayout layout manager.
This example uses FlowLayout to arrange components in a flow-like manner.
The components in the layout are a series of buttons.
This example also provides radio buttons to select the component orientation, either left to right or right to left.
When the "Apply component orientation" button is pressed, the component orientation of the layout is updated accordingly.
`}
    />
  );
};

export default FlowLayoutDemoPage;

export const Head = () => <SEO title={title} description={description} />;
