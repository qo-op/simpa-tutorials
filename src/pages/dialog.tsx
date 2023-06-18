import Layout from "components/Layout";
import NoteAboutSimpaJS from "components/NoteAboutSimpaJS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const title: string = "How to Use Dialogs with HTML, CSS and JavaScript";
const description: string =
  "This tutorial shows how to use dialogs using HTML, CSS and JavaScript.";

const DialogPage = ({ path }: PageProps) => {
  const click = (ev: React.MouseEvent) => {
    const button: HTMLElement = ev.target as HTMLElement;
    const dialog: HTMLElement = button.closest(".Dialog") as HTMLElement;
    if (dialog.style.position === "fixed") {
      dialog.style.position = "";
    }
  };
  const showMessage = (ev: React.MouseEvent) => {
    (window as any).OptionPane.showMessageDialog(
      "Hello, World!",
      "Message Dialog",
      "information"
    );
  };
  return (
    <Layout path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use Dialogs</span>
        <span>with HTML, CSS</span>
        <span>and JavaScript</span>
      </h1>
      <p>
        A <code>Dialog</code> represents a secondary window that appears on top
        of the main application. It is typically used to prompt the user for
        input, display messages, or provide additional information.
      </p>
      <p>
        Here's an example of a basic <code>Dialog</code>:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="Dialog BorderLayout">
  <div class="PageStart">
    <!-- dialog title bar -->
    <div class="DialogTitleBar"
         style="background-color: LightGray;
                padding: 0 .5em;">
      Message
    </div>
  </div>
  <!-- dialog content -->
  <div class="BoxLayout"
       data-axis="page-axis"
       data-alignment-x="stretch"
       style="gap: .5em;
              padding: .5em;">
    <!-- dialog text -->
    <span>
      This is a dialog!
    </span>
    <!-- button pane -->
    <div class="FlowLayout"
         style="gap: .5em;">
      <!-- ok button -->
      <button>OK</button>
    </div>
  </div>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        In the example above, we create a <code>div</code> container and set its
        class to <code>"Dialog"</code>.
      </p>
      <p>
        When you run this code, you will see a dialog with a "This is a dialog!"
        message.
      </p>
      <p>
        By default, <code>Dialog</code> enables the user to move itself by
        simply clicking and dragging its title bar. Try moving the dialog by its
        title bar.
      </p>
      <div className="CenterLayout">
        <div className="LayeredPane">
          <div className="Dialog BorderLayout" style={{ visibility: "hidden" }}>
            <div className="PageStart">
              <div
                className="DialogTitleBar"
                style={{ backgroundColor: "LightGray", padding: "0 .5em" }}
              >
                Message
              </div>
            </div>
            <div
              className="BoxLayout"
              data-axis="page-axis"
              data-alignment-x="stretch"
              style={{ gap: ".5em", padding: ".5em" }}
            >
              <span>This is a dialog!</span>
              <div className="FlowLayout" style={{ gap: ".5em" }}>
                <button>OK</button>
              </div>
            </div>
          </div>
          <div className="Dialog BorderLayout">
            <div className="PageStart">
              <div
                className="DialogTitleBar"
                style={{ backgroundColor: "LightGray", padding: "0 .5em" }}
              >
                Message
              </div>
            </div>
            <div
              className="BoxLayout"
              data-axis="page-axis"
              data-alignment-x="stretch"
              style={{ gap: ".5em", padding: ".5em" }}
            >
              <span>This is a dialog!</span>
              <div className="FlowLayout" style={{ gap: ".5em" }}>
                <button onClick={click}>OK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p></p>
      <hr />
      <h2>Creating Simple Dialogs with OptionPane</h2>
      <p>
        <code>OptionPane</code> is a class that provides a convenient way to
        display various types of dialog boxes, including information messages,
        warning messages, error messages, and input prompts, within an
        application.
      </p>
      <p>
        To use <code>OptionPane</code>, you start by calling one of its static
        methods, such as <code>showMessageDialog()</code>,{" "}
        <code>showConfirmDialog()</code>, or <code>showInputDialog()</code>,
        passing the necessary parameters to specify the dialog's content, title,
        icon, buttons, and other options.
      </p>
      <hr />
      <h2>OptionPane's showMessageDialog()</h2>
      <p>
        The <code>showMessageDialog()</code> method in <code>OptionPane</code>{" "}
        is a convenient way to display a dialog box with a message and an OK
        button. By calling this method and providing the necessary parameters,
        such as the message content, title, and message type, a modal dialog box
        is created and displayed to the user. The{" "}
        <code>showMessageDialog()</code> method allows developers to quickly
        inform users about important information or display notifications,
        without the need for manual creation and management of dialog
        components, making it an efficient way to communicate messages within a
        SPA application.
      </p>
      <p>
        Here's an example of how to use the <code>showMessageDialog()</code>{" "}
        method in OptionPane:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="javascript" style={vs2015} wrapLongLines>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
  <script src="https://qo-op.github.io/simpa/simpa.js">
  </script>
  <script>
    function showMessage(event) {
      OptionPane.showMessageDialog(
        "Hello, World!",
        "Message Dialog",
        "information");
    }
  </script>
</head>
<body class="Frame CenterLayout">
  <button onclick="showMessage(event);">
    Click me!
  </button>
</body>
</html>
`}
        </SyntaxHighlighter>
      </div>
      <p>
        In this example, we have an HTML page with a button. When the button is
        clicked, the <code>showMessage()</code> function is called, which
        triggers the <code>OptionPane.showMessageDialog()</code> method. A modal
        dialog box will appear with the message "Hello, World!" and an OK
        button. The dialog will be centered on the screen, and the title will be
        "Message Dialog".
      </p>
      <div
        className="CenterLayout"
        style={{ height: "100px", backgroundColor: "LightGray" }}
      >
        <button onClick={showMessage}>Click me!</button>
      </div>
      <NoteAboutSimpaJS subject="Simpa JS Components" />
    </Layout>
  );
};

export default DialogPage;

export const Head = () => <SEO title={title} description={description} />;
