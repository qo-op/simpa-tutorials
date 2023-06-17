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
       data-overlay>
    <div class="CenterLayout"
         style="padding: .25em;">
      <div style="display: grid;">
        <div style="grid-row: 1;
                    grid-column: 1;"
             class="GridConstraints"
             data-fill="horizontal">
          <button>
            Button 1
          </button>
        </div>
        <div style="grid-row: 1;
                    grid-column: 2;"
             class="GridConstraints"
             data-fill="horizontal">
          <button>
            Button 2
          </button>
        </div>
        <div style="grid-row: 1;
                    grid-column: 3;"
             class="GridConstraints"
             data-fill="horizontal">
          <button>
            Button 3
          </button>
        </div>
        <div style="grid-row: 2;
                    grid-column: 1 / span 3;"
             class="GridConstraints"
             data-fill="horizontal">
          <button>
            <span class="EmptyBorder"
                  style="padding: 40px 0;">
              Long-Named Button 4
            </span>
          </button>
        </div>
        <div style="grid-row: 3;
                    grid-column: 2 / span 2;
                    padding: 10px 0 0 0;"
             class="GridConstraints"
             data-fill="horizontal">
          <button>
            5
          </button>
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

export default GridBagLayoutDemoPage;

export const Head = () => <SEO title={title} description={description} />;
