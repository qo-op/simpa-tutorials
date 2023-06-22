import React from "react";
import CopyToClipboardSyntaxHighlighter from "./CopyToClipboardSyntaxHighlighter";

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
          To utilize {subject} in your HTML file, you need to add a link to the
          Simpa stylesheet in the head section of your HTML document:
        </p>
        <div className="SyntaxHighlighter">
          <CopyToClipboardSyntaxHighlighter>
            {`<link rel="stylesheet"
      href="https://qo-op.github.io/simpa/simpa.css">`}
          </CopyToClipboardSyntaxHighlighter>
        </div>
        <p>
          It's important to be aware that the URL specified in the href
          attribute points to an external resource on the internet.
          Consequently, your web page will require a functional internet
          connection to access the Simpa CDN (Content Delivery Network) at the
          provided URL. If you wish to utilize Simpa offline or on a local
          server, you can download the Simpa stylesheet and include it in your
          project directory instead of relying on the CDN.
        </p>
      </div>
      <hr />
    </div>
  );
};

export default NoteAboutSimpaCSS;
