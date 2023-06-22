import CopyToClipboardSyntaxHighlighter from "components/CopyToClipboardSyntaxHighlighter";
import Layout from "components/Layout";
import NoteAboutSimpaJS from "components/NoteAboutSimpaJS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "How to Use Dialogs with HTML, CSS and JavaScript";
const description: string =
  "Learn how to effectively use dialogs in HTML, CSS, and JavaScript to enhance user interaction and display important information. Understand the purpose of dialogs as secondary windows that appear on top of the main application, commonly used for input prompts, messages, and additional information. Explore a practical example showcasing the creation of a basic dialog using HTML and CSS. Discover the default behavior of Dialog, allowing users to move the dialog by clicking and dragging its title bar. Dive into the OptionPane class, which provides a convenient way to display various types of dialog boxes, including information messages, warnings, errors, and input prompts. Gain insights into the showMessageDialog() method, enabling developers to quickly inform users and display notifications without manual creation and management of dialog components. Explore the showConfirmDialog() method to prompt users for confirmation or choice with customizable buttons. Discover the showInputDialog() method to interactively gather user input using combo boxes or text fields.";

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
        Dialogs are secondary windows that appear on top of the main
        application, typically used to prompt the user for input, display
        messages, or provide additional information.
      </p>
      <p>Here's an example of a basic dialog:</p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
  <script src="https://qo-op.github.io/simpa/simpa.js">
  </script>
  <script>
function showDialog(event) {
  const dialog = document.getElementById("dialog");
  dialog.style.display = "block";
  const modalLayer = document.getElementById("modal-layer");
  modalLayer.style.visibility = "inherit";
}
function ok(event) {
  const modalLayer = document.getElementById("modal-layer");
  modalLayer.style.visibility = "hidden";
  const dialog = document.getElementById("dialog");
  dialog.style.display = "none";
  dialog.style.position = "";
}
  </script>
</head>
<body class="Frame">
  <div class="CenterLayout">
    <button onclick="showDialog(event);">Click me!</button>
  </div>
  <div class="ModalLayer CenterLayout"
       style="visibility: hidden"
       id="modal-layer">
    <!-- Dialog -->
    <div class="Dialog BorderLayout"
         style="display: none;
                background-color: WhiteSmoke"
         id="dialog">
      <div class="PageStart">
        <!-- Dialog Title Bar -->
        <div class="DialogTitleBar"
             style="background-color: LightGray;
             padding: 0 0.5em">
          Message
        </div>
      </div>
      <!-- Dialog Content -->
      <div class="BorderLayout"
           style="padding: 0.5em">
        <!-- Dialog Text -->
        <span>This is a dialog!</span>
        <div class="PageEnd"
             style="margin: 0.5em 0 0 0">
          <!-- Button Pane -->
          <div class="FlowLayout"
               style="gap: 0.5em">
            <!-- OK Button -->
            <button onclick="ok(event);">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In the above example, we create a &lt;div&gt; container and set its
        class to "Dialog." When you run this code and the button is clicked, you
        will see a dialog with a "This is a dialog!" message.
      </p>
      <p>
        By default, dialogs allow the user to move them by clicking and dragging
        the title bar.
      </p>
      <div className="CenterLayout">
        <div className="BorderLayout">
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
        OptionPane is a class that provides a convenient way to display various
        types of dialog boxes within a web application, including information
        messages, warning messages, error messages, and input prompts.
      </p>
      <p>
        To use OptionPane, you start by calling one of its static methods, such
        as showMessageDialog(), showConfirmDialog(), or showInputDialog(),
        passing the necessary parameters to specify the dialog's content, title,
        icon, buttons, and other options.
      </p>
      <hr />
      <h2>OptionPane's showMessageDialog()</h2>
      <p>
        The showMessageDialog() method in OptionPane allows you to display a
        dialog box with a message and an OK button. It quickly informs users
        about important information or displays notifications without the need
        for manual creation and management of dialog components.
      </p>
      <p>Here's an example of how to use the showMessageDialog() method:</p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
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
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In this example, when the button is clicked, a modal dialog box will
        appear with the message "Eggs aren't supposed to be green." and an OK
        button.
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
        The showConfirmDialog() method in OptionPane enables you to display a
        dialog box with a message and customizable buttons to prompt the user
        for confirmation or choice.
      </p>
      <p>Here's an example of how to use the showConfirmDialog() method:</p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
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
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In this example, when the button is clicked, a modal dialog box will
        appear with the message "Would you like green eggs and ham?" and 'Yes'
        and 'No' buttons. The corresponding text will be printed to the textarea
        based on the user's choice.
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
        The showInputDialog() method in OptionPane allows you to display a
        dialog box with a message and a combo box or a text input field,
        prompting the user for input.
      </p>
      <p>Here's an example of how to use the showInputDialog() method:</p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
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
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In this example, when the button is clicked, a modal dialog box will
        appear with the message "Complete the sentence: Green eggs and..." and
        prompt the user to complete the sentence in the input field.
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
