import React, { useEffect, useState } from "react";

/* font-size
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
      if (cardComponent.dataset.name === "js") {
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
 */

/* width and heights */
const Log = () => {
  const [lines, setLines] = useState([] as string[][]);
  const click = () => {
    const newLines: string[][] = [];
    let container = document.getElementById("iframe");
    if (container === null) {
      return;
    }
    if (container instanceof HTMLIFrameElement) {
      container.style.display = "block";
      if (container.contentDocument === null) {
        return;
      }
      container = container.contentDocument.body;
      const tagName: string = container.tagName;
      const classList: string = "" + container.classList;
      const width: string = "" + container.offsetWidth;
      const height: string = "" + container.offsetHeight;
      newLines.push([tagName, classList, width, height]);
    }
    const elements = container.querySelectorAll("*");
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
        return (
          <>
            <span key={index}>
              {line[0] + ", " + line[1] + ", " + line[2] + ", " + line[3]}
            </span>
            <br />
          </>
        );
      })}
    </div>
  );
};

export default Log;
