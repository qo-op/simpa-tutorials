import React from "react";
import { PageProps } from "gatsby";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";

const title: string = "How to Use Card Layouts with HTML and CSS";
const description: string = "This tutorial shows how to use card layouts (CardLayout) using HTML and CSS.";

const CardLayoutPage = ({ path }: PageProps) => {
  const change = (ev: React.ChangeEvent) => {
    const name = (ev.target as HTMLSelectElement).value;
    const container: HTMLElement = document.getElementById(
      "container"
    ) as HTMLElement;
    const cards = container.children;
    for (let i = 0; i < cards.length; i++) {
      const card: HTMLElement = container.children[i] as HTMLElement;
      if (card.dataset.name === name) {
        card.style.visibility = "inherit";
      } else {
        card.style.visibility = "hidden";
      }
    }
  };
  return (
    <Layout title={title} path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use Card Layouts</span>
        <span>with HTML and CSS</span>
      </h1>
      <p>
        <code>CardLayout</code> is a layout manager that allows you to switch
        between multiple components in a container like flipping through a deck
        of cards. It is useful for creating user interfaces with multiple views.
      </p>
      <p>
        With <code>CardLayout</code>, you can have several components in a
        single container, but only one is visible at a time.
      </p>
      <p>
        Here's an example of how to use <code>CardLayout</code>:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="CardLayout"
     style="height: 100px; padding: 10px;">
  <button style="visibility: hidden;">
    Button 1
  </button>
  <button style="visibility: inherit;">
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
        In this example, we create a <code>div</code> container with its{" "}
        <code>class</code> set to <code>"CardLayout"</code>. We then add three{" "}
        <code>buttons</code> that we want to switch between to the container.
      </p>
      <p>
        We set the <code>visibility</code> of the second button to{" "}
        <code>inherit</code> and set the <code>visibility</code> of its siblings
        to <code>hidden</code>.
      </p>
      <p>
        When you this code, you will see a container with a button labeled "
        <code>Button 2</code>", like this:
      </p>
      <div
        className="CardLayout"
        style={{
          height: "100px",
          padding: "10px",
          backgroundColor: "LightGray",
        }}
      >
        <button style={{ visibility: "hidden" }}>Button 1</button>
        <button style={{ visibility: "inherit" }}>Button 2</button>
        <button style={{ visibility: "hidden" }}>Button 3</button>
      </div>
      <p></p>
      <hr />
      <h2>Example with a simple code to switch between cards</h2>
      <p>Here's a example that uses JavaScript to switch between cards:</p>
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
        if (card.dataset.name === name) {
          card.style.visibility = "inherit";
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
       style="border: 1px solid Gray; height: 100px; padding: 10px">
    <div class="PageStart">
      <!-- combo box -->
      <select onchange="change(event);">
        <option value="Card 1"
                selected>1st Card</option>
        <option value="Card 2">2nd Card</option>
        <option value="Card 3">3rd Card</option>
      </select>
    </div>
    <!-- card container -->
    <div class="CardLayout"
         id="container"
         style="padding: 10px">
      <button data-name="Card 1"
              style="visibility: inherit;">
        <u>First</u> Button
      </button>
      <button data-name="Card 2"
              style="visibility: hidden;">
        <u>Second</u> Button
      </button>
      <button data-name="Card 3"
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
        In this example, we create three <code>buttons</code> as cards. We add
        the <code>buttons</code> to the card container giving each a{" "}
        <code>data-name</code> attribute, which will be used to switch between
        them later with JavaScript, when the combo box value is changed.
      </p>
      <p>
        When we run the code, initially we will see a panel with a combo box
        with <code>"1st Card"</code> item selected and a button with the text "
        <code>
          <u>First</u> Button
        </code>
        ".
      </p>
      <p>
        If you select the <code>"2nd Card"</code> item in the combo box, the
        button with the text "
        <code>
          <u>Second</u> Button
        </code>
        " will be shown. If you select the <code>"3rd Card"</code> item in the
        combo box, the button with the text "
        <code>
          <u>Third</u> Button
        </code>
        " will be shown.
      </p>
      <p>
        Try selecting an item in the combo box below to switch between cards.
      </p>
      <div className="CenterLayout">
        <div
          className="BorderLayout"
          style={{ border: "1px solid Gray", height: "100px", padding: "10px" }}
        >
          <div className="PageStart">
            <select onChange={change} defaultValue={"Card 1"}>
              <option value="Card 1">1st Card</option>
              <option value="Card 2">2nd Card</option>
              <option value="Card 3">3rd Card</option>
            </select>
          </div>
          <div
            className="CardLayout"
            id="container"
            style={{ padding: "10px" }}
          >
            <button data-name="Card 1" style={{ visibility: "inherit" }}>
              <u>First</u> Button
            </button>
            <button data-name="Card 2" style={{ visibility: "hidden" }}>
              <u>Second</u> Button
            </button>
            <button data-name="Card 3" style={{ visibility: "hidden" }}>
              <u>Third</u> Button
            </button>
          </div>
        </div>
      </div>
      <p></p>
      <NoteAboutSimpaCSS subject="Simpa CSS Layouts" />
    </Layout>
  );
};

export default CardLayoutPage;

export const Head = () => <SEO title={title} description={description} />;
