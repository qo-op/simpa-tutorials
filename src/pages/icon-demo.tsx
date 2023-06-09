import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "IconDemo";
const description: string =
  "An HTML version of Oracle's IconDemo example. This example demonstrates loading image files into img elements for use in a user interface in a single-page application (SPA). It creates a toolbar with thumbnail previews of each image file, allowing users to click on a thumbnail to display the full image in the main display area.";
const id = "icon-demo";

const IconDemoPage = ({ path, location }: PageProps) => {
  return (
    <ExampleLayout
      path={path}
      hostname={location.hostname}
      htmlCode={`<!-- ${title}.html -->
<!-- An HTML version of Oracle's ${title} example, using simpa. -->
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
  <link rel="preload" as="image" href="../images/sunw01.jpg">
  <link rel="preload" as="image" href="../images/sunw02.jpg">
  <link rel="preload" as="image" href="../images/sunw03.jpg">
  <link rel="preload" as="image" href="../images/sunw04.jpg">
  <link rel="preload" as="image" href="../images/sunw05.jpg">
</head>
<body class="Frame"
      id="${id}">
  <div class="ScrollPane"
       data-overlay>
    <div class="CenterLayout"
         style="padding: .25em;">
      <div class="BorderLayout"
           style="width: 340px;
                  height: 280px;">
        <div class="PageStart">
          <!-- thumbnails -->
          <div class="FlowLayout"
               style="gap: .5em;">
            <div onclick="handleClick(event);"
                 data-caption="Original SUNW Logo"
                 data-src="../images/sunw01.jpg">
              <span class="BorderLayout">
                <img src="../images/sunw01.jpg"
                     style="width: 32px;
                            height: 32px;">
              </span>
            </div>
            <div onclick="handleClick(event);"
                 data-caption="The Clocktower"
                 data-src="../images/sunw02.jpg">
              <span class="BorderLayout">
                <img src="../images/sunw02.jpg"
                     style="width: 32px;
                            height: 32px;">
              </span>
            </div>
            <div onclick="handleClick(event);"
                 data-caption="Clocktower from the West"
                 data-src="../images/sunw03.jpg">
              <span class="BorderLayout">
                <img src="../images/sunw03.jpg"
                     style="width: 32px;
                            height: 32px;">
              </span>
            </div>
            <div onclick="handleClick(event);"
                 data-caption="The Mansion"
                 data-src="../images/sunw04.jpg">
              <span class="BorderLayout">
                <img src="../images/sunw04.jpg"
                     style="width: 32px;
                            height: 32px;">
              </span>
            </div>
            <div onclick="handleClick(event);"
                 data-caption="Sun Auditorium"
                 data-src="../images/sunw05.jpg">
              <span class="BorderLayout">
                <img src="../images/sunw05.jpg"
                     style="width: 32px;
                            height: 32px;">
              </span>
            </div>
          </div>
        </div>
        <div class="BorderLayout">
          <div class="PageStart CenterLayout">
            <span id="title">Please Select an Image</span>
          </div>
          <div class="GridConstraints"
               data-anchor="page-start">
            <img id="photograph">
          </div>
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
function handleClick(event) {
  const button = event.currentTarget;
  const caption = button.dataset.caption;
  const src = button.dataset.src;
  const title = document.getElementById("title");
  title.textContent = caption;
  const photograph = document.getElementById("photograph");
  photograph.src = src;
}
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
The purpose of this example is to create a SPA application that demonstrates loading image files into img elements for use in a user interface.
The application creates a toolbar with thumbnail previews of each image file.
Clicking on a thumbnail displays the full image in the main display area.
`}
    />
  );
};

export default IconDemoPage;

export const Head = () => <SEO title={title} description={description} />;
