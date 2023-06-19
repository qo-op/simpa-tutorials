import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "SliderDemo";
const description: string = `An HTML version of Oracle's ${title} example`;
const id = "slider-demo";

const SliderDemoPage = ({ path, location }: PageProps) => {
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
      <div class="BoxLayout"
           data-alignment-x="stretch"
           data-axis="page-axis">
        <span class="CenterLayout"
              id="label">
          15 Frames Per Second
        </span>
        <input type="range"
               min="0"
               max="30"
               value="15"
               oninput="handleInput(event);">
        <div class="EmptyBorder"
             style="padding: .5em 0 0 0;">
          <img src="../images/T0.gif"
               alt="Doggy"
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
fps = 15;
index = 0;
picture = null;
function startAnimation() {
  picture = document.getElementById("picture");
  interval = setInterval(function() {
    if (picture) {
      picture.src = "../images/T" + ++index % 14 + ".gif";
    }
  }, 1000 / fps);
}
function stopAnimation() {
  if (typeof interval !== "undefined" && interval) {
    clearInterval(interval);
    interval = null;
  }
}
function handleInput(event) {
  const slider = event.currentTarget;
  fps = slider.value;
  const label = document.getElementById("label");
  label.textContent = fps + " Frames Per Second";
  stopAnimation();
  if (fps > 0) {
    startAnimation();
  }
}
window.addEventListener("load", function() {
  stopAnimation();
  startAnimation();
});
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
The purpose of this example is to create a SPA application that demonstrates an animation using a slider to control the frames per second (FPS).
The program displays a series of doggy pictures as an animation.
It consists of a slider that allows the user to adjust the FPS of the animation, an img element to display the animation, and additional components for layout and interaction.
The animation loops through a predefined number of frames, and the slider enables the user to control the speed of the animation by adjusting the FPS.
The program utilizes timers, listeners, and event handlers to handle animation updates and slider changes.
`}
    />
  );
};

export default SliderDemoPage;

export const Head = () => <SEO title={title} description={description} />;
