import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const NoteAboutSimpaCSSStyle: React.CSSProperties = {
  backgroundColor: "ivory",
};

const NoteAboutSimpaCSSContentPaneStyle: React.CSSProperties = {
  padding: "0 1em",
};

const NoteAboutSimpaCSS = ({ subject }: { subject: string }) => {
  return (
    <div className="NoteAboutSimpaCSS" style={NoteAboutSimpaCSSStyle}>
      <hr />
      <div
        className="NoteAboutSimpaCSSContentPane"
        style={NoteAboutSimpaCSSContentPaneStyle}
      >
        <h2>Note about {subject}</h2>
        <p>
          In order to use {subject} in your HTML file, you need to include a{" "}
          <code>link</code> to the Simpa stylesheet in the <code>head</code>{" "}
          section of your HTML document.
        </p>
        <div className="SyntaxHighlighter">
          <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
            {`<head>
  ...
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
  ...
</head>`}
          </SyntaxHighlighter>
        </div>
        <p>
          It's important to note that the URL in the <code>href</code> attribute
          points to an external resource on the internet. This means that your
          web page will only be able to use Simpa if it has a working internet
          connection and can access the Simpa CDN (Content Delivery Network) at
          the specified URL. If you want to use Simpa offline or on a local
          server, you can download the Simpa stylesheet and include it in your
          project directory instead of using the CDN.
        </p>
      </div>
      <hr />
    </div>
  );
};

export default NoteAboutSimpaCSS;
