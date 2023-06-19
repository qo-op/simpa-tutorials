import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "BorderLayoutDemo";
const description: string =
  "Learn how to create an HTML version of Oracle's BorderLayoutDemo example using simpa. This tutorial focuses on the implementation of the BorderLayout layout manager in a single-page application (SPA). Explore the functionality of BorderLayout by adding components, specifically buttons, to a container in different regions. Witness the layout behavior of BorderLayout as the buttons are arranged in the PAGE_START, CENTER, LINE_START, PAGE_END, and LINE_END regions. Run the example to observe the visual representation of the SPA application with buttons positioned according to the BorderLayout regions. Enhance your understanding of layout management and improve your web development skills with this comprehensive example.";
const id = "border-layout-demo";

const BorderLayoutDemoPage = ({ path, location }: PageProps) => {
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
      style="padding-block: .25em;"
      id="${id}">
  <!-- Container with Border Layout -->
  <div class="BorderLayout"
       style="border: 1px solid Gray">
    <!-- Page Start -->
    <div class="PageStart">
      <button>
        Button 1 (PAGE_START)
      </button>
    </div>
    <!-- Center -->
    <button>
      Button 2 (CENTER)
    </button>
    <!-- Line Start -->
    <div class="LineStart">
      <button>
        Button 3 (LINE_START)
      </button>
    </div>
    <!-- Page End -->
    <div class="PageEnd">
      <button>
        Long-Named Button 4 (PAGE_END)
      </button>
    </div>
    <!-- Line End -->
    <div class="LineEnd">
      <button>
        5 (LINE_END)
      </button>
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
The purpose of this example is to demonstrate the usage of the BorderLayout layout manager in a SPA application.
This example creates a SPA application with a container and adds various components to it, such as buttons, using the BorderLayout.
Running this example will display the SPA application with the buttons arranged according to the BorderLayout regions, showcasing the layout behavior of BorderLayout.
`}
    />
  );
};

export default BorderLayoutDemoPage;

export const Head = () => <SEO title={title} description={description} />;
