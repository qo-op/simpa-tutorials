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
      htmlCode={`<!-- example.html -->
<!-- An HTML version of Oracle's BorderDemo example -->
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
  <script src="https://qo-op.github.io/simpa/simpa.js">
  </script>
  <link rel="stylesheet"
        href="./example.css">
  <script src="./example.js">
  </script>
</head>
<body class="ScrollPane"
      data-scrollbar-overlay
      id="BorderDemo">
  <div style="display: grid">
    <div class="GridBagConstraints"
         data-anchor="page-start">
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
                style="display: grid;
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
             <!-- matte border (10, icon) -->
             <div style="border: 10px solid;
                         border-image: url(/wavy.png) 20 round;"
                  class="wavy-border CenterLayout">
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
                  class="wavy-border CenterLayout">
               matte border (0, 0, 0, 10, icon)
             </div>
           </div>
           <div data-name="Titled"
                style="visibility: hidden;
                       display: grid;
                       grid-auto-rows: 1fr;
                       gap: .5em;">
             <!-- titled line border (left just.) -->
             <div class="LayeredPane">
               <div style="padding-top: .5em;"
                    class="BorderLayout">
                 <div style="border: 1px solid Gray;
                             padding-top: .7em"
                      class="CenterLayout">
                      titled line border (left just.)
                 </div>
               </div>
               <div style="padding-left: .5em"
                    class="FlowLayout"
                    data-alignment="leading">
                 <span style="background-color: WhiteSmoke;
                              padding-inline: .5em;">
                   title
                 </span>
               </div>
             </div>
             <!-- titled line border (centered) -->
             <div class="LayeredPane">
               <div style="padding-top: .5em;"
                    class="BorderLayout">
                 <div style="border: 1px solid Gray;
                             padding-top: .7em"
                      class="CenterLayout">
                      titled line border (centered)
                 </div>
               </div>
               <div style="padding-left: .5em"
                    class="FlowLayout"
                    data-alignment="center">
                 <span style="background-color: WhiteSmoke;
                              padding-inline: .5em;">
                   title
                 </span>
               </div>
             </div>
             <!-- titled line border (right just.) -->
             <div class="LayeredPane">
               <div style="padding-top: .5em;"
                    class="BorderLayout">
                 <div style="border: 1px solid Gray;
                             padding-top: .7em"
                      class="CenterLayout">
                      titled line border (right just.)
                 </div>
               </div>
               <div style="padding-right: .5em"
                    class="FlowLayout"
                    data-alignment="trailing">
                 <span style="background-color: WhiteSmoke;
                              padding-inline: .5em;">
                   title
                 </span>
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
  </div>
</body>
</html>
`}
      cssCode={`/* example.css */
#BorderDemo .TabbedPane {
  border: 1px solid Gray
}

#BorderDemo .CardLayout>* {
  background-color: WhiteSmoke;
  padding: .5em;
}
`}
      jsCode={`/* example.js */
`}
      info={`
An HTML version of Oracle's BorderDemo example, using simpa.css
`}
    />
  );
};

export default BorderDemoPage;

export const Head = () => <SEO title={title} description={description} />;
