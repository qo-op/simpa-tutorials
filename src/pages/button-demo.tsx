import React from "react";
import { PageProps } from "gatsby";
import { SEO } from "components/SEO";
import ExampleLayout from "components/ExampleLayout";

const title: string = "";
const description: string = "";

const ButtonDemoPage = ({ path }: PageProps) => {
  return (
    <ExampleLayout
      path={path}
      htmlCode={`<!-- example.html -->
<!-- An HTML version of Oracle's ButtonDemo example -->
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet"
        href="./example.css">
  <script src="./example.js">
  </script>
</head>
<body class="ScrollPane"
      data-scrollbar-overlay
      id="ButtonDemo">
  <div class="BoxLayout"
       style="gap: .5em">
    <!-- Disable middle button -->
    <button class="BoxLayout"
            onclick="disable(event);"
            id="b1">
      <span>Disable middle button</span>
      <span class="material-icons">
        arrow_right
      </span>
    </button>
    <!-- Middle button -->
    <button class="BoxLayout"
            data-axis="page-axis"
            id="b2">
      <span>Middle button</span>
      <span class="material-icons"
            style="color: Gold;">
        star
      </span>
    </button>
    <!-- Enable middle button -->
    <button class="BoxLayout"
            onclick="enable(event);"
            id="b3"
            disabled>
      <span class="material-icons">
        arrow_left
      </span>
      <span>Enable middle button</span>
    </button>
  </div>
</body>
</html>
`}
      cssCode={`/* example.css */
`}
      jsCode={`/* example.js */
function disable(event) {
  const b1 = document.getElementById("b1");
  const b2 = document.getElementById("b2");
  const b3 = document.getElementById("b3");
  b1.disabled = true;
  b2.disabled = true;
  b3.disabled = false;
};
function enable(event) {
  const b1 = document.getElementById("b1");
  const b2 = document.getElementById("b2");
  const b3 = document.getElementById("b3");
  b1.disabled = false;
  b2.disabled = false;
  b3.disabled = true;
};
`}
      info={`
An HTML version of Oracle's ButtonDemo example, using simpa.css
`}
    />
  );
};

export default ButtonDemoPage;

export const Head = () => <SEO title={title} description={description} />;
