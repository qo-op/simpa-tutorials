import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "DialogDemo";
const description: string = `An HTML version of Oracle's ${title} example`;

const DialogDemoPage = ({ path }: PageProps) => {
  const id = path.replaceAll(/\//g, "");
  return (
    <ExampleLayout
      path={path}
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
        href="./${title}.css">
  <script src="./${title}.js">
  </script>
  <link rel="preload" href="/middle.gif" as="image">
</head>
<body class="ScrollPane"
      data-scrollbar-overlay
      id="${id}">
  <div class="GridBagConstraints"
       data-anchor="page-start"
       style="padding: .25em;">
    <div class="BorderLayout"
         id="frame">
      <div class=TabbedPane
           style="border: 1px solid Gray;">
        <div>
          <button value="Simple Dialogs"
                  tabindex=-1>
            <span>
              <span>Simple Dialogs</span>
            </span>
          </button>
          <button value="More Dialogs">
            <span>
              <span>More Dialogs</span>
            </span>
          </button>
          <button value="Dialog Icons">
            <span>
              <span>Dialog Icons</span>
            </span>
          </button>
        </div>
        <div class="CardLayout">
          <div data-name="Simple Dialogs"
               class="BorderLayout"
               style="visibility: inherit;
                      padding: .5em;">
            <div style="margin-block-end: .5em;">
              Some simple message dialogs:<br>
              <form id="simple-dialog-form">
                <label>
                  <input type="radio"
                         name="option"
                         value="default"
                         checked>
                  OK
                </label><br>
                <label>
                  <input type="radio"
                         name="option"
                         value="yes-no">
                  Yes/No
                </label><br>
                <label>
                  <input type="radio"
                         name="option"
                         value="yes-no-cancel">
                  Yes/No/Cancel
                </label>
              </form>
            </div>
            <div class="PageEnd">
              <button onclick="showSimpleDialog(event);">
                Show it!
              </button>
            </div>
          </div>
          <div data-name="More Dialogs"
               class="BorderLayout"
               style="visibility: hidden;
                      padding: .5em;">
            <div style="margin-block-end: .5em;">
              Some more dialogs:<br>
              <form id="feature-dialog-form">
                <label>
                  <input type="radio"
                         name="option"
                         value="select"
                         checked>
                  Pick one of several choices
                </label><br>
                <label>
                  <input type="radio"
                         name="option"
                         value="textfield">
                  Enter some text
                </label><br>
                <label>
                  <input type="radio"
                         name="option"
                         value="nonmodal">
                  Non-modal dialog
                </label>
              </form>
            </div>
            <div class="PageEnd">
              <button onclick="showFeatureDialog(event);">
                Show it!
              </button>
            </div>
          </div>
          <div data-name="Dialog Icons"
               class="BorderLayout"
               style="visibility: hidden;
                      padding: .5em;">
            <div style="margin-block-end: .5em;">
              Some choice of icons:<br>
              <form style="display: grid;
                           grid-template-columns: 1fr 1fr;"
                    id="icon-dialog-form">
                <label>
                  <input type="radio"
                         name="option"
                         value="plain"
                         checked>
                  Plain (no icon)
                </label>
                <label>
                  <input type="radio"
                         name="option"
                         value="error">
                  Error icon
                </label>
                <label>
                  <input type="radio"
                         name="option"
                         value="information">
                  Information icon
                </label>
                <label>
                  <input type="radio"
                         name="option"
                         value="warning">
                  Warning icon
                </label>
                <label>
                  <input type="radio"
                         name="option"
                         value="question">
                  Question icon
                </label>
                <label>
                  <input type="radio"
                         name="option"
                         value="custom">
                  Custom icon
                </label>
              </form>
            </div>
            <div class="PageEnd">
              <button onclick="showIconDialog(event);">
                Show it!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="PageEnd"
           style="border: 1px solid Gray;
                  border-block-start: none;
                  padding: .5em;">
        <span id="label">
          Click the "Show it!" button to bring up the selected dialog.
        </span>
      </div>
    </div>
  </div>
</body>
</html>
`}
      cssCode={`/* ${title}.css */
`}
      jsCode={`/* ${title}.js */
function showSimpleDialog(event) {
  const label = document.getElementById("label");
  const form = document.getElementById("simple-dialog-form");
  const radios = form.elements["option"];
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      const value = radios[i].value; 
      switch (value) {
        case "default":
          OptionPane.showMessageDialog(
            "Eggs aren't supposed to be green.");
          break;
        case "yes-no":
          OptionPane
            .showConfirmDialog(
              "Would you like green eggs and ham?",
              "An Inane Question",
              "yes-no")
            .then(input => {
              if (input === "Yes") {
                label.textContent = "Ewww!";
              } else if (input === "No") {
                label.textContent = "Me neither!";
              }
            });
          break;
        case "yes-no-cancel":
          OptionPane
            .showOptionDialog(
              "Would you like some green eggs to go with that ham?",
              "A Silly Question",
              "yes-no-cancel",
              "question",
              null,
              [ "Yes, please", "No, thanks", "No eggs, no ham!" ],
              "No eggs, no ham!")
            .then(input => {
              if (input === "Yes, please") {
                label.textContent = "Here you go: green eggs and ham!";
              } else if (input === "No, thanks") {
                label.textContent = "OK, just the ham, then.";
              } else if (input === "No eggs, no ham!") {
                label.textContent = "Well, I'm certainly not going to eat them!";
              }
            })
          break;
      }
      break;
    }
  }
};
function showIconDialog(event) {
  const form = document.getElementById("icon-dialog-form");
  const radios = form.elements["option"];
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      const value = radios[i].value; 
      switch (value) {
        case "plain":
          OptionPane.showMessageDialog(
            "Eggs aren't supposed to be green.",
            "A plain message",
            "plain");
          break;
        case "information":
          OptionPane.showMessageDialog(
            "Eggs aren't supposed to be green.",
            "Inane informational dialog",
            "information");
          break;
        case "question":
          OptionPane.showMessageDialog(
            "You shouldn't use a message dialog (like this) for a question, OK?",
            "Inane question",
            "question");
          break;
        case "error":
          OptionPane.showMessageDialog(
            "Eggs aren't supposed to be green.",
            "Inane error",
            "error");
          break;
        case "warning":
          OptionPane.showMessageDialog(
            "Eggs aren't supposed to be green.",
            "Inane warning",
            "warning");
          break;
        case "custom":
          OptionPane.showMessageDialog(
            "Eggs aren't supposed to be green.",
            "Inane custom dialog",
            "information",
            "/middle.gif");
          break;
      }
      break;
    }
  }
};
function showFeatureDialog(event) {
  const label = document.getElementById("label");
  const form = document.getElementById("feature-dialog-form");
  const radios = form.elements["option"];
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      const value = radios[i].value; 
      switch (value) {
        case "select":
          OptionPane
            .showInputDialog(
              "Complete the sentence: Green eggs and...",
              "Customized Dialog",
              "plain",
              "/middle.gif",
              [ "ham", "spam", "yam" ],
              "ham")
            .then(input => {
              if (input) {
                label.textContent = "Green eggs and... " + input + "!";
              } else {
                label.textContent = "Come on, finish the sentence!";
              }
            });
          break;
        case "textfield":
          OptionPane.showInputDialog(
            "Complete the sentence: Green eggs and...",
            "Customized Dialog",
            "plain",
            "/middle.gif",
            null,
            "ham")
          .then(input => {
            if (input) {
              label.textContent = "Green eggs and... " + input + "!";
            } else {
              label.textContent = "Come on, finish the sentence!";
            }
          });
          break;
        case "nonmodal":
          break;
      }
      break;
    }
  }
}
window.addEventListener("load", function() {
  const frame = document.getElementById("frame");
  frame.style.width = (frame.clientWidth + 1) + "px";
  frame.style.height = (frame.clientHeight + 1) + "px";
});
`}
      info={`
An HTML version of Oracle's DialogDemo example, using simpa.css
`}
    />
  );
};

export default DialogDemoPage;

export const Head = () => <SEO title={title} description={description} />;
