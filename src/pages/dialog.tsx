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
  const handleClick = (ev: React.MouseEvent) => {
    const button: HTMLElement = ev.target as HTMLElement;
    const dialog: HTMLElement = button.closest(".Dialog") as HTMLElement;
    if (dialog.style.position === "fixed") {
      dialog.style.position = "";
    }
  };
  const showMessageDialog = (ev: React.MouseEvent) => {
    (window as any).OptionPane.showMessageDialog(
      "Eggs aren't supposed to be green.",
      "Message",
      "information"
    );
  };
  const showConfirmDialog = async (ev: React.MouseEvent) => {
    const textarea = document.getElementById("textarea") as HTMLTextAreaElement;
    const choice = await (window as any).OptionPane.showConfirmDialog(
      "Would you like green eggs and ham?",
      "An Inane Question",
      "yes-no"
    );
    if (choice === "Yes") {
      textarea.value += "Ewww!\n";
    } else {
      textarea.value += "Me neither!\n";
    }
    textarea.scrollTop = textarea.scrollHeight;
  };
  const showInputDialog = async (ev: React.MouseEvent) => {
    const textarea = document.getElementById(
      "textarea2"
    ) as HTMLTextAreaElement;
    const input = await (window as any).OptionPane.showInputDialog(
      "Complete the sentence: Green eggs and...",
      "Customized Dialog",
      "information",
      null,
      null,
      "ham"
    );
    if (input) {
      textarea.value += "Green eggs and... " + input + "!\n";
    } else {
      textarea.value += "Come on, finish the sentence!\n";
    }
    textarea.scrollTop = textarea.scrollHeight;
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
  <div class="BorderLayout"
       style="padding: .5em;">
    <!-- dialog text -->
    <span>
      This is a dialog!
    </span>
    <div class="PageEnd"
         style="margin: .5em 0 0 0">
      <!-- button pane -->
      <div class="FlowLayout"
           style="gap: .5em;">
        <!-- ok button -->
        <button>OK</button>
      </div>
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
            <div className="BorderLayout" style={{ padding: ".5em" }}>
              <span>This is a dialog!</span>
              <div className="PageEnd" style={{ margin: ".5em 0 0 0" }}>
                <div className="FlowLayout" style={{ gap: ".5em" }}>
                  <button>OK</button>
                </div>
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
            <div className="BorderLayout" style={{ padding: ".5em" }}>
              <span>This is a dialog!</span>
              <div className="PageEnd" style={{ margin: ".5em 0 0 0" }}>
                <div className="FlowLayout" style={{ gap: ".5em" }}>
                  <button onClick={handleClick}>OK</button>
                </div>
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
    function handleClick(event) {
      OptionPane.showMessageDialog(
        "Eggs aren't supposed to be green.",
        "Message",
        "information");
    }
  </script>
</head>
<body class="Frame CenterLayout">
  <button onclick="handleClick(event);">
    Click me!
  </button>
</body>
</html>
`}
        </SyntaxHighlighter>
      </div>
      <p>
        In this example, we have an HTML page with a button. When the button is
        clicked, the <code>handleClick()</code> function is called, which
        triggers the <code>OptionPane.showMessageDialog()</code> method. A modal
        dialog box will appear with the message "Eggs aren't supposed to be
        green." and an OK button.
      </p>
      <div
        className="CenterLayout"
        style={{ height: "100px", backgroundColor: "LightGray" }}
      >
        <button onClick={showMessageDialog}>Click me!</button>
      </div>
      <p></p>
      <hr />
      <h2>OptionPane's showConfirmDialog()</h2>
      <p>
        The <code>showConfirmDialog()</code> method in OptionPane is a useful
        feature that enables developers to display a dialog box with a message
        and customizable buttons to prompt the user for confirmation or choice.
        By calling this method and providing the necessary parameters such as
        the message content, title, message type, and button options, a modal
        dialog box is created and presented to the user.
      </p>
      <p>
        Here's an example of how to use the <code>showConfirmDialog()</code>{" "}
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
    async function handleClick(event) {
      const textarea = document.getElementById("textarea");
      const choice = await OptionPane.showConfirmDialog(
        "Would you like green eggs and ham?",
        "An Inane Question",
        "yes-no");
      if (choice === "Yes") {
        textarea.value += "Ewww!\\n";
      } else {
        textarea.value += "Me neither!\\n";
      }
      textarea.scrollTop = textarea.scrollHeight;
    }
  </script>
</head>
<body class="Frame CenterLayout">
  <div class="BoxLayout"
       data-axis="page-axis"
       style="gap: .5em;">
    <button onclick="handleClick(event);">
      Click me!
    </button>
    <textarea rows="3"
              cols="40"
              id="textarea"></textarea>
  </div>
</body>
</html>
`}
        </SyntaxHighlighter>
      </div>
      <p>
        In this example, when the button is clicked, a modal dialog box will
        appear with the message 'Would you like green eggs and ham?' and 'Yes'
        and 'No' buttons. If the user clicks 'Yes', the text 'Ewww!' will be
        printed to the textarea. If the user clicks 'No', the text 'Me neither!'
        will be printed to the textarea.
      </p>
      <div
        className="CenterLayout"
        style={{ height: "100px", backgroundColor: "LightGray" }}
      >
        <div
          className="BoxLayout"
          data-axis="page-axis"
          style={{ gap: ".5em" }}
        >
          <button onClick={showConfirmDialog}>Click me!</button>
          <textarea rows={3} cols={40} id="textarea"></textarea>
        </div>
      </div>
      <p></p>
      <hr />
      <h2>OptionPane's showInputDialog()</h2>
      <p>
        The <code>showInputDialog()</code> method in OptionPane is a convenient
        feature that allows developers to display a dialog box with a message
        and a combo box or a text input field, prompting the user for input.
      </p>
      <p>
        Here's an example of how to use the <code>showInputDialog()</code>{" "}
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
    async function handleClick(event) {
      const textarea = document.getElementById("textarea");
      const input = await OptionPane.showInputDialog(
        "Complete the sentence: Green eggs and...",
        "Customized Dialog",
        "information",
        null,
        null,
        "ham");
      if (input) {
        textarea.value = "Green eggs and... " + input + "!\\n";
      } else {
        textarea.value = "Come on, finish the sentence!\\n";
      }
      textarea.scrollTop = textarea.scrollHeight;
    }
  </script>
</head>
<body class="Frame CenterLayout">
  <div class="BoxLayout"
       data-axis="page-axis"
       style="gap: .5em;">
    <button onclick="handleClick(event);">
      Click me!
    </button>
    <textarea rows="3"
              cols="40"
              id="textarea"></textarea>
  </div>
</body>
</html>
`}
        </SyntaxHighlighter>
      </div>
      <p>
        In this example, when the button is clicked, a modal dialog box will
        appear with the message 'Complete the sentence: Green eggs and...' and
        the user is prompted to complete the sentence in the input field.
      </p>
      <div
        className="CenterLayout"
        style={{ height: "100px", backgroundColor: "LightGray" }}
      >
        <div
          className="BoxLayout"
          data-axis="page-axis"
          style={{ gap: ".5em" }}
        >
          <button onClick={showInputDialog}>Click me!</button>
          <textarea rows={3} cols={40} id="textarea2"></textarea>
        </div>
      </div>
      <NoteAboutSimpaJS subject="Simpa JS Components" />
    </Layout>
  );
};

export default DialogPage;

export const Head = () => <SEO title={title} description={description} />;
