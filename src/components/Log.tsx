import React, { useEffect, useState } from "react";

/* font-size */
const Log = () => {
  const [lines, setLines] = useState([] as string[][]);
  const click = () => {
    const newLines: string[][] = [];
    const cardContainer = document.getElementById("card-container");
    if (cardContainer === null) {
      return;
    }
    let selectedCardComponent;
    const cardComponents = cardContainer.children;
    for (let i = 0; i < cardComponents.length; i++) {
      const cardComponent: HTMLElement = cardComponents[i] as HTMLElement;
      if (cardComponent.style.visibility !== "hidden") {
        selectedCardComponent = cardComponent;
        break;
      }
    }
    if (!selectedCardComponent) {
      return;
    }
    const elements = selectedCardComponent.querySelectorAll("*");
    elements.forEach((element: Element) => {
      const htmlElement = element as HTMLElement;
      const tagName: string = htmlElement.tagName;
      const classList: string = "" + htmlElement.classList;
      const computedStyle = getComputedStyle(htmlElement);
      const fontSize: string = "" + computedStyle.getPropertyValue('font-size');
      newLines.push([tagName, classList, fontSize]);
      setLines(newLines);
    });
  };
  return (
    <div className="ScrollPane" onClick={click}>
      {lines.map((line, index) => {
        return (
          <>
            <span key={index}>
              {line[0] + ", " + line[1] + "," + line[2]}
            </span>
            <br />
          </>
        );
      })}
    </div>
  );
};

/* width and heights
const Log = () => {
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
        if (line[0] === "BODY" || line[0] === "TEXTAREA") {
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
 */

export default Log;
