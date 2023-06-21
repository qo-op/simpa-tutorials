import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const title: string = "How to Use Borders with HTML and CSS";
const description: string =
  "Discover the power of borders in HTML and CSS to enhance the visual appearance and user experience of your web applications. Learn how borders can be applied to various HTML elements such as <div>, <span>, <label>, and <p>, among others. Explore different border types, including Raised Etched Border, Lowered Etched Border, Raised Bevel Border, and Lowered Bevel Border, each creating unique effects to make your components stand out. Dive into TitledBorder, which adds a titled label to a component's border, improving organization and readability. Explore examples of using TitledBorder with different title alignments, such as center justification. Unlock the versatility of CompoundBorder, enabling you to combine multiple border styles to create composite borders with various stacking and nesting options.";

const BorderPage = ({ path }: PageProps) => {
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
        <span>How to Use Borders</span>
        <span>with HTML and CSS</span>
      </h1>
      <p>
        Borders are used to enhance and differentiate components by creating a
        visual boundary around them. They can be applied to various HTML
        elements, including &lt;div&gt;, &lt;span&gt;, &lt;label&gt;, &lt;p&gt;,
        and more. By utilizing borders, developers can improve the overall
        appearance and user experience of their applications.
      </p>
      <hr />
      <div
        className="RaisedEtchedBorder"
        style={{ padding: ".5em", backgroundColor: "LightGray" }}
      >
        Raised Etched Border
      </div>
      <p>
        RaisedEtchedBorder is a border type that creates a raised effect by
        etching a pattern around a component.
      </p>
      <p>Here's an example of how to use RaisedEtchedBorder:</p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="RaisedEtchedBorder"
     style="padding: .5em;">
  Raised Etched Border
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div
        className="LoweredEtchedBorder"
        style={{ padding: ".5em", backgroundColor: "LightGray" }}
      >
        Lowered Etched Border
      </div>
      <p>
        LoweredEtchedBorder is a border type that creates a sunken effect by
        etching a pattern around a component.
      </p>
      <p>Here's an example of how to use LoweredEtchedBorder:</p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="LoweredEtchedBorder"
     style="padding: .5em;">
  Lowered Etched Border
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div
        className="RaisedBevelBorder"
        style={{ padding: ".5em", backgroundColor: "LightGray" }}
      >
        Raised Bevel Border
      </div>
      <p>
        RaisedBevelBorder is a border type that adds a raised effect to a
        component's border. It achieves this by incorporating a beveled edge,
        creating an illusion of depth and giving the appearance that the
        component is elevated above its surrounding area.
      </p>
      <p>Here's an example of how to use RaisedEtchedBorder:</p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="RaisedBevelBorder"
     style="padding: .5em;">
  Raised Bevel Border
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div
        className="LoweredBevelBorder"
        style={{ padding: ".5em", backgroundColor: "LightGray" }}
      >
        Lowered Bevel Border
      </div>
      <p>
        LoweredBevelBorder is a border type that creates a lowered or sunken
        effect for a component's border. It gives the impression that the
        component is recessed into the surrounding area.
      </p>
      <p>Here's an example of how to use LoweredBevelBorder:</p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="LoweredBevelBorder"
     style="padding: .5em;">
  Lowered Bevel Border
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <hr />
      <div className="TitledBorder">
        <span>How to Use Borders</span>
        <h2 style={{ padding: ".5em" }}>Titled Border</h2>
      </div>
      <p>
        TitledBorder is a type of border that adds a titled label to a
        component's border, providing a clear and descriptive title for the
        enclosed content. It allows developers to specify a title text
        alignment. The title is displayed along with a line border, creating a
        distinct visual separation for the component. TitledBorder is useful for
        organizing and categorizing components, providing clarity and improving
        the user interface's overall readability.
      </p>
      <p>Here's an example of how to use TitledBorder:</p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="TitledBorder">
  <span>How to Use Borders</span>
  <div style="padding: .5em;">
    Titled Border
  </div>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <div className="TitledBorder" data-title-justification="center">
        <span>How to Use Borders</span>
        <div style={{ padding: ".5em" }}>Center justified title</div>
      </div>
      <p>
        And here's another example of how to use TitledBorder with the
        data-title-justification="center" attribute:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="TitledBorder"
     data-title-justification="center">
  <span>How to Use Borders</span>
  <div style="padding: .5em;">
    Center justified title
  </div>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        In the second example, the data-title-justification="center" attribute
        is added to the &lt;div&gt; element with the class "TitledBorder". This
        attribute specifies that the title text should be centered within the
        titled border.
      </p>
      <hr />
      <div className="CompoundBorder RaisedBevelBorder">
        <div
          className="LoweredBevelBorder "
          style={{ padding: ".5em", backgroundColor: "LightGray" }}
        >
          Compound Border
        </div>
      </div>
      <p>
        CompoundBorder is a versatile border type that allows developers to
        combine multiple border instances to create a composite border. It
        enables the stacking or nesting of different border styles, such as
        LineBorder, EtchedBorder, TitledBorder, or any other border
        implementation.
      </p>
      <p>Here's an example of how to use CompoundBorder with two bevels:</p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="CompoundBorder RaisedBevelBorder">
  <div class="LoweredBevelBorder"
       style="padding: .5em;">
    Compound Border
  </div>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <div className="CompoundBorder" style={{ border: "2px solid Red" }}>
        <div className="CompoundBorder" style={{ border: "2px solid Yellow" }}>
          <div
            className="CompoundBorder"
            style={{
              border: "2px solid Green",
              padding: ".5em",
              backgroundColor: "LightGray",
            }}
          >
            Compound Border (three borders)
          </div>
        </div>
      </div>
      <p>
        And here's another example of how to use CompoundBorder with three
        borders:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="CompoundBorder"
     style="border: 2px solid Red;">
  <div class="CompoundBorder"
       style="border: 2px solid Yellow;">
    <div style="border: 2px solid Green;
                padding: .5em;">
      Compound Border (three colors)
    </div>
  </div>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p></p>
      <NoteAboutSimpaCSS subject="Simpa CSS Layouts" />
    </Layout>
  );
};

export default BorderPage;

export const Head = () => <SEO title={title} description={description} />;
