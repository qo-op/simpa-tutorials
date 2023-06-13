import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "ButtonDemo";
const description: string = `An HTML version of Oracle's ${title} example`;
const id = "button-demo";

const ButtonDemoPage = ({ path, location }: PageProps) => {
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
           style="gap: .5em">
        <!-- Disable middle button -->
        <button onclick="disable(event);"
                id="b1">
          <span class="BoxLayout">
            <span data-key="d"
                  data-altKey>
              <u>D</u>isable middle button
            </span>
            <img src="../images/right.gif">
          </span>
        </button>
        <!-- Middle button -->
        <button id="b2">
          <span class="BoxLayout"
                data-axis="page-axis">
            <span data-key="m"
                  data-altKey>
              <u>M</u>iddle button
            </span>
            <img src="../images/middle.gif">
          </span>
        </button>
        <!-- Enable middle button -->
        <button onclick="enable(event);"
                id="b3"
                disabled>
          <span class="BoxLayout">
            <img src="../images/left.gif">
            <span data-key="e"
                  data-altKey>
              <u>E</u>nable middle button
            </span>
          </span>
        </button>
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
    const element = document.querySelector("[data-altKey][data-key=\\"" + event.key + "\\"]");
    if (element === null) {
      return;
    }
    element.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, cancelable: true }));
    element.dispatchEvent(new PointerEvent("pointerup", { bubbles: true, cancelable: true }));
    element.click();
    event.preventDefault();
  }
};
document.addEventListener("keydown", handleKeyDown);
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
`}
    />
  );
};

export default ButtonDemoPage;

export const Head = () => <SEO title={title} description={description} />;
