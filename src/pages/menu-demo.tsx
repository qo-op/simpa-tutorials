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
  <div class="BorderLayout">
    <div class="PageStart">
      <ul class="MenuBar">
        <li>
          <div class="Menu">
            <span><u>A</u> Menu</span>
          </div>
          <ul>
            <li>
              <div class="MenuItem">
                <span></span>
                <div class="MenuItemShortcut">
                  <span>
                    A <u>t</u>ext-only menu item
                  </span>
                  <span>
                    Alt 1
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div class="MenuItem">
                <span>
                  <img src="../images/middle.gif">
                </span>
                <span>
                  <u>B</u>oth text and icon
                </span>
              </div>
            </li>
            <li>
              <div class="MenuItem">
                <span>
                  <img src="../images/middle.gif">
                </span>
              </div>
            </li>
            <li>
              <hr>
            </li>
            <li>
              <div class="MenuItem">
                <input type="radio"
                       name="group"
                       checked>
                <span>
                  A <u>r</u>adio button menu item
                </span>
              </div>
            </li>
            <li>
              <div class="MenuItem">
                <input type="radio"
                       name="group">
                <span>
                  An<u>o</u>ther one
                </span>
              </div>
            </li>
            <li>
              <hr>
            </li>
            <li>
              <div class="MenuItem">
                <input type="checkbox">
                <span>
                  A <u>c</u>heck box menu item
                </span>
              </div>
            </li>
            <li>
              <div class="MenuItem">
                <input type="checkbox">
                <span>
                  Anot<u>h</u>er one
                </span>
              </div>
            </li>
            <li>
              <hr>
            </li>
            <li>
              <div class="Menu">
                <span></span>
                <span>
                  A <u>s</u>ubmenu
                </span>
                <span class="material-icons">
                  navigate_next
                </span>
              </div>
              <ul>
                <li>
                  <div class="MenuItem">
                    <span></span>
                    <div class="MenuItemShortcut">
                      <span>
                        An item in submenu
                      </span>
                      <span>
                        Alt 2
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="MenuItem">
                    <span></span>
                    <span>
                      Another item
                    </span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <div class="Menu">
            <span>A<u>n</u>other Menu</span>
          </div>
        </li>
      </ul>
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

export default MenuDemoPage;

export const Head = () => <SEO title={title} description={description} />;
