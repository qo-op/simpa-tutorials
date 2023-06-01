import React from "react";
import { PageProps } from "gatsby";
import { SEO } from "components/SEO";
import ExampleLayout from "components/ExampleLayout";

const title: string = "ComboBoxDemo";
const description: string = `An HTML version of Oracle's ${title} example`;

const ComboBoxDemoPage = ({ path }: PageProps) => {
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
        href="./${title}.css">
  <script src="./${title}.js">
  </script>
  <link rel="preload" href="/Bird.gif" as="image">
  <link rel="preload" href="/Cat.gif" as="image">
  <link rel="preload" href="/Dog.gif" as="image">
  <link rel="preload" href="/Pig.gif" as="image">
  <link rel="preload" href="/Rabbit.gif" as="image">
</head>
<body class="ScrollPane"
      data-scrollbar-overlay
      id="${id}">
  <div class="GridBagConstraints"
       data-anchor="page-start"
       style="padding: .25em;">
    <div class="BoxLayout"
         data-axis="page-axis"
         style="gap: .5em;">
      <!-- combo box -->
      <select onchange="handleChange(event);">
        <option value="Bird">
          Bird
        </option>
        <option value="Cat">
          Cat
        </option>
        <option value="Dog">
          Dog
        </option>
        <option value="Rabbit">
          Rabbit
        </option>
        <option value="Pig"
                selected>
          Pig
        </option>
      </select>
      <!-- picture -->
      <img src="/Pig.gif"
           alt="Pet image"
           id="picture">
    </div>
  </div>
</body>
</html>
`}
      cssCode={`/* ${title}.css */
`}
      jsCode={`/* ${title}.js */
function handleChange(event) {
  const comboBox = event.currentTarget;
  const value = comboBox.value;
  const picture = document.getElementById("picture");
  picture.src = "/" + value + ".gif";
};
`}
      info={`
An HTML version of Oracle's ComboBoxDemo example, using simpa.css
`}
    />
  );
};

export default ComboBoxDemoPage;

export const Head = () => <SEO title={title} description={description} />;
