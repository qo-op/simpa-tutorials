import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "TabbedPaneDemo";
const description: string = `An HTML version of Oracle's ${title} example`;
const id = "tabbed-pane-demo";

const TabbedPaneDemoPage = ({ path, location }: PageProps) => {
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
    <div class="CenterLayout"
         style="padding: .25em;">
      <div class="TabbedPane"
           style="border: 1px solid Gray;">
        <div>
          <button value="panel1"
                  tabindex="-1">
            <span>
              <img src="../images/middle.gif">
              <span>Tab 1</span>
            </span>
          </button>
          <button value="panel2">
            <span>
              <img src="../images/middle.gif">
              <span>Tab 2</span>
            </span>
          </button>
          <button value="panel3">
            <span>
              <img src="../images/middle.gif">
              <span>Tab 3</span>
            </span>
          </button>
          <button value="panel4">
            <span>
              <img src="../images/middle.gif">
              <span>Tab 4</span>
            </span>
          </button>
        </div>
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
`}
    />
  );
};

export default TabbedPaneDemoPage;

export const Head = () => <SEO title={title} description={description} />;
