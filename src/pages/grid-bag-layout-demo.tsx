import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "GridBagLayoutDemo";
const description: string = `An HTML version of Oracle's ${title} example`;
const id = "grid-bag-layout-demo";

const GridBagLayoutDemoPage = ({ path, location }: PageProps) => {
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
    <div class="GridBagLayout">
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
`}
    />
  );
};

export default GridBagLayoutDemoPage;

export const Head = () => <SEO title={title} description={description} />;
