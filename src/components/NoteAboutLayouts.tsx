import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

class NoteAboutLayouts extends React.Component {
  render = () => {
    return (
      <div style={{ backgroundColor: "ivory" }}>
        <hr />
        <div style={{ padding: "0 20px" }}>
          <h2>Note about Simpa Layouts</h2>
          <p>
            In order to use Simpa Layouts in your HTML file, you need to include
            a <code>link</code> to the Simpa stylesheet in the <code>head</code>{" "}
            section of your HTML document.
          </p>
          <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
            {`<head>\n` +
              `  ...\n` +
              `  <link rel="stylesheet"\n` +
              `        href="https://qo-op.github.io/simpa/simpa.css" />\n` +
              `  ...\n` +
              `</head>`}
          </SyntaxHighlighter>
          <p>
            It's important to note that the URL in the <code>href</code>{" "}
            attribute points to an external resource on the internet. This means
            that your web page will only be able to use Simpa if it has a
            working internet connection and can access the Simpa CDN (Content
            Delivery Network) at the specified URL. If you want to use Simpa
            offline or on a local server, you can download the Simpa stylesheet
            and include it in your project directory instead of using the CDN.
          </p>
        </div>
        <hr />
      </div>
    );
  };
}

export default NoteAboutLayouts;