import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "ProgressBarDemo";
const description: string = `An HTML version of Oracle's ${title} example`;
const id = "progress-bar-demo";

const ProgressBarDemoPage = ({ path, location }: PageProps) => {
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
      <div class="BorderLayout">
        <div class="PageStart">
          <div class="BoxLayout"
               style="gap: .5em;">
            <button onclick="start(event);">
              Start
            </button>
            <progress max="100"
                      id="progress"></progress>
          </div>
        </div>
        <div class="EmptyBorder"
             style="padding: .5em 0 0 0;">
          <textarea rows="5"
                    class="ScrollPane"
                    readonly
                    id="output"></textarea>
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
function start(event) {
  const output = document.getElementById("output");
  const progress = document.getElementById("progress");
  progress.value = 0;
  async function step() {
    await sleep(Math.floor(Math.random() * 1000));
    const i = Math.floor(Math.random() * 10);
    progress.value = Math.min(progress.value + i, 100);
    if (progress.value < 100) {
      step();
    }
  }
  if (progress.value < 100) {
    step();
  }
}
function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
`}
    />
  );
};

export default ProgressBarDemoPage;

export const Head = () => <SEO title={title} description={description} />;
