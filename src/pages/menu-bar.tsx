import React from "react";
import { PageProps } from "gatsby";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Layout from "components/Layout";
import NoteAboutSimpaJS from "components/NoteAboutSimpaJS";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import SaveIcon from "@mui/icons-material/Save";
import Logout from "@mui/icons-material/Logout";
import FileOpen from "@mui/icons-material/FileOpen";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { SEO } from "components/SEO";

const title: string = "How to Use Menu Bars with HTML, CSS and JavaScript";
const description: string = "This tutorial shows how to use menu bars (MenuBar) using HTML, CSS and JavaScript.";

const MenuBarPage = ({ path }: PageProps) => {
  return (
    <Layout path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use Menu Bars</span>
        <span>with HTML, CSS</span>
        <span>and JavaScript</span>
      </h1>
      <p>
        <code>MenuBar</code> is a component that provides a menu bar
        functionality to a page or a top-level container. It serves as a
        container for drop-down <code>Menu</code> objects, which in turn contain{" "}
        <code>MenuItem</code> objects. A menu bar typically appears at the top
        of a page and contains a collection of drop-down menus that can be
        accessed by the user.
      </p>
      <div
        className="BorderLayout"
        style={{ height: "200px", border: "1px solid Gray" }}
      >
        <div className="PageStart">
          <ul
            className="MenuBar"
            data-open
            style={{ backgroundColor: "LightGray" }}
          >
            <li data-selected>
              <div className="Menu">
                <span>File</span>
              </div>
              <ul>
                <li>
                  <div className="MenuItem">
                    <span />
                    <span>New</span>
                    <span />
                  </div>
                </li>
                <li>
                  <div className="MenuItem">
                    <FileOpenIcon />
                    <span>Open</span>
                    <span />
                  </div>
                </li>
                <li>
                  <div className="MenuItem">
                    <SaveIcon />
                    <div className="MenuItemShortcut">
                      <span>Save</span>
                      <span>Ctrl+S</span>
                    </div>
                    <span />
                  </div>
                </li>
                <li className="Separator">
                  <hr />
                </li>
                <li>
                  <div className="MenuItem">
                    <Logout />
                    <span>Exit</span>
                    <span />
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <p>Here's an example of MenuBar with two drop-down menus:</p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<!-- material icons -->
<link rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons">
...
<ul class="MenuBar">
  <li>
    <!-- menu -->
    <div class="Menu">
      <span>File</span>
    </div>
    <ul>
      <li>
        <!-- menu item -->
        <div class="MenuItem">
          <span></span> <!-- icon -->
          <span>New</span> <!-- text -->
          <span></span> <!-- submenu icon -->
        </div>
      </li>
      <li>
        <!-- menu item -->
        <div class="MenuItem">
          <span class="material-icons">
            file_open
          </span>
          <span>Open</span>
          <span></span>
        </div>
      </li>
      <li>
        <!-- menu item -->
        <div class="MenuItem">
          <span></span>
          <!-- text with shortcut -->
          <div class="MenuItemShortcut">
            <span>Save</span>
            <span>Ctrl+S</span>
          </div>
          <span></span>
        </div>
      </li>
      <li>
        <!-- separator -->
        <hr />
      </li>
      <li>
        <!-- menu item -->
        <div class="MenuItem">
          <span></span>
          <span>Exit</span>
          <span></span>
        </div>
      </li>
    </ul>
  </li>
  <li>
    <!-- menu -->
    <div class="Menu">
      <span>Edit</span>
    </div>
    <ul>
      <li>
        <!-- menu item -->
        <div class="MenuItem">
          <span></span>
          <span>Copy</span>
          <span></span>
        </div>
      </li>
    </ul>
  </li>
</ul>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        When you run this code, you will see a menu bar with two drop-down
        menus: "File" and "Edit", like this:
      </p>
      <div
        className="BorderLayout"
        style={{ height: "200px", border: "1px solid Gray" }}
      >
        <div className="PageStart">
          <ul className="MenuBar" style={{ backgroundColor: "LightGray" }}>
            <li>
              <div className="Menu">
                <span>File</span>
              </div>
              <ul>
                <li>
                  <div className="MenuItem">
                    <span />
                    <span>New</span>
                    <span />
                  </div>
                </li>
                <li>
                  <div className="MenuItem">
                    <FileOpen />
                    <span>Open</span>
                    <span />
                  </div>
                </li>
                <li>
                  <div className="MenuItem">
                    <span />
                    <div className="MenuItemShortcut">
                      <span>Save</span>
                      <span>Ctrl+S</span>
                    </div>
                    <span />
                  </div>
                </li>
                <li>
                  <hr />
                </li>
                <li>
                  <div className="MenuItem">
                    <span />
                    <span>Exit</span>
                    <span />
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <div className="Menu">
                <span>Edit</span>
              </div>
              <ul>
                <li>
                  <div className="MenuItem">
                    <span></span>
                    <span>Copy</span>
                    <span></span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <p>Try clicking a menu in the menu bar above.</p>
      <hr />
      <h2>Example with a submenu</h2>
      <p>
        You can nest menus inside menus to create a hierarchical structure with
        multiple levels.
      </p>
      <p>Here's an example to demonstrate creating multiple levels of menus:</p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<!-- material icons -->
<link rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons">
...
<ul class="MenuBar">
  <li>
    <!-- menu -->
    <div class="Menu">
      <span>File</span>
    </div>
    <ul>
      <li>
        <!-- menu item -->
        <div class="MenuItem">
          <span></span>
          <span>New</span>
          <span></span>
        </div>
      </li>
      <li>
        <!-- menu item -->
        <div class="MenuItem">
          <span></span>
          <span>Open</span>
          <span></span>
        </div>
      </li>
      <li>
        <!-- submenu -->
        <div class="Menu">
          <span></span>
          <span>Recent</span>
          <span class="material-icons">
            keyboard_arrow_right
          </span>
        </div>
        <ul>
          <li>
            <!-- submenu item -->
            <div class="MenuItem">
              <span></span>
              <span>File 1</span>
              <span></span>
            </div>
          </li>
          <li>
            <!-- submenu item -->
            <div class="MenuItem">
              <span></span>
              <span>File 2</span>
              <span></span>
            </div>
          </li>
        </ul>
      </li>
      <li>
        <!-- menu item -->
        <div class="MenuItem">
          <span></span>
          <div class="MenuItemShortcut">
            <span>Save</span>
            <span>Ctrl+S</span>
          </div>
          <span></span>
        </div>
      </li>
      <li>
        <hr />
      </li>
      <li>
        <!-- menu item -->
        <div class="MenuItem">
          <span></span>
          <span>Exit</span>
          <span></span>
        </div>
      </li>
    </ul>
  </li>
</ul>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        When you run this code, you will see a menu bar with a "File" drop-down
        menu.
        <br />
        Try clicking on the "File" menu to open the drop-down menu.
        <br />
        Next, click or hover over the "Recent" submenu to expand it.
      </p>
      <div
        className="BorderLayout"
        style={{ height: "200px", border: "1px solid Gray" }}
      >
        <div className="PageStart">
          <ul className="MenuBar" style={{ backgroundColor: "LightGray" }}>
            <li>
              <div className="Menu">
                <span>File</span>
              </div>
              <ul>
                <li>
                  <div className="MenuItem">
                    <span />
                    <span>New</span>
                    <span />
                  </div>
                </li>
                <li>
                  <div className="MenuItem">
                    <span />
                    <span>Open</span>
                    <span />
                  </div>
                </li>
                <li>
                  <div className="Menu">
                    <span></span>
                    <span>Recent</span>
                    <KeyboardArrowRight />
                  </div>
                  <ul>
                    <li>
                      <div className="MenuItem">
                        <span></span>
                        <span>File 1</span>
                        <span></span>
                      </div>
                    </li>
                    <li>
                      <div className="MenuItem">
                        <span></span>
                        <span>File 2</span>
                        <span></span>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="MenuItem">
                    <span />
                    <div className="MenuItemShortcut">
                      <span>Save</span>
                      <span>Ctrl+S</span>
                    </div>
                    <span />
                  </div>
                </li>
                <li>
                  <hr />
                </li>
                <li>
                  <div className="MenuItem">
                    <span />
                    <span>Exit</span>
                    <span />
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <p></p>
      <div style={{ backgroundColor: "ivory" }}>
        <hr />
        <div style={{ padding: "0 1em" }}>
          <h2>Note about Drop-down Menus on Small Screen Devices</h2>
          <p>
            Using drop-down menus on small screen devices, such as phones, is
            not recommended due to limited screen space, making it harder for
            users to view and interact with them. Navigation complexity and
            nested drop-down menus further complicate usability on small
            screens, causing frustration among users.
          </p>
          <p>
            Instead of using traditional drop-down menus on small screen
            devices, it is recommended to consider alternative navigation
            patterns that are more suitable for mobile devices. Some options
            include:
          </p>
          <ul>
            <li>
              Hamburger menu: Use an icon (typically three horizontal lines)
              that expands to display a menu when tapped.
            </li>
            <li>
              Accordion menus: Present a collapsible menu structure that expands
              and collapses sections as needed.
            </li>
          </ul>
          <p>
            These alternatives offer better usability, take advantage of the
            limited screen space, and provide a more mobile-friendly navigation
            experience for users on small screens.
          </p>
        </div>
        <hr />
      </div>
      <NoteAboutSimpaJS subject="Simpa JS Components" />
    </Layout>
  );
};

export default MenuBarPage;

export const Head = () => <SEO title={title} description={description} />;
