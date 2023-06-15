import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "SplitPaneDemo";
const description: string = `An HTML version of Oracle's ${title}2 example`;
const id = "split-pane-demo";

const SplitPaneDemoPage = ({ path, location }: PageProps) => {
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
    <div style="display: grid;
                grid-template-column: minmax(0, auto)">
      <div class="GridConstraints"
           data-anchor="page-start"
           style="padding: .25em;">
        <div class="SplitPane"
             data-orientation="vertical-split"
             style="border: 1px solid Gray;
                    width: 240px;
                    height: 160px;">
          <div style="height: calc(100% - 1.5em);
                      border-bottom: .5px solid Gray;">
            <div class="SplitPane">
              <div class="ScrollPane"
                   style="border-right: .5px solid Gray;">
                <ul style="margin: 0;
                           padding: 0;
                           list-style-type: none;
                           cursor: default;"
                           onclick="handleClick(event);">
                  <li style="background-color: LightGray;">Bird</li>
                  <li>Cat</li>
                  <li>Dog</li>
                  <li>Rabbit</li>
                  <li>Pig</li>
                  <li>dukeWaveRed</li>
                  <li>left</li>
                  <li>middle</li>
                  <li>right</li>
                </ul>
              </div>
              <div>
              </div>
              <div class="ScrollPane CenterLayout"
                   style="border-left: .5px solid Gray;">
                <img src="../images/Bird.gif"
                    alt="Pet image"
                    id="picture">
              </div>
            </div>
          </div>
          <div>
          </div>
          <div style="height: 1.5em;
                      border-top: .5px solid Gray;">
            <span class="CenterLayout"
                  id="label">
              Click on an image name in the list
            </span>
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
function handleClick(event) {
  const ul = event.currentTarget;
  const li = event.target;
  let index = Array.from(ul.children).indexOf(li);
  if (index === -1) {
    return;
  }
  for (let i = 0; i < ul.children.length; i++) {
    const child = ul.children[i];
    child.style.backgroundColor = i === index ? "LightGray" : "";
  }
  const value = li.textContent;
  console.log("../images/" + value + ".gif");
  const picture = document.getElementById("picture");
  picture.src = "../images/" + value + ".gif";
  const label = document.getElementById("label");
  label.textContent = "Selected image number " + index;
};
`}
      info={`
An HTML version of Oracle's ${title}2 example, using simpa.
`}
    />
  );
};

export default SplitPaneDemoPage;

export const Head = () => <SEO title={title} description={description} />;
