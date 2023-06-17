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
      <h2>Creating simple dialogs with OptionPane</h2>
      <p>
        <code>OptionPane</code> is a class that provides a convenient way to
        display various types of dialog boxes, including information messages,
        warning messages, error messages, and input prompts, within an
        application. With OptionPane, developers can easily create and manage
        these dialog boxes without having to build them from scratch.
      </p>
      <p>
        To use <code>OptionPane</code>, you typically start by calling one of
        its static methods, such as <code>showMessageDialog()</code>,{" "}
        <code>showConfirmDialog()</code>, or <code>showInputDialog()</code>,
        passing the necessary parameters to specify the dialog's content, title,
        icon, buttons, and other options.
      </p>
      <p>
        The <code>OptionPane</code> class offers a wide range of dialog box
        options and customization capabilities. You can display text messages,
        display different types of icons to represent the dialog's purpose,
        provide multiple choices for confirmation or selection, and retrieve
        input from the user.
      </p>
      <p>
        Overall, <code>OptionPane</code> simplifies the process of displaying
        standard dialog boxes in SPA applications. It provides a straightforward
        and flexible way to interact with users, present information, and gather
        input, enhancing the user experience and making it easier to communicate
        with the users of your application.
      </p>
      <hr />
      <h2>showMessageDialog</h2>
      <p></p>
      <p></p>
      <NoteAboutSimpaJS subject="Simpa JS Components" />
    </Layout>
  );
};

export default DialogPage;

export const Head = () => <SEO title={title} description={description} />;
