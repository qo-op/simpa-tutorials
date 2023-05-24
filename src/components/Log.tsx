import React, { useEffect, useState } from "react";

const ResultPane = () => {
  const [lines, setLines] = useState([] as string[][]);
  const click = () => {
    const newLines: string[][] = [];
    const elements = document.querySelectorAll("*");
    elements.forEach((element: Element) => {
      const htmlElement = element as HTMLElement;
      const tagName: string = htmlElement.tagName;
      const classList: string = "" + htmlElement.classList;
      const width: string = "" + htmlElement.offsetWidth;
      const height: string = "" + htmlElement.offsetHeight;
      newLines.push([tagName, classList, width, height]);
      setLines(newLines);
    });
  };
  return (
    <div className="ScrollPane" onClick={click}>
      {lines.map((line, index) => {
        if (line[0] === "BODY" || line[0] === "TEXTARE") {
          return (
            <>
              <span key={index}>
                {line[0] + ", " + line[1] + "," + line[2] + ", " + line[3]}
              </span>
              <br />
            </>
          );
        } else if (line[0] === "DIV") {
          return (
            <>
              <span key={index}>
                {line[1] + "," + line[2] + ", " + line[3]}
              </span>
              <br />
            </>
          );
        }
      })}
    </div>
  );
};

export default ResultPane;
