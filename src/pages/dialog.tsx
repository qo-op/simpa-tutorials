import React from "react";
import { PageProps } from "gatsby";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Layout from "components/Layout";
import NoteAboutSimpaJS from "components/NoteAboutSimpaJS";

const DialogPage = ({ path }: PageProps) => {
  const click = (ev: React.MouseEvent) => {
    const button: HTMLElement = ev.target as HTMLElement;
    const dialog: HTMLElement = button.closest(".Dialog") as HTMLElement;
    if (dialog.style.position === "absolute") {
        dialog.style.visibility = "hidden";
    }
  };
  return (
    <Layout
      pageTitle={"How to Use Dialog with HTML, CSS and JavaScript"}
      path={path}
    >
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use Dialog</span>
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
  <!-- dialog title -->
  <div class="DialogTitle PageStart"
         style="padding: 0 .5em; background-color: LightGray;">
    <span>Message</span>
  </div>
  <!-- dialog content -->
  <div class="BorderLayout"
         style="padding: .5em;">
    <!-- dialog text -->
    <span style="margin: 0 0 .5em 0;">
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
        message. Try moving the dialog by its title to remove from this
        tutorial.
      </p>
      <div className="CenterLayout">
        <div className="Dialog BorderLayout">
          <div
            className="DialogTitle PageStart"
            style={{ padding: "0 .5em", backgroundColor: "LightGray" }}
          >
            <span>Message</span>
          </div>
          <div className="BorderLayout" style={{ padding: ".5em" }}>
            <span style={{ margin: "0 0 .5em 0" }}>This is a dialog!</span>
            <div className="PageEnd CenterLayout">
              <button onClick={click}>OK</button>
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
