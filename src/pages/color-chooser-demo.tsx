import React from "react";
import { PageProps } from "gatsby";
import { SEO } from "components/SEO";
import ExampleLayout from "components/ExampleLayout";

const title: string = "ColorChooserDemo";
const description: string = `An HTML version of Oracle's ${title} example`;

const ColorChooserDemoPage = ({ path }: PageProps) => {
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
    <div class="BorderLayout">
      <div class="PageStart">
        <div class="TitleBorder"
              style="background-color: White;">
          <h6>Banner</h6>
          <div class="CenterLayout"
               style="background-color: blue;">
            <span style="color: Yellow;
                         font-size: 24px;">
              Welcome to the Tutorial Zone!
            <span>
          </div>
        </div>
      </div>
      <div class="TitleBorder"
            style="background-color: White;">
        <h6>Choose Background Color</h6>
        <div class="CenterLayout">
          <button style="margin: .25em;">
            Show Color Chooser...
          </button>
        </div>
      </div>
      <div class="PageEnd">
        <div class="TitleBorder"
             style="background-color: White;">
          <h6>Choose Text Color</h6>
          <div style="padding: .25em;
                      display: grid;
                      grid-template-columns: 1fr 1fr;
                      gap: .25em;">
            <img src="/red.gif"
                 alt="The red crayon"
                 style="width: 180px; height: 22px">
            <img src="/yellow.gif"
                 alt="The yellow crayon"
                 style="width: 180px; height: 22px">
            <img src="/green.gif"
                 alt="The green crayon"
                 style="width: 180px; height: 22px">
            <img src="/blue.gif"
                 alt="The blue crayon"
                 style="width: 180px; height: 22px">
          </div>
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
function handleKeyDown(event) {
  if (event.altKey) {
    switch(event.key) {
      case "d":
        const b1 = document.getElementById("b1");
        b1.click();
        event.preventDefault();
        break;
      case "m":
        const b2 = document.getElementById("b2");
        b2.click();
        event.preventDefault();
        break;
      case "e":
        const b3 = document.getElementById("b3");
        b3.click();
        event.preventDefault();
        break;
    }
  }
};
document.addEventListener("keydown", handleKeyDown);
`}
      info={`
An HTML version of Oracle's ColorChooserDemo2 example, using simpa.css
`}
    />
  );
};

export default ColorChooserDemoPage;

export const Head = () => <SEO title={title} description={description} />;
