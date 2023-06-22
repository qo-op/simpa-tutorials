import CopyToClipboardSyntaxHighlighter from "components/CopyToClipboardSyntaxHighlighter";
import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "How to Use Borders with HTML and CSS";
const description: string =
  "Discover the power of borders in HTML and CSS to enhance the visual appearance and user experience of your web applications. Learn how borders can be applied to various HTML elements such as <div>, <span>, <label>, and <p>, among others. Explore different border types, including Raised Etched Border, Lowered Etched Border, Raised Bevel Border, and Lowered Bevel Border, each creating unique effects to make your components stand out. Dive into TitledBorder, which adds a titled label to a component's border, improving organization and readability. Explore examples of using TitledBorder with different title alignments, such as center justification. Unlock the versatility of CompoundBorder, enabling you to combine multiple border styles to create composite borders with various stacking and nesting options.";

const BorderPage = ({ path }: PageProps) => {
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
        Borders are a valuable tool for enhancing and visually separating
        components in HTML. They can be applied to various elements such as
        &lt;div&gt;, &lt;span&gt;, &lt;label&gt;, &lt;p&gt;, and more, allowing
        developers to improve the appearance and user experience of their
        applications.
      </p>
      <hr />
      <div
        className="RaisedEtchedBorder"
        style={{ padding: ".5em", backgroundColor: "LightGray" }}
      >
        Raised Etched Border
      </div>
      <p>
        The RaisedEtchedBorder is a border type that creates a raised effect by
        etching a pattern around a component. Here's an example of how to use
        it:
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<div class="RaisedEtchedBorder"
     style="padding: .5em;">
  Raised Etched Border
</div>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <hr />
      <div
        className="LoweredEtchedBorder"
        style={{ padding: ".5em", backgroundColor: "LightGray" }}
      >
        Lowered Etched Border
      </div>
      <p>
        The LoweredEtchedBorder is a border type that creates a sunken effect by
        etching a pattern around a component. Here's an example:
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<div class="LoweredEtchedBorder"
     style="padding: .5em;">
  Lowered Etched Border
</div>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <hr />
      <div
        className="RaisedBevelBorder"
        style={{ padding: ".5em", backgroundColor: "LightGray" }}
      >
        Raised Bevel Border
      </div>
      <p>
        The RaisedBevelBorder adds a raised effect to a component's border by
        incorporating a beveled edge, creating an illusion of depth. Here's an
        example:
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<div class="RaisedBevelBorder"
     style="padding: .5em;">
  Raised Bevel Border
</div>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <hr />
      <div
        className="LoweredBevelBorder"
        style={{ padding: ".5em", backgroundColor: "LightGray" }}
      >
        Lowered Bevel Border
      </div>
      <p>
        The LoweredBevelBorder creates a lowered or sunken effect for a
        component's border, making it appear recessed. Here's an example:
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<div class="LoweredBevelBorder"
     style="padding: .5em;">
  Lowered Bevel Border
</div>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <hr />
      <div className="TitledBorder">
        <span>How to Use Borders</span>
        <h2 style={{ padding: ".5em" }}>Titled Border</h2>
      </div>
      <p>
        The TitledBorder adds a titled label to a component's border, providing
        a clear and descriptive title for the enclosed content. It allows
        developers to specify a title text alignment, creating a distinct visual
        separation. Here's an example:
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<div class="TitledBorder">
  <span>How to Use Borders</span>
  <div style="padding: .5em;">
    Titled Border
  </div>
</div>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <hr />
      <div className="TitledBorder" data-title-justification="center">
        <span>How to Use Borders</span>
        <div style={{ padding: ".5em" }}>Center justified title</div>
      </div>
      <p>
        In this example, the data-title-justification="center" attribute is
        added to center justify the title text within the titled border:
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<div class="TitledBorder"
     data-title-justification="center">
  <span>How to Use Borders</span>
  <div style="padding: .5em;">
    Center justified title
  </div>
</div>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
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
        The CompoundBorder allows the combination of multiple border instances
        to create a composite border. It can stack or nest different border
        styles, such as LineBorder, EtchedBorder, TitledBorder, or others.
        Here's an example with two bevel borders:
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<div class="CompoundBorder RaisedBevelBorder">
  <div class="LoweredBevelBorder"
       style="padding: .5em;">
    Compound Border
  </div>
</div>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <hr />
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
        This example demonstrates a CompoundBorder with three borders, each with
        a different color:
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<div class="CompoundBorder"
     style="border: 2px solid Red;">
  <div class="CompoundBorder"
       style="border: 2px solid Yellow;">
    <div style="border: 2px solid Green;
                padding: .5em;">
      Compound Border (three colors)
    </div>
  </div>
</div>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p></p>
      <NoteAboutSimpaCSS subject="Simpa CSS Layouts" />
    </Layout>
  );
};

export default BorderPage;

export const Head = () => <SEO title={title} description={description} />;
