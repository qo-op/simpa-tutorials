import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const title: string = "How to Use Card Layouts with HTML and CSS";
const description: string =
  "Learn how to effectively utilize Card Layouts in HTML and CSS to create dynamic user interfaces with multiple views. Discover how CardLayout, a versatile layout manager, allows you to switch between components like flipping through a deck of cards. Explore practical examples showcasing the implementation of CardLayout, including the use of hidden visibility and JavaScript to control card display. Enhance your web designs by incorporating Simpa CSS Layouts, and get step-by-step instructions on including the Simpa stylesheet in your HTML file.";

const CardLayoutPage = ({ path }: PageProps) => {
  const handleChange = (ev: React.ChangeEvent) => {
    const value = (ev.currentTarget as HTMLSelectElement).value;
    const container: HTMLElement = document.getElementById(
      "container"
    ) as HTMLElement;
    const cards = container.children;
    for (let i = 0; i < cards.length; i++) {
      const card: HTMLElement = container.children[i] as HTMLElement;
      if (card.dataset.name === value) {
        card.style.visibility = "inherit";
      } else {
        card.style.visibility = "hidden";
      }
    }
  };
  return (
    <Layout path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use Card Layouts</span>
        <span>with HTML and CSS</span>
      </h1>
      <p>
        CardLayout is a layout manager that allows you to switch between
        multiple components in a container like flipping through a deck of
        cards. It is useful for creating user interfaces with multiple views.
      </p>
      <p>
        With CardLayout, you can have several components in a single container,
        but only one is visible at a time.
      </p>
      <p>Here's an example of how to use CardLayout:</p>
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
        In this example, we create a div container with its class set to
        "CardLayout". We then add three buttons that we want to switch between
        to the container.
      </p>
      <p>We set the visibility of the first and third buttons to hidden.</p>
      <p>
        When you this code, you will see a container with a button labeled "
        Button 2", like this:
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
      <h2>Example with a Simple Code to Switch between Cards</h2>
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
    function handleChange(ev) {
      const value = ev.currentTarget.value;
      const container = document.getElementById("container");
      const cards = container.children;
      for (let i = 0; i < cards.length; i++) {
        const card = container.children[i];
        if (card.dataset.name === value) {
          card.style.visibility = "inherit";
        } else {
          card.style.visibility = "hidden";
        }
      }
    };
  </script>
</head>

<body class="Frame">
  <div class="CenterLayout">
    <div class="BorderLayout"
         style="border: 1px solid Gray; height: 100px; padding: 10px">
      <div class="PageStart">
        <!-- combo box -->
        <select onchange="handleChange(event);">
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
  </div>
</body>

</html>`}
        </SyntaxHighlighter>
      </div>
      <p>
        In this example, we create three buttons as cards. We add the buttons to
        the card container giving each a data-name attribute, which will be used
        to switch between them later with JavaScript, when the combo box value
        is changed.
      </p>
      <p>
        When we run the code, initially we will see a panel with a combo box
        with "1st Card" item selected and a button with the text "
        <code>
          <u>First</u> Button
        </code>
        ".
      </p>
      <p>
        If you select the "2nd Card" item in the combo box, the button with the
        text "
        <code>
          <u>Second</u> Button
        </code>
        " will be shown. If you select the "3rd Card" item in the combo box, the
        button with the text "
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
            <select onChange={handleChange} defaultValue={"Card 1"}>
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
