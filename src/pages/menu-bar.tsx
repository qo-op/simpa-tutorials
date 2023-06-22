import FileOpenIcon from "@mui/icons-material/FileOpen";
import FileOpen from "@mui/icons-material/FileOpen";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Logout from "@mui/icons-material/Logout";
import SaveIcon from "@mui/icons-material/Save";
import CopyToClipboardSyntaxHighlighter from "components/CopyToClipboardSyntaxHighlighter";
import Layout from "components/Layout";
import NoteAboutSimpaJS from "components/NoteAboutSimpaJS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "How to Use Menu Bars with HTML, CSS and JavaScript";
const description: string =
  "Learn how to use menu bars with HTML, CSS, and JavaScript to create interactive and user-friendly web pages. This tutorial covers the implementation of MenuBar components, drop-down menus, and nested menus. Discover how to design and customize menus, add menu items, create submenus, and handle user interactions. Enhance the navigation and functionality of your website with menu bars.";

const MenuBarPage = ({ path }: PageProps) => {
  const handlePointerUp1 = (ev: React.PointerEvent) => {
    const menuItem = ev.currentTarget;
    const span = menuItem.children[1] as HTMLSpanElement;
    const output = document.getElementById("output1") as HTMLTextAreaElement;
    output.value += "Clicked: " + span.textContent?.trim() + "\n";
  };
  const handlePointerUp2 = (ev: React.PointerEvent) => {
    const menuItem = ev.currentTarget;
    const span = menuItem.children[1] as HTMLSpanElement;
    const output = document.getElementById("output2") as HTMLTextAreaElement;
    output.value += "Clicked: " + span.textContent?.trim() + "\n";
  };
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
        A MenuBar is a component that provides menu bar functionality to a page
        or a top-level container. It serves as a container for drop-down Menu
        objects, which, in turn, contain MenuItem objects. Typically, a menu bar
        appears at the top of a page and contains a collection of drop-down
        menus that can be accessed by the user.
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
                    <span>Save</span>
                    <span data-key="s" data-ctrl>
                      Ctrl+S
                    </span>
                    <span />
                  </div>
                </li>
                <li>
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
      <p>Here's an example of a MenuBar with two drop-down menus:</p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
  <script src="https://qo-op.github.io/simpa/simpa.js">
  </script>
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <script>
    function handlePointerUp(event) {
      const menuItem = event.currentTarget;
      const span = menuItem.children[1];
      const output = document.getElementById("output");
      output.value += "Clicked: " + span.textContent.trim() + "\\n";
    }
  </script>
</head>
<body class="Frame" style="padding-block: 0.25em" id="menu-demo">
  <div class="BorderLayout">
    <div class="PageStart">
      <ul class="MenuBar">
        <li>
          <!-- menu -->
          <div class="Menu">
            <span>File</span>
          </div>
          <ul>
            <li>
              <!-- menu item -->
              <div class="MenuItem"
                   onpointerup="handlePointerUp(event);">
                <span></span>
                <!-- icon -->
                <span>New</span>
                <!-- text -->
                <span></span>
                <!-- submenu icon -->
              </div>
            </li>
            <li>
              <!-- menu item -->
              <div class="MenuItem"
                   onpointerup="handlePointerUp(event);">
                <span class="material-icons">file_open</span>
                <span>Open</span>
                <span></span>
              </div>
            </li>
            <li>
              <!-- menu item -->
              <div class="MenuItem"
                   onpointerup="handlePointerUp(event);">
                <span></span>
                <span>Save</span>
                <!-- shortcut -->
                <span data-key="s" data-ctrl>Ctrl+S</span>
                <span></span>
              </div>
            </li>
            <li>
              <!-- separator -->
              <hr />
            </li>
            <li>
              <!-- menu item -->
              <div class="MenuItem"
                   onpointerup="handlePointerUp(event);">
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
              <div class="MenuItem"
                   onpointerup="handlePointerUp(event);">
                <span></span>
                <span>Copy</span>
                <span></span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="BorderLayout">
      <textarea class="ScrollPane"
                style="border: none"
                readonly
                id="output"></textarea>
    </div>
  </div>
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In the above code, you can see a menu bar with two drop-down menus:
        "File" and "Edit".
      </p>
      <p>
        When you run this code, the menu bar will be displayed at the top of the
        page. You can click on the menus to open the respective drop-down menus.
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
                  <div className="MenuItem" onPointerUp={handlePointerUp1}>
                    <span />
                    <span>New</span>
                    <span />
                  </div>
                </li>
                <li>
                  <div className="MenuItem" onPointerUp={handlePointerUp1}>
                    <FileOpen />
                    <span>Open</span>
                    <span />
                  </div>
                </li>
                <li>
                  <div className="MenuItem" onPointerUp={handlePointerUp1}>
                    <span />
                    <span>Save</span>
                    <span data-key="s" data-ctrl>
                      Ctrl+S
                    </span>
                    <span />
                  </div>
                </li>
                <li>
                  <hr />
                </li>
                <li>
                  <div className="MenuItem" onPointerUp={handlePointerUp1}>
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
                  <div className="MenuItem" onPointerUp={handlePointerUp1}>
                    <span></span>
                    <span>Copy</span>
                    <span></span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="BorderLayout">
          <textarea
            className="ScrollPane"
            style={{ border: "none" }}
            readOnly
            id="output1"
          ></textarea>
        </div>
      </div>
      <p></p>
      <hr />
      <h2>Example with a Submenu</h2>
      <p>
        You can nest menus inside menus to create a hierarchical structure with
        multiple levels. Here's an example:
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
  <script src="https://qo-op.github.io/simpa/simpa.js">
  </script>
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <script>
    function handlePointerUp(event) {
      const menuItem = event.currentTarget;
      const span = menuItem.children[1];
      const output = document.getElementById("output");
      output.value += "Clicked: " + span.textContent.trim() + "\\n";
    }
  </script>
</head>
<body class="Frame" style="padding-block: 0.25em" id="menu-demo">
  <div class="BorderLayout">
    <div class="PageStart">
      <ul class="MenuBar">
        <li>
          <!-- menu -->
          <div class="Menu">
            <span>File</span>
          </div>
          <ul>
            <li>
              <!-- menu item -->
              <div class="MenuItem"
                   onpointerup="handlePointerUp(event);">
                <span></span>
                <span>New</span>
                <span></span>
              </div>
            </li>
            <li>
              <!-- menu item -->
              <div class="MenuItem"
                   onpointerup="handlePointerUp(event);">
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
                <span class="material-icons"> keyboard_arrow_right </span>
              </div>
              <ul>
                <li>
                  <!-- submenu item -->
                  <div class="MenuItem"
                       onpointerup="handlePointerUp(event);">
                    <span></span>
                    <span>File 1</span>
                    <span></span>
                  </div>
                </li>
                <li>
                  <!-- submenu item -->
                  <div class="MenuItem"
                       onpointerup="handlePointerUp(event);">
                    <span></span>
                    <span>File 2</span>
                    <span></span>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <!-- menu item -->
              <div class="MenuItem"
                   onpointerup="handlePointerUp(event);">
                <span></span>
                <span>Save</span>
                <!-- shortcut -->
                <span data-key="s" data-ctrl> Ctrl+S </span>
                <span></span>
              </div>
            </li>
            <li>
              <hr />
            </li>
            <li>
              <!-- menu item -->
              <div class="MenuItem"
                   onpointerup="handlePointerUp(event);">
                <span></span>
                <span>Exit</span>
                <span></span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="BorderLayout">
      <textarea class="ScrollPane"
                style="border: none"
                readonly
                id="output"></textarea>
    </div>
  </div>
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In this example, the "File" drop-down menu contains a submenu called
        "Recent" with two submenu items: "File 1" and "File 2". You can click on
        the menus to open the drop-down menus and explore the submenu by
        hovering or clicking on the "Recent" menu item.
      </p>
      <p>
        When you run this code, the menu bar will be displayed at the top of the
        page, and you can interact with the menus and submenus.
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
                  <div className="MenuItem" onPointerUp={handlePointerUp2}>
                    <span />
                    <span>New</span>
                    <span />
                  </div>
                </li>
                <li>
                  <div className="MenuItem" onPointerUp={handlePointerUp2}>
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
                      <div className="MenuItem" onPointerUp={handlePointerUp2}>
                        <span></span>
                        <span>File 1</span>
                        <span></span>
                      </div>
                    </li>
                    <li>
                      <div className="MenuItem" onPointerUp={handlePointerUp2}>
                        <span></span>
                        <span>File 2</span>
                        <span></span>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="MenuItem" onPointerUp={handlePointerUp2}>
                    <span />
                    <span>Save</span>
                    <span data-key="s" data-ctrl>
                      Ctrl+S
                    </span>
                    <span />
                  </div>
                </li>
                <li>
                  <hr />
                </li>
                <li>
                  <div className="MenuItem" onPointerUp={handlePointerUp2}>
                    <span />
                    <span>Exit</span>
                    <span />
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="BorderLayout">
          <textarea
            className="ScrollPane"
            style={{ border: "none" }}
            readOnly
            id="output2"
          ></textarea>
        </div>
      </div>
      <p></p>
      <NoteAboutSimpaJS subject="Simpa JS Components" />
    </Layout>
  );
};

export default MenuBarPage;

export const Head = () => <SEO title={title} description={description} />;
