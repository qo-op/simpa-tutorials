import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "GridBagLayoutDemo";
const description: string =
  "Explore an HTML version of Oracle's GridBagLayoutDemo example implemented using simpa. This tutorial showcases the implementation of GridConstraints layout manager in a single-page application (SPA). Experience the power and flexibility of CSS Grid layout as it effortlessly arranges a series of button components in a grid-like structure. Each button is defined with GridConstraints, allowing fine-grained control over the fill behavior in the horizontal direction. Gain insights into creating responsive and dynamic grid-based layouts that adapt to varying content sizes and requirements. Discover practical techniques for defining grid rows and columns, spanning cells, and utilizing CSS properties for precise control over button positioning. Enhance your understanding of layout management and elevate your SPA development skills with GridBagLayout.";
const id = "grid-bag-layout-demo";

const GridBagLayoutDemoPage = ({ path, location }: PageProps) => {
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
      <div style="display: grid;">
        <div style="grid-row: 1;
                    grid-column: 1;"
             class="GridConstraints"
             data-fill="horizontal">
          <button>
            Button 1
          </button>
        </div>
        <div style="grid-row: 1;
                    grid-column: 2;"
             class="GridConstraints"
             data-fill="horizontal">
          <button>
            Button 2
          </button>
        </div>
        <div style="grid-row: 1;
                    grid-column: 3;"
             class="GridConstraints"
             data-fill="horizontal">
          <button>
            Button 3
          </button>
        </div>
        <div style="grid-row: 2;
                    grid-column: 1 / span 3;"
             class="GridConstraints"
             data-fill="horizontal">
          <button>
            <span class="EmptyBorder"
                  style="padding: 40px 0;">
              Long-Named Button 4
            </span>
          </button>
        </div>
        <div style="grid-row: 3;
                    grid-column: 2 / span 2;
                    padding: 10px 0 0 0;"
             class="GridConstraints"
             data-fill="horizontal">
          <button>
            5
          </button>
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
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
The purpose of this example is to create a SPA application that demonstrates the usage of the GridConstraints layout manager.
This example uses CSS Grid layout to arrange a series of button components in a grid-like structure.
The GridConstraints class is used to define the fill constraints for each button.
`}
    />
  );
};

export default GridBagLayoutDemoPage;

export const Head = () => <SEO title={title} description={description} />;
