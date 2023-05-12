import React from "react";
import { PageProps } from "gatsby";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Layout from "components/Layout";
import NoteAboutLayouts from "components/NoteAboutLayouts";

const CardLayoutPage = ({ path }: PageProps) => {
  const change = (ev: React.ChangeEvent) => {
    const name = (ev.target as HTMLSelectElement).value;
    const container: HTMLElement = document.getElementById(
      "container"
    ) as HTMLElement;
    const cards = container.children;
    for (let i = 0; i < cards.length; i++) {
      const card: HTMLElement = container.children[i] as HTMLElement;
      if (card.getAttribute("name") === name) {
        card.style.visibility = "visible";
      } else {
        card.style.visibility = "hidden";
      }
    }
  };
  return (
    <Layout
      pageTitle={"How to Use CardLayout with HTML and CSS and JavaScript"}
      path={path}
    >
      <h1 className="BoxLayout" data-axis="page-axis">
        <span>How to Use CardLayout</span>
        <span>with HTML and CSS</span>
      </h1>
      <p>
        <code>CardLayout</code> is a layout manager that allows you to switch
        between different components (such as panels) in a container, as if they
        were a stack of cards. In <code>CardLayout</code> only one component
        must be visible at a time. When you switch between components, the
        previous component must be hidden and the new component must be visible.
      </p>
      <p>
        Here's an example of how to use <code>CardLayout</code>:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="CardLayout"
     style="height: 100px;">
  <button style="visibility: hidden;">
    Button 1
  </button>
  <button style="visibility: visible;">
    Button 2
  </button>
  <button style="visibility: hidden;">
    Button 3
  </button>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        In this example, we create a <code>div</code> container with{" "}
        <code>class</code> set to "<code>CardLayout</code>". We then create
        three <code>button</code>s and add them to the container. We set the{" "}
        <code>visibility</code> of the second button to <code>visible</code> and
        set the <code>visibility</code> of its siblings to <code>hidden</code>.
      </p>
      <p>
        When we run this code, we will see a panel with a button labeled "
        <code>Button 2</code>", like this:
      </p>
      <div className="CardLayout" style={{ height: "100px" }}>
        <button style={{ visibility: "hidden" }}>Button 1</button>
        <button style={{ visibility: "visible" }}>Button 2</button>
        <button style={{ visibility: "hidden" }}>Button 3</button>
      </div>
      <p></p>
      <p>Here's another example, using JavaScript to switch between cards:</p>
      <p></p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet"
          href="https://qo-op.github.io/simpa/simpa.css">
    <script>
        function change(ev) {
            const name = ev.target.value;
            const container = document.getElementById("container");
            const cards = container.children;
            for (let i = 0; i < cards.length; i++) {
                const card = container.children[i];
                if (card.getAttribute("name") === name) {
                    card.style.visibility = "visible";
                } else {
                    card.style.visibility = "hidden";
                }
            }
        };
    </script>
</head>

<body class="CenterLayout"
      style="margin: 0; height: 100vh;">
    <div class="BorderLayout"
         style="border: 1px solid gray; height: 100px; padding: 10px">
        <div class="PageStart">
            <select onchange="change(event);"
                defaultValue="Card 1">
                <option value="Card 1">1st card</option>
                <option value="Card 2">2nd card</option>
                <option value="Card 3">3rd card</option>
            </select>
        </div>
        <!-- card container -->
        <div class="CardLayout"
             id="container"
             style="padding: 10px">
            <button name="Card 1"
                    style="visibility: visible;">
                <u>First</u> Button
            </button>
            <button name="Card 2"
                    style="visibility: hidden;">
                <u>Second</u> Button
            </button>
            <button name="Card 3"
                    style="visibility: hidden;">
                <u>Third</u> Button
            </button>
        </div>
    </div>
</body>

</html>`}
        </SyntaxHighlighter>
      </div>
      <p>
        When we run the example, you will see a panel with a combo box and a
        button. Try switching to another card by selecting another item in the
        combo box below.
      </p>
      <div className="CenterLayout">
        <div
          className="BorderLayout"
          style={{ border: "1px solid gray", height: "100px", padding: "10px" }}
        >
          <div className="PageStart">
            <select onChange={change} defaultValue={"Card 1"}>
              <option value="Card 1">1st card</option>
              <option value="Card 2">2nd card</option>
              <option value="Card 3">3rd card</option>
            </select>
          </div>
          <div
            className="CardLayout"
            id="container"
            style={{ padding: "10px" }}
          >
            <button name="Card 1" style={{ visibility: "visible" }}>
              <u>First</u> Button
            </button>
            <button name="Card 2" style={{ visibility: "hidden" }}>
              <u>Second</u> Button
            </button>
            <button name="Card 3" style={{ visibility: "hidden" }}>
              <u>Third</u> Button
            </button>
          </div>
        </div>
      </div>
      <p></p>
      <NoteAboutLayouts />
    </Layout>
  );
};

export default CardLayoutPage;
