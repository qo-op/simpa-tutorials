import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "BorderLayoutDemo";
const description: string = `An HTML version of Oracle's ${title} example`;
const id = "border-layout-demo";

const BorderLayoutDemoPage = ({ path, location }: PageProps) => {
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
      style="padding-block: .25em;"
      id="${id}">
  <!-- Border Layout -->
  <div class="BorderLayout"
       style="border: 1px solid Gray">
    <!-- Page Start -->
    <div class="PageStart">
      <button>
        Button 1 (PAGE_START)
      </button>
    </div>
    <!-- Center -->
    <button>
      Button 2 (CENTER)
    </button>
    <!-- Line Start -->
    <div class="LineStart">
      <button>
        Button 3 (LINE_START)
      </button>
    </div>
    <!-- Page End -->
    <div class="PageEnd">
      <button>
        Long-Named Button 4 (PAGE_END)
      </button>
    </div>
    <!-- Line End -->
    <div class="LineEnd">
      <button>
        5 (LINE_END)
      </button>
    </div>
  </div>
</body>
</html>
`}
      cssCode={`/* ${title}.css */
`}
      jsCode={`/* ${title}.js */
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
`}
    />
  );
};

export default BorderLayoutDemoPage;

export const Head = () => <SEO title={title} description={description} />;
