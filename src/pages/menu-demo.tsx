import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "MenuDemo";
const description: string = `An HTML version of Oracle's ${title} example`;
const id = "menu-demo";

const MenuDemoPage = ({ path, location }: PageProps) => {
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
        href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet"
        href="./${title}.css">
  <script src="./${title}.js">
  </script>
</head>
<body class="Frame"
      style="padding-block: .25em;"
      id="${id}">
  <div class="BorderLayout">
    <div class="PageStart">
      <ul class="MenuBar"
          style="background-color: WhiteSmoke;">
        <li>
          <div class="Menu">
            <span data-key="a"
                  data-alt>
              <u>A</u> Menu
            </span>
          </div>
          <ul>
            <li>
              <div class="MenuItem"
                   onpointerup="handlePointerUp(event);">
                <span></span>
                <span data-key="t"
                      data-alt>
                  A <u>t</u>ext-only menu item
                </span>
                <span data-key="1"
                      data-alt>
                  Alt+1
                </span>
                <span></span>
              </div>
            </li>
            <li>
              <div class="MenuItem"
                   onpointerup="handlePointerUp(event);">
                <img src="../images/middle.gif">
                <span data-key="b"
                      data-alt>
                  <u>B</u>oth text and icon
                </span>
                <span></span>
              </div>
            </li>
            <li>
              <div class="MenuItem"
                   onpointerup="handlePointerUp(event);">
                <img src="../images/middle.gif">
                <span></span>
                <span></span>
              </div>
            </li>
            <li>
              <hr>
            </li>
            <li>
              <div class="MenuItem"
                   onpointerup="handlePointerUp(event);">
                <input type="radio"
                       name="group"
                       checked>
                <span data-key="r"
                      data-alt>
                  A <u>r</u>adio button menu item
                </span>
                <span></span>
              </div>
            </li>
            <li>
              <div class="MenuItem"
                   onpointerup="handlePointerUp(event);">
                <input type="radio"
                       name="group">
                <span data-key="o"
                      data-alt>
                  An<u>o</u>ther one
                </span>
                <span></span>
              </div>
            </li>
            <li>
              <hr>
            </li>
            <li>
              <div class="MenuItem"
                   onpointerup="handlePointerUp(event);">
                <input type="checkbox">
                <span data-key="c"
                      data-alt>
                  A <u>c</u>heck box menu item
                </span>
                <span></span>
              </div>
            </li>
            <li>
              <div class="MenuItem"
                   onpointerup="handlePointerUp(event);">
                <input type="checkbox">
                <span data-key="h"
                      data-alt>
                  Anot<u>h</u>er one
                </span>
                <span></span>
              </div>
            </li>
            <li>
              <hr>
            </li>
            <li>
              <div class="Menu">
                <span></span>
                <span data-key="s"
                      data-alt>
                  A <u>s</u>ubmenu
                </span>
                <span class="material-icons">
                  navigate_next
                </span>
              </div>
              <ul>
                <li>
                  <div class="MenuItem"
                       onpointerup="handlePointerUp(event);"
                       data-key="2"
                       data-alt>
                    <span></span>
                    <span>
                      An item in submenu
                    </span>
                    <span>
                      Alt+2
                    </span>
                    <span></span>
                  </div>
                </li>
                <li>
                  <div class="MenuItem"
                       onpointerup="handlePointerUp(event);">
                    <span></span>
                    <span>
                      Another item
                    </span>
                    <span></span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <div class="Menu">
            <span data-key="n"
                  data-alt>
              A<u>n</u>other Menu
            </span>
          </div>
        </li>
      </ul>
    </div>
    <div class="BorderLayout">
      <textarea class="ScrollPane"
                readonly
                id="output"></textarea>
    </div>
  </div>
</body>
</html>
`}
      cssCode={`/* ${title}.css */
`}
      jsCode={`/* ${title}.js */
function handlePointerUp(event) {
  const menuItem = event.currentTarget;
  const output = document.getElementById("output");
  if (output.value) {
    output.value += "\\n";
  }
  output.value += "Clicked: " + menuItem.textContent.trim().replace(/\\s+/g, " ");
  const input = menuItem.querySelector(":scope input");
  if (input) {
    output.value += " (type: " + input.type + ", checked: " + input.checked + ")";
  }
}
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
`}
    />
  );
};

export default MenuDemoPage;

export const Head = () => <SEO title={title} description={description} />;
