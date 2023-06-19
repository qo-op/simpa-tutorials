import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "FileChooserDemo";
const description: string = `An HTML version of Oracle's ${title} example`;
const id = "file-chooser-demo";

const FileChooserDemoPage = ({ path, location }: PageProps) => {
  return (
    <ExampleLayout
      path={path}
      hostname={location.hostname}
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
</head>
<body class="Frame"
      id="${id}">
  <div class="ScrollPane"
       data-overlay>
    <div class="CenterLayout"
         style="padding: .25em;">
      <div class="BorderLayout">
        <div class="PageStart FlowLayout">
          <!-- File Chooser -->
          <label class="FileChooser">
            <input type="file"
                   onchange="handleFileSelected(event);">
            <button onclick="showDialog(event);">
              <span class="BoxLayout"
                    style="gap: .5em;">
                <img src="../images/Open16.gif">
                <span>Open a File...</span>
              </span>
            </button>
          </label>
        </div>
        <div class="EmptyBorder"
             style="padding: .5em 0 0 0;">
          <textarea rows="5" cols="40"
                    class="ScrollPane"
                    style="padding: .5em"
                    id="textarea"></textarea>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`}
      cssCode={`/* ${title}.css */
`}
      jsCode={`/* ${title}.js */
function showDialog(event) {
  const button = event.currentTarget;
  const label = button.parentNode;
  label.click();
}
function handleFileSelected(event) {
  const textarea = document.getElementById("textarea");
  const input = event.currentTarget;
  if (input.files.length > 0) {
    const fileSelected = input.files[0];
    if (textarea.value) {
      textarea.value += "\\n";
    }
    textarea.value += "Selected file: " + fileSelected.name + ".";
  }
}
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
The purpose of this example is to demonstrate the usage of file selection in a SPA application.
It creates a SPA application that includes an "Open a File..." button.
When the "Open a File..." button is clicked, it opens a file dialog for the user to select a file.
If a file is selected, the application logs the name of the file.
`}
    />
  );
};

export default FileChooserDemoPage;

export const Head = () => <SEO title={title} description={description} />;
