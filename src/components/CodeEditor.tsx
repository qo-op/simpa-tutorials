import React, { useEffect, useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
/*
import Prism from "prismjs";
import "prism-themes/themes/prism-vsc-dark-plus.css";
*/
import "./CodeEditor.css";
import { useAppDispatch } from "app/hooks";
import {
  setCssCode,
  setHtmlCode,
  setJavaScriptCode,
} from "features/ResultPaneSlice";

const CodeEditor = ({ code, language }: { code: string; language: string }) => {
  const [innerHTML, setInnerHTML] = useState("");
  const ref = useRef(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (ref.current) {
      const textArea: HTMLTextAreaElement = ref.current as HTMLTextAreaElement;
      const codeEditor = textArea.closest(".CodeEditor") as HTMLElement;
      /*
      const codeEditorHighlighter = codeEditor.querySelector(
        ".CodeEditorHighlighter"
      ) as HTMLElement;
      */
      let text: string = code;
      if (text.endsWith("\n")) {
        text = text + " ";
      }
      textArea.value = text;
      textArea.selectionStart = 0;
      textArea.selectionEnd = 0;
      textArea.focus();
      setInnerHTML(text);
      switch (language) {
        case "html":
          /*
          codeEditorHighlighter.innerHTML = Prism.highlight(
            text,
            Prism.languages.markup,
            "markup"
          );
          */
          dispatch(setHtmlCode(text));
          break;
        case "css":
          /*
          codeEditorHighlighter.innerHTML = Prism.highlight(
            text,
            Prism.languages.css,
            "css"
          );
          */
          dispatch(setCssCode(text));
          break;
        case "js":
          /*
          codeEditorHighlighter.innerHTML = Prism.highlight(
            text,
            Prism.languages.js,
            "js"
          );
          */
          dispatch(setJavaScriptCode(text));
          break;
      }
    }
  });
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
  const focus = (ev: React.FocusEvent) => {
    const textArea: HTMLTextAreaElement =
      ev.currentTarget as HTMLTextAreaElement;
    textArea.style.caretColor = "White";
    // textArea.style.color = "Yellow";
  };
  const change = (ev: React.ChangeEvent) => {
    const textArea: HTMLTextAreaElement =
      ev.currentTarget as HTMLTextAreaElement;
    const codeEditor = textArea.closest(".CodeEditor") as HTMLElement;
    /*
    const codeEditorHighlighter = codeEditor.querySelector(
      ".CodeEditorHighlighter"
    ) as HTMLElement;
    */
    let text: string = textArea.value;
    if (text.endsWith("\n")) {
      text = text + " ";
      textArea.value = text;
      textArea.selectionStart = textArea.selectionEnd - 1;
      textArea.selectionEnd = textArea.selectionEnd - 1;
    }
    setInnerHTML(text);
    switch (language) {
      case "html":
        /*
        codeEditorHighlighter.innerHTML = Prism.highlight(
          text,
          Prism.languages.markup,
          "markup"
        );
        */
        dispatch(setHtmlCode(text));
        break;
      case "css":
        /*
        codeEditorHighlighter.innerHTML = Prism.highlight(
          text,
          Prism.languages.css,
          "css"
        );
        */
        dispatch(setCssCode(text));
        break;
      case "js":
        /*
        codeEditorHighlighter.innerHTML = Prism.highlight(
          text,
          Prism.languages.js,
          "js"
        );
        */
        dispatch(setJavaScriptCode(text));
        break;
    }
  };
  /*
  return (
    <div
      className="CodeEditor ScrollPane"
      data-scrollbar-overlay
      onClick={click}
    >
      <div className="LayeredPane">
        <textarea
          spellCheck="false"
          onFocus={focus}
          onChange={change}
          disabled={process.env.NODE_ENV !== "development"}
          ref={ref}
        ></textarea>
        <pre>
          <code className="language-markup">
            <div className="CodeEditorHighlighter"></div>
          </code>
        </pre>
      </div>
    </div>
  );
  */
  return (
    <div
      className="CodeEditor ScrollPane"
      data-scrollbar-overlay
      onClick={click}
    >
      <div className="LayeredPane">
        <textarea
          spellCheck="false"
          onFocus={focus}
          onChange={change}
          disabled={process.env.NODE_ENV !== "development"}
          ref={ref}
        ></textarea>
        <div className="SyntaxHighlighter">
          <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
            {innerHTML}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
