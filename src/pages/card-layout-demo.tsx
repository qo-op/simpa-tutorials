import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "CardLayoutDemo";
const description: string = `An HTML version of Oracle's ${title} example`;
const id = "card-layout-demo";

const CardLayoutDemoPage = ({ path, location }: PageProps) => {
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
    <div class="GridConstraints"
         data-anchor="page-start"
         style="padding: .25em;">
      <div class="BorderLayout"
           style="border: 1px solid Gray;
                  padding: .5em;">
        <div class="PageStart CenterLayout">
          <!-- combo box -->
          <select onchange="handleChange(event);">
            <option value="Card with Buttons"
                    selected>
              Card with Buttons
            </option>
            <option value="Card with Text Field">
              Card with Text Field
            </option>
          </select>
        </div>
        <!-- card layout -->
        <div class="CardLayout"
             style="padding: .5em 0 0 0;"
             id="container">
          <div class="FlowLayout"
               data-name="Card with Buttons"
               style="gap: .5em;
                      visibility: inherit">
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          </div>
          <div class="BorderLayout"
               data-name="Card with Text Field"
               style="visibility: hidden">
            <input type="text">
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
function handleChange(event) {
  const value = event.currentTarget.value;
  const container = document.getElementById("container");
  const cards = container.children;
  for (let i = 0; i < cards.length; i++) {
    const card = container.children[i];
    if (card.dataset.name === value) {
      card.style.visibility = "inherit";
    } else {
      card.style.visibility = "hidden";
    }
  }
}
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
`}
    />
  );
};

export default CardLayoutDemoPage;

export const Head = () => <SEO title={title} description={description} />;
