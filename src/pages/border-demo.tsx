import React from "react";
import { PageProps } from "gatsby";
import { SEO } from "components/SEO";
import ExampleLayout from "components/ExampleLayout";

const title: string = "";
const description: string = "";

const BorderDemoPage = ({ path }: PageProps) => {
  return (
    <ExampleLayout
      path={path}
      htmlCode={`<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
  <script src="https://qo-op.github.io/simpa/simpa.js">
  </script>
  <link rel="stylesheet"
        href="./ex.css">
  <script src="./ex.js">
  </script>
</head>
<body class="CenterLayout ScrollPane"
      data-scrollbar-overlay
      id="BorderDemo">
  <div class=TabbedPane>
    <div class="TabLayout">
      <button value="Simple"
              tabindex=-1>
        <span>Simple</span>
      </button>
      <button value="Matte">
        <span>Matte</span>
      </button>
      <button value="Titled">
        <span>Titled</span>
      </button>
      <button value="Compound">
        <span>Compound</span>
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
        <div style="border: 2px solid;
                    border-color: White Gray Gray White;"
             class="CenterLayout">
          raised bevel border
        </div>
        <!-- lowered bevel border -->
        <div style="border: 2px solid;
                    border-color: Gray White White Gray;"
             class="CenterLayout">
          lowered bevel border
        </div>
      </div>
      <div data-name="Matte"
           style="visibility: hidden;
                  display: grid;
                  grid-auto-rows: 1fr;
                  gap: .5em;">
        <!-- matte border -->
        <div style="border: solid Red;
                    border-width: 1px 1px 1px 5px;"
             class="CenterLayout">
          matte border (1, 1, 1, 5, Red)
        </div>
      </div>
      <div data-name="Titled"
           style="visibility: hidden;
                  display: grid;
                  grid-auto-rows: 1fr;
                  gap: .5em;">
        <!-- titled line border (left just.) -->
        <div class="LayeredPane">
          <div style="z-index: 1;
                      padding-left: .5em"
               class="FlowLayout"
               data-alignment="leading">
            <span style="background-color: WhiteSmoke;
                         padding-inline: .5em;">
              title
            </span>
          </div>
          <div style="padding-top: .5em;"
               class="BorderLayout">
            <div style="border: 1px solid Gray;
                        padding-top: .7em"
                 class="CenterLayout">
                 titled line border (left just.)
            </div>
          </div>
        </div>
        <!-- titled line border (centered) -->
        <div class="LayeredPane">
          <div style="z-index: 1;
                      padding-left: .5em"
               class="FlowLayout"
               data-alignment="center">
            <span style="background-color: WhiteSmoke;
                         padding-inline: .5em;">
              title
            </span>
          </div>
          <div style="padding-top: .5em;"
               class="BorderLayout">
            <div style="border: 1px solid Gray;
                        padding-top: .7em"
                 class="CenterLayout">
                 titled line border (centered)
            </div>
          </div>
        </div>
        <!-- titled line border (right just.) -->
        <div class="LayeredPane">
          <div style="z-index: 1;
                      padding-right: .5em"
               class="FlowLayout"
               data-alignment="trailing">
            <span style="background-color: WhiteSmoke;
                         padding-inline: .5em;">
              title
            </span>
          </div>
          <div style="padding-top: .5em;"
               class="BorderLayout">
            <div style="border: 1px solid Gray;
                        padding-top: .7em"
                 class="CenterLayout">
                 titled line border (right just.)
            </div>
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
      </div>
    </div>
  </div>
</body>
</html>
`}
      cssCode={`/* ex.css */
#BorderDemo .TabbedPane {
  border: 1px solid Gray
}

#BorderDemo .CardLayout>* {
  background-color: WhiteSmoke;
  padding: .5em;
}
`}
      jsCode={`/* ex.js */
`}
      info={`
An HTML version of Oracle's BorderDemo example, using simpa.css
`}
    />
  );
};

export default BorderDemoPage;

export const Head = () => <SEO title={title} description={description} />;