import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "BoxLayoutDemo";
const description: string = `An HTML version of Oracle's ${title} example`;
const id = "box-layout-demo";

const BoxLayoutDemoPage = ({ path, location }: PageProps) => {
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
