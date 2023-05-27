import React, { useEffect, useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./CodeEditor.css";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  setHtmlCode as setResultPaneHtmlCode,
  setCssCode as setResultPaneCssCode,
  setJavaScriptCode as setResultPaneJavaScriptCode,
} from "features/ResultPaneSlice";
import {
  setHtmlCode as setCodeEditorHtmlCode,
  setCssCode as setCodeEditorCssCode,
  setJavaScriptCode as setCodeEditorJavaScriptCode,
} from "features/CodeEditorSlice";

const CodeEditor = ({ code, language }: { code: string; language: string }) => {
  const dispatch = useAppDispatch();
  let codeEditorHtmlCode;
  let codeEditorCssCode;
  let codeEditorJavaScriptCode;
  switch (language) {
    case "html":
      codeEditorHtmlCode = useAppSelector((state) => state.codeEditor.htmlCode) || code;
      break;
    case "css":
      codeEditorCssCode = useAppSelector((state) => state.codeEditor.cssCode) || code;
      break;
    case "js":
      codeEditorJavaScriptCode = useAppSelector((state) => state.codeEditor.javaScriptCode) || code;
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
    >
      <div className="LayeredPane">
        <textarea
          spellCheck="false"
          onFocus={focusGained}
          onChange={change}
          disabled={process.env.NODE_ENV !== "development"}
          value={
            language === "html"
              ? codeEditorHtmlCode
              : language === "css"
              ? codeEditorCssCode
              : codeEditorJavaScriptCode
          }
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
