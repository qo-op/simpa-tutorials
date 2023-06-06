import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "LayeredPaneDemo";
const description: string = `An HTML version of Oracle's ${title} example`;
const id = "layered-pane-demo";

const LayeredPaneDemoPage = ({ path, location }: PageProps) => {
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
           data-axis="page-axis"
           data-alignment-x="stretch">
        <div class="TitledBorder">
          <span>Choose Duke's Layer and Position</span>
          <div class="FlowLayout"
               style="gap:.5em;
                      padding: .5em;">
            <select>
            <option value="0">
              Yellow (0)
            </option>
            <option value="1">
              Magenta (1)
            </option>
            <option value="2"
                    selected>
              Cyan (2)
            </option>
            <option value="3">
              Red (3)
            </option>
            <option value="4">
              Green (4)
            </option>
            </select>
            <label>
            <input type="checkbox"
                   checked>
              Top Position in Layer
            </label>
          </div>
        </div>
        <div class="TitledBorder">
          <span>Move the Mouse To Move Duke</span>
          <div class="LayeredPane">
            
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
An HTML version of Oracle's ${title} example, using simpa.css
`}
    />
  );
};

export default LayeredPaneDemoPage;

export const Head = () => <SEO title={title} description={description} />;
