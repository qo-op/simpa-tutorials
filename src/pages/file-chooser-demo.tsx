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
       data-scrollbar-overlay>
    <div class="GridBagConstraints"
         data-anchor="page-start"
         style="padding: .25em;">
      <div class="BorderLayout">
        <div class="PageStart FlowLayout">
          <!-- File Chooser -->
          <div class="BoxLayout">
            <button onclick="showOpenFile(event);">
              <span class="BoxLayout"
                    style="gap: .5em;">
                <img src="/Open16.gif">
                <span>Open a File...</span>
              </span>
            </button>
            <label>
              <input type="file"
                     style="width: 0;"
                     onchange="handleFileSelected(event);">
            </label>
          </div>
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
function showOpenFile(event) {
  const button = event.currentTarget;
  const label = button.parentNode.querySelector(":scope > label");
  label.click();
}
function handleFileSelected(event) {
  const textarea = document.getElementById("textarea");
  if (textarea.value) {
    textarea.value += "\\n";
  }
  const input = event.currentTarget;
  if (input.files.length > 0) {
    const fileSelected = input.files[0];
    textarea.value += "Opened file: " + fileSelected.name + ".";
  } else {
    textarea.value += "User canceled open request.";
  }
}
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.css
`}
    />
  );
};

export default FileChooserDemoPage;

export const Head = () => <SEO title={title} description={description} />;
