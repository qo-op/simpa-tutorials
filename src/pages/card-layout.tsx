import CopyToClipboardSyntaxHighlighter from "components/CopyToClipboardSyntaxHighlighter";
import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

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
        multiple components in a container, similar to flipping through a deck
        of cards. It is useful for creating user interfaces with multiple views.
      </p>
      <p>
        With CardLayout, you can have several components within a single
        container, but only one component is visible at a time.
      </p>
      <p>Here's an example of how to use CardLayout:</p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
</head>
<body>
  <!-- Container with CardLayout -->
  <div class="CardLayout"
       style="height: 100px">
    <button style="visibility: hidden">
      Button 1
    </button>
    <button style="visibility: inherit">
      Button 2
    </button>
    <button style="visibility: hidden">
      Button 3
    </button>
  </div>
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In this example, we create a &lt;div&gt; container with the class set to
        "CardLayout". We then add three buttons that we want to switch between
        within the container.
      </p>
      <p>We set the visibility of the first and third buttons to hidden.</p>
      <p>When you run this code, you will see a button labeled "Button 2".</p>
      <div
        className="CardLayout"
        style={{
          height: "100px",
        }}
      >
        <button style={{ visibility: "hidden" }}>Button 1</button>
        <button style={{ visibility: "inherit" }}>Button 2</button>
        <button style={{ visibility: "hidden" }}>Button 3</button>
      </div>
      <p></p>
      <hr />
      <h2>Example with a Simple Code to Switch between Cards</h2>
      <p>Here's an example that uses JavaScript to switch between cards:</p>
      <p></p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
  <script>
    function handleChange(ev) {
      const comboBox = ev.currentTarget;
      const value = comboBox.value;
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
<body>
  <div class="CenterLayout">
    <div class="BorderLayout"
         style="border: 1px solid Gray;
                height: 100px;
                padding: 10px">
      <div class="PageStart"
           style="margin: 0 0 10px 0">
        <!-- Combo Box -->
        <select onchange="handleChange(event);">
          <option value="Card 1"
                  selected>
            1st Card
          </option>
          <option value="Card 2">
            2nd Card
          </option>
          <option value="Card 3">
            3rd Card
          </option>
        </select>
      </div>
      <!-- Card Container -->
      <div class="CardLayout"
           id="container">
        <button data-name="Card 1"
                style="visibility: inherit;">
          First Button
        </button>
        <button data-name="Card 2"
                style="visibility: hidden;">
          Second Button
        </button>
        <button data-name="Card 3"
                style="visibility: hidden;">
          Third Button
        </button>
      </div>
    </div>
  </div>
</body>
</html>`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In this example, we create three buttons as cards. Each button is added
        to the card container and assigned a data-name attribute, which will be
        used to switch between them later using JavaScript when the value of the
        combo box is changed.
      </p>
      <p>
        When you run the code, initially you will see a panel with a combo box
        where the "1st Card" item is selected, along with a button labeled
        "First Button".
      </p>
      <p>
        If you select the "2nd Card" item in the combo box, the button labeled
        "Second Button" will be shown. Likewise, selecting the "3rd Card" item
        will display the button labeled "Third Button".
      </p>
      <p>
        Feel free to select an item in the combo box below to switch between the
        cards.
      </p>
      <div className="CenterLayout">
        <div
          className="BorderLayout"
          style={{ border: "1px solid Gray", height: "100px", padding: "10px" }}
        >
          <div className="PageStart" style={{ margin: "0 0 10px 0" }}>
            <select onChange={handleChange} defaultValue={"Card 1"}>
              <option value="Card 1" selected>
                1st Card
              </option>
              <option value="Card 2">2nd Card</option>
              <option value="Card 3">3rd Card</option>
            </select>
          </div>
          <div className="CardLayout" id="container">
            <button data-name="Card 1" style={{ visibility: "inherit" }}>
              First Button
            </button>
            <button data-name="Card 2" style={{ visibility: "hidden" }}>
              Second Button
            </button>
            <button data-name="Card 3" style={{ visibility: "hidden" }}>
              Third Button
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
