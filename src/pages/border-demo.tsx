import React from "react";
import { PageProps } from "gatsby";
import { SEO } from "components/SEO";
import ExampleLayout from "components/ExampleLayout";

const title: string = "BorderDemo";
const description: string = `An HTML version of Oracle's ${title} example`;

const BorderDemoPage = ({ path }: PageProps) => {
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
  <script src="https://qo-op.github.io/simpa/simpa.js">
  </script>
  <link rel="stylesheet"
        href="./${title}.css">
  <script src="./${title}.js">
  </script>
</head>
<body class="ScrollPane"
      data-scrollbar-overlay
      id="${id}">
  <div class="GridBagConstraints"
       data-anchor="page-start">
    <div class=TabbedPane>
      <div class="TabLayout">
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
                    display: grid;
                    grid-auto-rows: 1fr;
                    gap: .5em;">
          <!-- line border -->
          <div style="border: 1px solid Gray;"
               class="CenterLayout">
            line border
          </div>
          <!-- raised level border -->
          <div class="RaisedBevelBorder">
            <div class="CenterLayout">
              raised bevel border
            </div>
          </div>
          <!-- lowered bevel border -->
          <div class="LoweredBevelBorder">
            <div class="CenterLayout">
              lowered bevel border
            </div>
          </div>
        </div>
        <div data-name="Matte"
             style="visibility: hidden;
                    display: grid;
                    grid-auto-rows: 1fr;
                    gap: .5em;">
          <!-- matte border (10, icon) -->
          <div style="border: 10px solid;
                      border-image: url(/wavy.png) 20 round;"
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
                      border-image: url(/wavy.png) 20 round;"
               class="CenterLayout">
            matte border (0, 0, 0, 10, icon)
          </div>
        </div>
        <div data-name="Titled"
             style="visibility: hidden;
                    display: grid;
                    grid-auto-rows: 1fr;
                    gap: .5em;">
          <!-- titled line border (left just.) -->
          <div class="TitleBorder"
               style="background-color: inherit;">
            <h6>title</h6>
            <div class="CenterLayout">
              titled line border (left just.)
            </div>
          </div>
          <!-- titled line border (centered) -->
          <div class="TitleBorder"
               data-title-justification="center"
               style="background-color: inherit;">
            <h6>title</h6>
            <div class="CenterLayout">
              titled line border (centered)
            </div>
          </div>
          <!-- titled line border (right just.) -->
          <div class="TitleBorder"
               data-title-justification="trailing"
               style="background-color: inherit;">
            <h6>title</h6>
            <div class="CenterLayout">
              titled line border (right just.)
            </div>
          </div>
        </div>
        <div data-name="Compound"
             style="visibility: hidden;
                    display: grid;
                    grid-auto-rows: 1fr;
                    gap: .5em;">
          <!-- raised etched border -->
          <div style="border: 2px solid;
                      border-color: White Gray Gray White;"
               class="BorderLayout">
            <div style="border: 2px solid;
                        border-color: Gray White White Gray;"
                 class="CenterLayout">
              raised etched border
            </div>
          </div>
          <!-- lowered etched border -->
          <div style="border: 2px solid;
                      border-color: Gray White White Gray;"
               class="BorderLayout">
            <div style="border: 2px solid;
                        border-color: White Gray Gray White;"
                 class="CenterLayout">
              lowered etched border
            </div>
          </div>
          <!-- lowered etched border -->
          <div style="border: 1px solid Red;"
               class="BorderLayout">
            <div style="border: 2px solid Gray;"
                 class="CenterLayout">
              compound border (red outline)
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
#${id} .TabbedPane {
  border: 1px solid Gray
}

#${id} .CardLayout>* {
  background-color: WhiteSmoke;
  padding: .5em;
}
`}
      jsCode={`/* ${title}.js */
`}
      info={`
An HTML version of Oracle's BorderDemo example, using simpa.css
`}
    />
  );
};

export default BorderDemoPage;

export const Head = () => <SEO title={title} description={description} />;
