import React from "react";
import { PageProps } from "gatsby";
import { SEO } from "components/SEO";
import ExampleLayout from "components/ExampleLayout";

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
        href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet"
        href="./${title}.css">
  <script src="./${title}.js">
  </script>
</head>
<body class="ScrollPane"
      data-scrollbar-overlay
      id="${id}">
  <div class="GridBagConstraints"
       data-anchor="page-start"
       style="padding: .25em;">
    <div class=TabbedPane
         style="border: 1px solid Gray;">
      <div class="TabLayout">
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
          <div style="margin-block-end: .5em;
                      line-height: 1.5;">
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
          <div style="margin-block-end: .5em;
                      line-height: 1.5;">
            Some more dialogs:<br>
            <form id="feature-dialog-form">
              <label>
                <input type="radio"
                       name="option"
                       value="pickone"
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
                       value="nomodal">
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
          <div style="margin-block-end: .5em;
                      line-height: 1.5;">
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
  </div>
  <!-- modal layer -->
  <div class="ModalLayer"
       style="display: none;"
       id="modal-layer">
    <!-- option pane -->
    <div class="Dialog BorderLayout"
         id="option-pane">
      <div class="DialogTitleBar PageStart BorderLayout">
        <!-- option pane title -->
        <span id="option-pane-title">
          Message
        </span>
        <div class="LineEnd">
          <!-- option pane close button -->
          <span class="material-icons"
                id="option-pane-close-button"
                onclick="hide(event);">
            close
          </span>
        </div>
      </div>
      <div class="BorderLayout"
              style="padding: .5em;">
        <div class="BoxLayout"
             style="margin-block-end: .5em;
                    gap: .5em;">
          <!-- option pane icon -->
          <span class="material-icons"
                id="option-pane-icon">
          </span>
          <!-- option pane message -->
          <span id="option-pane-message">
          </span>
        </div>
        <div class="PageEnd BoxLayout"
             style="justify-self: center;
                    gap: .5em;">
          <!-- option pane ok button -->
          <button onclick="hide(event);"
                  id="option-pane-ok-button">
            OK
          </button>
          <!-- option pane yes button -->
          <button onclick="hide(event);"
                  id="option-pane-yes-button">
            Yes
          </button>
          <!-- option pane no button -->
          <button onclick="hide(event);"
                  id="option-pane-no-button">
            No
          </button>
          <!-- option pane cancel button -->
          <button onclick="hide(event);"
                  id="option-pane-cancel-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`}
      cssCode={`/* ${title}.css */
#option-pane .DialogTitleBar {
  background-color: LightGray;
  padding: 0 .5em;
}
#option-pane-title {
  align-self: center;
}
#option-pane-close-button {
  align-self: center;
  width: 1em;
  color: Gray;
}
#option-pane-close-button:hover {
  color: Red;
}
#option-pane #option-pane-yes-button,
#option-pane #option-pane-no-button,
#option-pane #option-pane-cancel-button {
  display: none;
}
#option-pane[data-option-type="yes-no"] #option-pane-yes-button,
#option-pane[data-option-type="yes-no-cancel"] #option-pane-yes-button {
  display: block;
}
#option-pane[data-option-type="yes-no"] #option-pane-no-button,
#option-pane[data-option-type="yes-no-cancel"] #option-pane-no-button {
  display: block;
}
#option-pane[data-option-type="ok-cancel"] #option-pane-cancel-button,
#option-pane[data-option-type="yes-no-cancel"] #option-pane-cancel-button {
  display: block;
}
#option-pane #option-pane-ok-button {
  display: block;
}
#option-pane[data-option-type="yes-no"] #option-pane-ok-button,
#option-pane[data-option-type="yes-no-cancel"] #option-pane-ok-button {
  display: none;
}
#option-pane-icon {
  align-self: center;
  width: 1em;
  overflow: hidden;
}
#option-pane #option-pane-icon {
  display: block;
}
#option-pane[data-message-type="plain"] #option-pane-icon {
  display: none;
}
#option-pane #option-pane-icon::after {
  color: Blue;
  content: "info";
}
#option-pane[data-option-type="yes-no"] #option-pane-icon::after,
#option-pane[data-option-type="yes-no-cancel"] #option-pane-icon::after {
  color: Green;
  content: "help";
}
#option-pane[data-message-type="error"] #option-pane-icon::after {
  color: Red;
  content: "error";
}
#option-pane[data-message-type="information"] #option-pane-icon::after {
  color: Blue;
  content: "info";
}
#option-pane[data-message-type="question"] #option-pane-icon::after {
  color: Green;
  content: "help";
}
#option-pane[data-message-type="warning"] #option-pane-icon::after {
  color: GoldenRod;
  content: "warning";
}
`}
      jsCode={`/* ${title}.js */
function showSimpleDialog(event) {
  const optionPane = document.getElementById("option-pane");
  const title = document.getElementById("option-pane-title");
  const icon = document.getElementById("option-pane-icon");0
  const message = document.getElementById("option-pane-message");
  const form = document.getElementById("simple-dialog-form");
  const radios = form.elements["option"];
  for (let i = 0; i < radios.length; i++) {
    icon.textContent = "";
    if (radios[i].checked) {
      const value = radios[i].value; 
      switch (value) {
        case "default":
          message.textContent = "Eggs aren't supposed to be green.";
          break;
        case "yes-no":
          message.title = "An Inane Question";
          message.textContent = "Would you like green eggs and ham?";
          break;
        case "yes-no-cancel":
            message.title = "A Silly Question";
          message.textContent = "Would you like some green eggs to go with that ham?";
          break;
      }
      optionPane.dataset.optionType = value;
      break;
    }
  }
  optionPane.style.top = null;
  optionPane.style.left = null;
  const modal = document.getElementById("modal-layer");
  modal.style.display = "grid";
};
function showIconDialog(event) {
  const optionPane = document.getElementById("option-pane");
  const title = document.getElementById("option-pane-title");
  const icon = document.getElementById("option-pane-icon");0
  const message = document.getElementById("option-pane-message");
  const form = document.getElementById("icon-dialog-form");
  const radios = form.elements["option"];
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      icon.textContent = "";
      message.textContent = "Eggs aren't supposed to be green.";
      const value = radios[i].value; 
      switch (value) {
        case "plain":
          title.textContent = "A plain message";
          break;
        case "information":
          title.textContent = "Inane informational dialog";
          break;
        case "question":
          title.textContent = "Inane question";
          message.textContent = "You shouldn't use a message dialog (like this) for a question, OK?";
          break;
        case "error":
          title.textContent = "Inane error";
          break;
        case "warning":
          title.textContent = "Inane warning";
          break;
        case "custom":
          title.textContent = "Inane custom dialog";
          icon.textContent = "star";
          icon.style.color = "GoldenRod";
          break;
      }
      optionPane.dataset.messageType = value;
      optionPane.dataset.optionType = "default";
      break;
    }
  }
  optionPane.style.top = "";
  optionPane.style.left = "";
  const modal = document.getElementById("modal-layer");
  modal.style.display = "grid";
};
function hide(event) {
  const modal = document.getElementById("modal-layer");
  modal.style.display = "none";
}
`}
      info={`
An HTML version of Oracle's DialogDemo example, using simpa.css
`}
    />
  );
};

export default DialogDemoPage;

export const Head = () => <SEO title={title} description={description} />;
