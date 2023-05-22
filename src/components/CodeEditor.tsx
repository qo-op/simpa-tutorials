import React, { useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prism-themes/themes/prism-vsc-dark-plus.css";
import "./CodeEditor.css";

const CodeEditorStyle: React.CSSProperties = {
  height: "100vh",
  backgroundColor: "rgb(30, 30, 30)",
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
  const focus = (ev: React.FocusEvent) => {
    const textArea: HTMLTextAreaElement =
      ev.currentTarget as HTMLTextAreaElement;
    textArea.style.caretColor = "White";
  };
  const change = (ev: React.ChangeEvent) => {
    const textArea: HTMLTextAreaElement =
      ev.currentTarget as HTMLTextAreaElement;
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
    const highlightedCode = Prism.highlight(code, Prism.languages.markup, "markup");
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
          spellCheck="false"
          onFocus={focus}
          onChange={change}
        ></textarea>
        <pre style={{ margin: "0" }}>
          <code className="language-markup">
            <div className="CodeEditorHighlighter" style={{}}></div>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;
