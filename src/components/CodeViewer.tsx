import "./CodeViewer.css";

import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeViewer = ({
  hostname,
  code,
  language,
  id,
}: {
  hostname: string;
  code: string;
  language: string;
  id?: string;
}) => {
  return (
    <div className="CodeViewer ScrollPane" data-overlay id={id || ""}>
      <div className="BorderLayout">
        <div className="SyntaxHighlighter">
          <SyntaxHighlighter
            language={
              language === "html"
                ? "xml"
                : language === "css"
                ? "css"
                : "javascript"
            }
            style={vs2015}
            wrapLongLines
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};
export default CodeViewer;
