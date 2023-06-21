import { Code, ContentPaste, Javascript, Tag } from "@mui/icons-material";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "styles/CopyToClipboardSyntaxHighlighter.css";

const CopyToClipboardSyntaxHighlighter = ({
  children,
}: {
  children: string;
}) => {
  const handleOnClick = async (ev: React.MouseEvent) => {
    await navigator.clipboard.writeText(children);
    (window as any).OptionPane.showMessageDialog("Code copied!");
  };
  return (
    <div className="CopyToClipboardSyntaxHighlighter BorderLayout">
      <div className="TitleBar PageStart BorderLayout">
        <div className="Language LineStart BoxLayout" style={{ gap: ".5em" }}>
          <span className="BorderLayout">
            <Code style={{ color: "Red" }} />
          </span>
          <span>html</span>
        </div>
        <div className="LineEnd">
          <button className="CopyButton" onClick={handleOnClick}>
            <span className="BorderLayout">
              <ContentPaste style={{ color: "White" }} />
            </span>
          </button>
        </div>
      </div>
      <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CopyToClipboardSyntaxHighlighter;
