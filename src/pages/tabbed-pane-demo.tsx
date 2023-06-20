import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "TabbedPaneDemo";
const description: string =
  "An HTML version of Oracle's TabbedPaneDemo example. This example showcases a tabbed pane implementation in a single-page application (SPA). The program demonstrates the use of multiple tabs, each representing a distinct card with text labels and associated icons. Explore this example to learn how to create interactive tabbed interfaces in HTML applications using simpa.";
const id = "tabbed-pane-demo";

const TabbedPaneDemoPage = ({ path, location }: PageProps) => {
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
      <!-- tabbed pane -->
      <div class="TabbedPane"
           style="border: 1px solid Gray;">
        <!-- tab container -->
        <div>
          <button value="panel1"
                  tabindex="-1">
            <span>
              <img src="../images/middle.gif">
              <span data-key="1"
                    data-alt>
                Tab <u>1</u>
              </span>
            </span>
          </button>
          <button value="panel2">
            <span>
              <img src="../images/middle.gif">
              <span data-key="2"
                    data-alt>
                Tab <u>2</u>
              </span>
            </span>
          </button>
          <button value="panel3">
            <span>
              <img src="../images/middle.gif">
              <span data-key="3"
                    data-alt>
                Tab <u>3</u>
              </span>
            </span>
          </button>
          <button value="panel4">
            <span>
              <img src="../images/middle.gif">
              <span data-key="4"
                    data-alt>
                Tab <u>4</u>
              </span>
            </span>
          </button>
        </div>
        <!-- card container -->
        <div class="CardLayout">
          <div class="CenterLayout"
               data-name="panel1"
               style="visibility: inherit;">
            Panel #1
          </div>
          <div class="CenterLayout"
               data-name="panel2"
               style="visibility: hidden;">
            Panel #2
          </div>
          <div class="CenterLayout"
               data-name="panel3"
               style="visibility: hidden;">
            Panel #3
          </div>
          <div class="CenterLayout"
               data-name="panel4"
               style="width: 320px;
                      height: 160px;
                      visibility: hidden;">
            Panel #4 (has a size of 320 x 160).
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
The purpose of this example is to create a SPA application that demonstrates the use of a tabbed pane.
The program generates a tabbed pane with individual tabs representing distinct cards containing text labels.
It sets up multiple tabs and associates icons with each of them.
`}
    />
  );
};

export default TabbedPaneDemoPage;

export const Head = () => <SEO title={title} description={description} />;
