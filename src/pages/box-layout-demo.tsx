import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "BoxLayoutDemo";
const description: string =
  "Discover how to create an HTML version of Oracle's BoxLayoutDemo example using simpa. This tutorial focuses on the implementation of the BoxLayout layout manager in a single-page application (SPA). Learn how to create a vertical BoxLayout container and add buttons to it in a sequential manner. Witness the visual representation of the SPA application with buttons arranged vertically using BoxLayout. Enhance your understanding of layout management by exploring the behavior of BoxLayout and its impact on component positioning. Run the example to observe the buttons dynamically adapting to the container's dimensions. Strengthen your web development skills with this comprehensive example and elevate your proficiency in layout management.";
const id = "box-layout-demo";

const BoxLayoutDemoPage = ({ path, location }: PageProps) => {
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
      <!-- Box Layout -->
      <div class="BoxLayout"
           data-axis="page-axis"
           style="border: 1px solid Gray" >
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
        <button>Long-Named Button 4</button>
        <button>5</button>
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
The purpose of this example is to demonstrate the usage of the BoxLayout layout manager in a SPA application.
This example creates a SPA application with a container and adds buttons to it using a vertical BoxLayout.
Running this example will display the SPA application with buttons arranged vertically using BoxLayout.
`}
    />
  );
};

export default BoxLayoutDemoPage;

export const Head = () => <SEO title={title} description={description} />;
