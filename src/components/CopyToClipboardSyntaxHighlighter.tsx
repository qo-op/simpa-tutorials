import { ContentPaste } from "@mui/icons-material";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import "styles/CopyToClipboardSyntaxHighlighter.css";

const CopyToClipboardSyntaxHighlighter = ({
  children,
  language,
  style,
  wrapLongLines,
}: {
  children: string;
  language: string;
  style?:
    | {
        [key: string]: React.CSSProperties;
      }
    | undefined;
  wrapLongLines?: boolean | undefined;
}) => {
  const handleOnClick = async (ev: React.MouseEvent) => {
    await navigator.clipboard.writeText(children);
    (window as any).OptionPane.showMessageDialog("Code copied!");
  };
  return (
    <div className="CopyToClipboardSyntaxHighlighter BorderLayout">
      <div className="TitleBar PageStart BorderLayout">
        <div className="Language LineStart">{language}</div>
        <div className="LineEnd">
          <button className="CopyButton" onClick={handleOnClick}>
            <span className="BorderLayout">
              <ContentPaste style={{ color: "White" }} />
            </span>
          </button>
        </div>
      </div>
      <SyntaxHighlighter
        language={
          language === "html"
            ? "xml"
            : language === "css"
            ? "css"
            : "javascript"
        }
        style={style}
        wrapLongLines={wrapLongLines}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CopyToClipboardSyntaxHighlighter;
