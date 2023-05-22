import React, { useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prism-themes/themes/prism-vsc-dark-plus.css";

const CodeEditorStyle: React.CSSProperties = {
  height: "100vh",
};

const CodeEditor = () => {
  const change = (ev: React.ChangeEvent) => {
    const textArea: HTMLTextAreaElement =
      ev.currentTarget as HTMLTextAreaElement;
    const codeEditor = textArea.closest(".CodeEditor") as HTMLElement;
    const codeEditorViewer = codeEditor.querySelector(
      ":scope .CodeEditorViewer"
    ) as HTMLElement;
    const code: string = textArea.value;
    const highlightedCode = Prism.highlight(code, Prism.languages.html, "html");
    codeEditorViewer.innerHTML = highlightedCode;
  };

  return (
    <div className="CodeEditor BorderLayout" style={CodeEditorStyle}>
      <div className="PageStart">
        <textarea onChange={change}></textarea>
      </div>
      <div style={{ color: "White", backgroundColor: "Black" }}>
        <pre>
          <div className="CodeEditorViewer"></div>
        </pre>
      </div>
    </div>
  );
};

/*
const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleInputChange = (ev: React.ChangeEvent) => {
    const textArea: HTMLTextAreaElement = ev.currentTarget as HTMLTextAreaElement;
    const enteredCode = textArea.value;
    setCode(enteredCode);
  };

  const highlightCode = (code: string) => {
    return Prism.highlight(code, Prism.languages.html, 'html');
  };

  return (
    <div>
      <textarea value={code} onChange={handleInputChange}></textarea>
      <pre>
        <code dangerouslySetInnerHTML={{ __html: highlightCode(code) }}></code>
      </pre>
    </div>
  );
};
*/

export default CodeEditor;
