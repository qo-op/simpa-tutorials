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
      id="${id}">
  <div class="BorderLayout"
       style="padding: 0 0 .5em 0;">
    <div class="PageStart">
      <ul class="MenuBar"
          style="background-color: WhiteSmoke;">
        <li>
          <div class="Menu">
            <span>A Menu</span>
          </div>
          <ul>
            <li>
              <div class="MenuItem"
                   onclick="handleClick(event);"
                   id="Alt 1 MenuItem">
                <span></span>
                <div class="MenuItemShortcut">
                  <span>
                    A text-only menu item
                  </span>
                  <span>
                    Alt 1
                  </span>
                </div>
                <span></span>
              </div>
            </li>
            <li>
              <div class="MenuItem"
                   onclick="handleClick(event);">
                <span>
                  <img src="../images/middle.gif">
                </span>
                <span>
                  Both text and icon
                </span>
                <span></span>
              </div>
            </li>
            <li>
              <div class="MenuItem"
                   onclick="handleClick(event);">
                <span>
                  <img src="../images/middle.gif">
                </span>
                <span></span>
                <span></span>
              </div>
            </li>
            <li>
              <hr>
            </li>
            <li>
              <div class="MenuItem"
                   onclick="handleClick(event);">
                <input type="radio"
                       name="group"
                       checked>
                <span>
                  A radio button menu item
                </span>
                <span></span>
              </div>
            </li>
            <li>
              <div class="MenuItem"
                   onclick="handleClick(event);">
                <input type="radio"
                       name="group">
                <span>
                  Another one
                </span>
                <span></span>
              </div>
            </li>
            <li>
              <hr>
            </li>
            <li>
              <div class="MenuItem"
                   onclick="handleClick(event);">
                <input type="checkbox">
                <span>
                  A check box menu item
                </span>
                <span></span>
              </div>
            </li>
            <li>
              <div class="MenuItem"
                   onclick="handleClick(event);">
                <input type="checkbox">
                <span>
                  Another one
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
                <span>
                  A submenu
                </span>
                <span class="material-icons">
                  navigate_next
                </span>
              </div>
              <ul>
                <li>
                  <div class="MenuItem"
                       onclick="handleClick(event);"
                       id="Alt 2 MenuItem">
                    <span></span>
                    <div class="MenuItemShortcut">
                      <span>
                        An item in submenu
                      </span>
                      <span>
                        Alt 2
                      </span>
                    </div>
                    <span></span>
                  </div>
                </li>
                <li>
                  <div class="MenuItem"
                       onclick="handleClick(event);">
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
            <span>Another Menu</span>
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
function handleClick(event) {
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
function handleKeyDown(event) {
  if (event.altKey) {
    const menuItem = document.getElementById("Alt " + event.key + " MenuItem");
    menuItem.click();
  }
}
document.addEventListener("keydown", handleKeyDown);
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
`}
    />
  );
};

export default MenuDemoPage;

export const Head = () => <SEO title={title} description={description} />;
