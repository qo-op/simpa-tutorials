import React, { useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prism-themes/themes/prism-vsc-dark-plus.css";
import "./CodeEditor.css";

const CodeEditorStyle: React.CSSProperties = {
  height: "100vh",
  backgroundColor: "rgb(30, 30, 30)",
};

const CodeEditorTextAreaStyle: React.CSSProperties = {
  border: "none",
  backgroundColor: "Transparent",
  color: "White",
  padding: "0",
  resize: "none",
  outline: "none",
  height: "auto",
};

const CodeEditor = () => {
  const click = (ev: React.MouseEvent) => {
    const target: HTMLElement = ev.target as HTMLElement;
    if (target instanceof HTMLTextAreaElement) {
      return;
    }
    const textArea: HTMLElement = target.querySelector(
      "textarea"
    ) as HTMLElement;
    textArea.focus();
  };
  const change = (ev: React.ChangeEvent) => {
    const textArea: HTMLTextAreaElement =
      ev.currentTarget as HTMLTextAreaElement;
    textArea.style.color = CodeEditorStyle.backgroundColor as string;
    textArea.style.caretColor = "White";
    const codeEditor = textArea.closest(".CodeEditor") as HTMLElement;
    const codeEditorHighlighter = codeEditor.querySelector(
      ".CodeEditorHighlighter"
    ) as HTMLElement;
    let code: string = textArea.value;
    if (code.endsWith("\n")) {
      code = code + " ";
      textArea.value = code;
      textArea.selectionStart = textArea.selectionEnd - 1;
      textArea.selectionEnd = textArea.selectionEnd - 1;
    }
    const highlightedCode = Prism.highlight(code, Prism.languages.html, "html");
    codeEditorHighlighter.innerHTML = highlightedCode;
  };
  return (
    <div
      className="CodeEditor ScrollPane"
      data-scrollbar-overlay
      style={CodeEditorStyle}
      onClick={click}
    >
      <div className="LayeredPane">
        <textarea
          style={CodeEditorTextAreaStyle}
          spellCheck="false"
          onChange={change}
        ></textarea>
        <pre style={{ margin: "0" }}>
          <code className="language-html">
            <div className="CodeEditorHighlighter" style={{}}></div>
          </code>
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
