import "./CodeEditor.css";

import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  setCssCode as setCodeEditorCssCode,
  setHtmlCode as setCodeEditorHtmlCode,
  setJavaScriptCode as setCodeEditorJavaScriptCode,
} from "features/CodeEditorSlice";
import {
  setCssCode as setResultPaneCssCode,
  setHtmlCode as setResultPaneHtmlCode,
  setJavaScriptCode as setResultPaneJavaScriptCode,
} from "features/ResultPaneSlice";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeEditor = ({
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
  const dispatch = useAppDispatch();
  let codeEditorHtmlCode;
  let codeEditorCssCode;
  let codeEditorJavaScriptCode;
  switch (language) {
    case "html":
      codeEditorHtmlCode =
        useAppSelector((state) => state.codeEditor.htmlCode) || code + " ";
      break;
    case "css":
      codeEditorCssCode =
        useAppSelector((state) => state.codeEditor.cssCode) || code + " ";
      break;
    case "js":
      codeEditorJavaScriptCode =
        useAppSelector((state) => state.codeEditor.javaScriptCode) ||
        code + " ";
      break;
  }
  const click = (ev: React.MouseEvent) => {
    const target: HTMLElement = ev.target as HTMLElement;
    if (target instanceof HTMLTextAreaElement) {
      return;
    }
    const codeEditor: HTMLElement = target.closest(
      ".CodeEditor"
    ) as HTMLElement;
    const textArea: HTMLElement = codeEditor.querySelector(
      "textarea"
    ) as HTMLElement;
    if (textArea === null) {
      return;
    }
    textArea.focus();
  };
  const focusGained = (ev: React.FocusEvent) => {
    const textArea: HTMLTextAreaElement =
      ev.currentTarget as HTMLTextAreaElement;
    textArea.style.caretColor = "Gray";
    // textArea.style.color = "Yellow";
  };
  const change = (ev: React.ChangeEvent) => {
    const textArea: HTMLTextAreaElement =
      ev.currentTarget as HTMLTextAreaElement;
    let text: string = textArea.value;
    if (text.endsWith("\n")) {
      text = text + " ";
      textArea.value = text;
      textArea.selectionStart = textArea.selectionEnd - 1;
      textArea.selectionEnd = textArea.selectionEnd - 1;
    }
    switch (language) {
      case "html":
        dispatch(setCodeEditorHtmlCode(text));
        dispatch(setResultPaneHtmlCode(text));
        break;
      case "css":
        dispatch(setCodeEditorCssCode(text));
        dispatch(setResultPaneCssCode(text));
        break;
      case "js":
        dispatch(setCodeEditorJavaScriptCode(text));
        dispatch(setResultPaneJavaScriptCode(text));
        break;
    }
  };
  return (
    <div
      className="CodeEditor ScrollPane"
      data-scrollbar-overlay
      onClick={click}
      id={id || ""}
    >
      <div className="BorderLayout">
        <textarea
          spellCheck="false"
          onFocus={focusGained}
          onChange={change}
          value={
            language === "html"
              ? codeEditorHtmlCode
              : language === "css"
              ? codeEditorCssCode
              : codeEditorJavaScriptCode
          }
          disabled={false}
        ></textarea>
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
            {language === "html"
              ? codeEditorHtmlCode || ""
              : language === "css"
              ? codeEditorCssCode || ""
              : codeEditorJavaScriptCode || ""}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};
export default CodeEditor;
