import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "BorderDemo";
const description: string =
  "Learn how to create an HTML version of Oracle's BorderDemo example using simpa. This comprehensive tutorial demonstrates different types of borders and their usage in a single-page application (SPA). Explore various border styles, including simple borders, matte borders, titled borders, and compound borders, applied to different components. Enhance your understanding of line borders, etched borders, bevel borders, and matte borders, and observe their visual effects on the components. Follow step-by-step instructions to run the example and explore the diverse range of border options available. Elevate your web development skills and master the art of creating visually appealing borders in your applications.";
const id = "border-demo";

const BorderDemoPage = ({ path, location }: PageProps) => {
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
      <div class=TabbedPane
           style="border: 1px solid Gray;">
        <div>
          <button value="Simple"
                  tabindex=-1>
            <span>
              <span>Simple</span>
            </span>
          </button>
          <button value="Matte">
            <span>
              <span>Matte</span>
            </span>
          </button>
          <button value="Titled">
            <span>
              <span>Titled</span>
            </span>
          </button>
          <button value="Compound">
            <span>
              <span>Compound</span>
            </span>
          </button>
        </div>
        <div class="CardLayout">
          <div data-name="Simple"
               style="visibility: inherit;
                      background-color: WhiteSmoke;
                      padding: .5em;
                      display: grid;
                      grid-auto-rows: 1fr;
                      gap: .5em;">
            <!-- line border -->
            <div style="border: 1px solid Gray;"
                 class="CenterLayout">
              line border
            </div>
            <!-- raised etched border -->
            <div class="RaisedEtchedBorder CenterLayout">
              raised etched border
            </div>
            <!-- lowered etched border -->
            <div class="LoweredEtchedBorder CenterLayout">
              lowered etched border
            </div>
            <!-- raised level border -->
            <div class="RaisedBevelBorder CenterLayout">
              raised bevel border
            </div>
            <!-- lowered bevel border -->
            <div class="LoweredBevelBorder CenterLayout">
              lowered bevel border
            </div>
            <!-- empty border -->
            <div class="EmptyBorder CenterLayout">
              empty border
            </div>
          </div>
          <div data-name="Matte"
               style="visibility: hidden;
                      background-color: WhiteSmoke;
                      padding: .5em;
                      display: grid;
                      grid-auto-rows: 1fr;
                      gap: .5em;">
            <!-- matte border (10, icon) -->
            <div style="border: 10px solid;
                        border-image: url(../images/wavy.png) 20 round;"
                 class="CenterLayout">
              matte border (10, icon)
            </div>
            <!-- matte border (1, 1, 1, 5, Red) -->
            <div style="border: solid Red;
                        border-width: 1px 1px 1px 5px;"
                 class="CenterLayout">
              matte border (1, 1, 1, 5, Red)
            </div>
            <!-- matte border (0, 0, 0, 10, icon) -->
            <div style="border: solid;
                        border-width: 0 0 0 10px;
                        border-image: url(../images/wavy.png) 20 round;"
                 class="CenterLayout">
              matte border (0, 0, 0, 10, icon)
            </div>
          </div>
          <div data-name="Titled"
               style="visibility: hidden;
                      background-color: WhiteSmoke;
                      padding: .5em;
                      display: grid;
                      grid-auto-rows: 1fr;
                      gap: .5em;">
            <!-- titled line border (left just.) -->
            <div class="TitledBorder">
              <span style="background-color: WhiteSmoke;">title</span>
              <div class="CenterLayout">titled line border (left just.)</div>
            </div>
            <!-- titled line border (centered) -->
            <div class="TitledBorder"
                 data-title-justification="center">
              <span style="background-color: WhiteSmoke;">title</span>
              <div class="CenterLayout">titled line border (centered)</div>
            </div>
            <!-- titled line border (right just.) -->
            <div class="TitledBorder"
                 data-title-justification="trailing">
              <span style="background-color: WhiteSmoke;">title</span>
              <div class="CenterLayout">titled line border (right just.)</div>
            </div>
          </div>
          <div data-name="Compound"
               style="visibility: hidden;
                      background-color: WhiteSmoke;
                      padding: .5em;
                      display: grid;
                      grid-auto-rows: 1fr;
                      gap: .5em;">
            <!-- compound border (two bevels) -->
            <div class="CompoundBorder RaisedBevelBorder">
              <div class="LoweredBevelBorder CenterLayout">
                compound border (two bevels)
              </div>
            </div>
            <!-- compound border (red outline) -->
            <div class="CompoundBorder"
                 style="border: 1px solid Red;">
              <div style="border: 2px solid Gray;"
                   class="CenterLayout">
                compound border (red outline)
              </div>
            </div>
            <!-- compound border (three colors) -->
            <div class="CompoundBorder"
                 style="border: 2px solid Red;">
              <div class="CompoundBorder"
                   style="border: 2px solid Yellow;">
                <div style="border: 2px solid Green;"
                     class="CenterLayout">
                  compound border (three colors)
                </div>
              </div>
            </div>
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
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
The purpose of the this example is to demonstrate different types of borders and their usage in a SPA application.
This example creates a SPA application with multiple panes, each showcasing a different category of borders: simple borders, matte borders, titled borders, and compound borders.
Each pane contains various components with different border styles applied to them, such as line borders, etched borders, bevel borders, matte borders, and compound borders.
Running this example will display the SPA application with the different border examples, allowing users to see the visual representation of each border type and its effects on the components.
`}
    />
  );
};

export default BorderDemoPage;

export const Head = () => <SEO title={title} description={description} />;
