import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "CardLayoutDemo";
const description: string =
  "Explore an HTML version of Oracle's CardLayoutDemo example implemented using simpa. This tutorial focuses on the usage of the CardLayout layout manager in a single-page application (SPA). Discover how to create a dynamic application with multiple panels, or 'cards,' that can be switched using a combo box. Each card represents a specific layout with unique components such as buttons and a text field. By selecting different cards, you can observe the CardLayout seamlessly transitioning between them. Enhance your understanding of layout management by studying the behavior of CardLayout and its ability to control component visibility. Run the example and witness the smooth switching of cards based on user interaction. Elevate your web development skills and master the implementation of CardLayout in SPA applications.";
const id = "card-layout-demo";

const CardLayoutDemoPage = ({ path, location }: PageProps) => {
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
      id="${id}">
  <div class="ScrollPane"
       data-overlay>
    <div class="CenterLayout"
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
          <!-- card with buttons -->
          <div class="FlowLayout"
               data-name="Card with Buttons"
               style="gap: .5em;
                      visibility: inherit">
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          </div>
          <!-- card with text field -->
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
The purpose of this example is to create a SPA application that demonstrates the usage of the CardLayout layout manager.
This example uses a CardLayout to switch between different panels within the application.
The panels are created as "cards" and contain different components such as buttons and a text field.
The user can select different cards using a combo box at the top of the page.
When a different card is selected, the CardLayout switches the currently visible card accordingly.
`}
    />
  );
};

export default CardLayoutDemoPage;

export const Head = () => <SEO title={title} description={description} />;
