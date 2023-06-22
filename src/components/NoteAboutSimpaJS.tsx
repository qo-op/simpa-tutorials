import React from "react";
import CopyToClipboardSyntaxHighlighter from "./CopyToClipboardSyntaxHighlighter";

const NoteAboutSimpaJSStyle: React.CSSProperties = {
  backgroundColor: "ivory",
};

const NoteAboutSimpaJSContentPaneStyle: React.CSSProperties = {
  padding: "0 1em",
};

const NoteAboutSimpaJS = ({ subject }: { subject: string }) => {
  return (
    <div className="NoteAboutSimpaJS" style={NoteAboutSimpaJSStyle}>
      <hr />
      <div
        className="NoteAboutSimpaJSContentPane"
        style={NoteAboutSimpaJSContentPaneStyle}
      >
        <h2>Note about {subject}</h2>
        <p>
          To utilize {subject} in your HTML file, you need to include links to
          the Simpa stylesheet and the Simpa JavaScript in the head section of
          your HTML document:
        </p>
        <div className="SyntaxHighlighter">
          <CopyToClipboardSyntaxHighlighter>
            {`<link rel="stylesheet"
      href="https://qo-op.github.io/simpa/simpa.css">
<script src="https://qo-op.github.io/simpa/simpa.js">
</script>
`}
          </CopyToClipboardSyntaxHighlighter>
        </div>
        <p>
          It's important to be aware that the URLs specified in the href and src
          attributes point to external resources on the internet. Therefore,
          your web page will only be able to utilize Simpa if it has a
          functional internet connection and can access the Simpa CDN (Content
          Delivery Network) at the provided URLs. If you prefer to use Simpa
          offline or on a local server, you can download the Simpa stylesheet
          and JavaScript files and include them in your project directory
          instead of relying on the CDN.
        </p>
      </div>
      <hr />
    </div>
  );
};

export default NoteAboutSimpaJS;
