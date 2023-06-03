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
    if (dialog.style.position === "absolute") {
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
  <!-- dialog title bar -->
  <div class="DialogTitleBar PageStart"
       style="background-color: LightGray; padding: 0 .5em;">
    Message
  </div>
  <!-- dialog content -->
  <div class="BorderLayout"
         style="padding: .5em;">
    <!-- dialog text -->
    <span style="margin-block-end: .5em;">
        This is a dialog!
    </span>
    <!-- ok button -->
    <div class="PageEnd CenterLayout">
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
            <div
              className="DialogTitleBar PageStart"
              style={{ backgroundColor: "LightGray", padding: "0 .5em" }}
            >
              Message
            </div>
            <div className="BorderLayout" style={{ padding: ".5em" }}>
              <span style={{ marginBlockEnd: ".5em" }}>This is a dialog!</span>
              <div className="PageEnd CenterLayout">
                <button onClick={click}>OK</button>
              </div>
            </div>
          </div>
          <div className="Dialog BorderLayout">
            <div
              className="DialogTitleBar PageStart"
              style={{ padding: "0 .5em", backgroundColor: "LightGray" }}
            >
              <span>Message</span>
            </div>
            <div className="BorderLayout" style={{ padding: ".5em" }}>
              <span style={{ marginBlockEnd: ".5em" }}>This is a dialog!</span>
              <div className="PageEnd CenterLayout">
                <button onClick={click}>OK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p></p>
      <NoteAboutSimpaJS subject="Simpa JS Components" />
    </Layout>
  );
};

export default DialogPage;

export const Head = () => <SEO title={title} description={description} />;
