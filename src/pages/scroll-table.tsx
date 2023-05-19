import React from "react";
import { PageProps } from "gatsby";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";

const ScrollTablePage = ({ path }: PageProps) => {
  return (
    <Layout pageTitle={"How to Use ScrollTable with HTML and CSS"} path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use ScrollTable</span>
        <span>with HTML and CSS</span>
      </h1>
      <p>
        <code>ScrollTable</code> combines the functionality of a table with
        scrollbars to accommodate large amounts of data within a limited space.
        It allows users to view and interact with a sizable table by providing
        vertical and/or horizontal scrolling when the table's content exceeds
        the dimensions of its container.
      </p>
      <p>
        In a <code>ScrollTable</code> component, the{" "}
        <b>column and row headers</b> are designed to{" "}
        <b>remain visible even when scrolling</b> through the table's content.
        This means that as you scroll vertically or horizontally within the
        table, the headers for each column and the headers for each row will
        stay fixed at the top or left side of the table, respectively.
      </p>
      <div className="CenterLayout">
        <div
          className="ScrollTable"
          data-row-header
          style={{ maxWidth: "400px", height: "200px" }}
        >
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Constructor</th>
                <th>Type</th>
                <th>Horsepower</th>
                <th>Sales in 2020</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ford F-Series</td>
                <td>Ford</td>
                <td>Pickup</td>
                <td style={{ textAlign: "right" }}>290 HP</td>
                <td style={{ textAlign: "right" }}>787,422</td>
              </tr>
              <tr>
                <td>Chevrolet Silverado</td>
                <td>General Motors</td>
                <td>Pickup</td>
                <td style={{ textAlign: "right" }}>310 HP</td>
                <td style={{ textAlign: "right" }}>594,094</td>
              </tr>
              <tr>
                <td>Ram Pickup</td>
                <td>Ram</td>
                <td>Pickup</td>
                <td style={{ textAlign: "right" }}>260 HP</td>
                <td style={{ textAlign: "right" }}>563,676</td>
              </tr>
              <tr>
                <td>Toyota RAV4</td>
                <td>Toyota</td>
                <td>SUV</td>
                <td style={{ textAlign: "right" }}>203 HP</td>
                <td style={{ textAlign: "right" }}>430,387</td>
              </tr>
              <tr>
                <td>Honda CR-V</td>
                <td>Honda</td>
                <td>SUV</td>
                <td style={{ textAlign: "right" }}>190 HP</td>
                <td style={{ textAlign: "right" }}>333,502</td>
              </tr>
              <tr>
                <td>Toyota Camry</td>
                <td>Toyota</td>
                <td>Sedan</td>
                <td style={{ textAlign: "right" }}>206 HP</td>
                <td style={{ textAlign: "right" }}>294,348</td>
              </tr>
              <tr>
                <td>Chevrolet Equinox</td>
                <td>General Motors</td>
                <td>SUV</td>
                <td style={{ textAlign: "right" }}>170 HP</td>
                <td style={{ textAlign: "right" }}>270,994</td>
              </tr>
              <tr>
                <td>Honda Civic</td>
                <td>Honda</td>
                <td>Sedan</td>
                <td style={{ textAlign: "right" }}>158 HP</td>
                <td style={{ textAlign: "right" }}>261,225</td>
              </tr>
              <tr>
                <td>Toyota Corolla</td>
                <td>Toyota</td>
                <td>Sedan</td>
                <td style={{ textAlign: "right" }}>139 HP</td>
                <td style={{ textAlign: "right" }}>237,178</td>
              </tr>
              <tr>
                <td>GMC Sierra</td>
                <td>General Motors</td>
                <td>Pickup</td>
                <td style={{ textAlign: "right" }}>277 HP</td>
                <td style={{ textAlign: "right" }}>236,745</td>
              </tr>
              <tr>
                <td>Chevrolet Malibu</td>
                <td>General Motors</td>
                <td>Sedan</td>
                <td style={{ textAlign: "right" }}>160 HP</td>
                <td style={{ textAlign: "right" }}>238,312</td>
              </tr>
              <tr>
                <td>Hyundai Elantra</td>
                <td>Hyundai</td>
                <td>Sedan</td>
                <td style={{ textAlign: "right" }}>147 HP</td>
                <td style={{ textAlign: "right" }}>200,415</td>
              </tr>
              <tr>
                <td>Ford Explorer</td>
                <td>Ford</td>
                <td>SUV</td>
                <td style={{ textAlign: "right" }}>300 HP</td>
                <td style={{ textAlign: "right" }}>226,217</td>
              </tr>
              <tr>
                <td>Jeep Grand Cherokee</td>
                <td>Jeep</td>
                <td>SUV</td>
                <td style={{ textAlign: "right" }}>295 HP</td>
                <td style={{ textAlign: "right" }}>209,786</td>
              </tr>
              <tr>
                <td>Nissan Rogue</td>
                <td>Nissan</td>
                <td>SUV</td>
                <td style={{ textAlign: "right" }}>170 HP</td>
                <td style={{ textAlign: "right" }}>227,935</td>
              </tr>
              <tr>
                <td>Ford Escape</td>
                <td>Ford</td>
                <td>SUV</td>
                <td style={{ textAlign: "right" }}>181 HP</td>
                <td style={{ textAlign: "right" }}>202,740</td>
              </tr>
              <tr>
                <td>Subaru Forester</td>
                <td>Subaru</td>
                <td>SUV</td>
                <td style={{ textAlign: "right" }}>182 HP</td>
                <td style={{ textAlign: "right" }}>176,996</td>
              </tr>
              <tr>
                <td>Subaru Outback</td>
                <td>Subaru</td>
                <td>Wagon</td>
                <td style={{ textAlign: "right" }}>182 HP</td>
                <td style={{ textAlign: "right" }}>153,294</td>
              </tr>
              <tr>
                <td>Toyota Highlander</td>
                <td>Toyota</td>
                <td>SUV</td>
                <td style={{ textAlign: "right" }}>295 HP</td>
                <td style={{ textAlign: "right" }}>141,677</td>
              </tr>
              <tr>
                <td>Jeep Wrangler</td>
                <td>Jeep</td>
                <td>SUV</td>
                <td style={{ textAlign: "right" }}>285 HP</td>
                <td style={{ textAlign: "right" }}>139,482</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>
        The fixed column and row headers in <code>ScrollTable</code> ensure that
        users can identify the column and row associated with each data point,
        especially when dealing with large tables that may require significant
        scrolling.
      </p>
      <p>
        Here's an example of how to use <code>ScrollTable</code>:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="ScrollTable">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Occupation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>25</td>
        <td>Software Engineer</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>30</td>
        <td>Data Analyst</td>
      </tr>
      <tr>
        <td>Mark Johnson</td>
        <td>28</td>
        <td>Web Developer</td>
      </tr>
    </tbody>
  </table>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        In this example, we create a <code>div</code> container and set its
        class to <code>ScrollTable</code>. Inside the <code>div</code>{" "}
        container, we create a table with three columns: "Name", "Age" and
        "Occupation"
      </p>
      <p>
        When you run this code, you will see a table displayed with the
        specified column names and data. If the size of your screen is
        sufficiently large, scrollbars will not be visible. The scrollbars
        become visible only when the content of the table extends beyond the
        visible area.
      </p>
      <div className="CenterLayout">
        <div className="ScrollTable">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Occupation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>25</td>
                <td>Software Engineer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>30</td>
                <td>Data Analyst</td>
              </tr>
              <tr>
                <td>Mark Johnson</td>
                <td>28</td>
                <td>Web Developer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p></p>
      <hr />
      <h2>Example with row headers</h2>
      <p>
        Row headers serve as labels or identifiers and provide a way to visually
        distinguish and reference each row in the table. They often contain
        information that helps identify the data in the corresponding row.
      </p>
      <p>
        Row headers can be used to display additional information about each
        row, such as row numbers, unique identifiers, or any other relevant
        data. They are separate from the regular data columns and provide a
        fixed reference point for the rows.
      </p>
      <p>
        Here's an example of creating a <code>ScrollTable</code> with row
        headers:
      </p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="ScrollTable"
     data-row-header
     style="max-width: 300px;">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Occupation</th>
        <th>Gender</th>
        <th>Country</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>25</td>
        <td>Software Engineer</td>
        <td>Male</td>
        <td>USA</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>30</td>
        <td>Data Analyst</td>
        <td>Female</td>
        <td>Canada</td>
      </tr>
      <tr>
        <td>Mark Johnson</td>
        <td>28</td>
        <td>Web Developer</td>
        <td>Male</td>
        <td>Australia</td>
      </tr>
    </tbody>
  </table>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        In this example, we create a <code>div</code> container and set its
        class to <code>ScrollTable</code>. Then we add the{" "}
        <code>data-row-header</code> attribute.
      </p>
      <p>
        When you run this code, you will see a window containing the{" "}
        <code>ScrollTable</code> with row headers displayed in the first column.
      </p>
      <div className="CenterLayout">
        <div
          className="ScrollTable"
          data-row-header
          style={{ maxWidth: "300px" }}
        >
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Occupation</th>
                <th>Gender</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>25</td>
                <td>Software Engineer</td>
                <td>Male</td>
                <td>USA</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>30</td>
                <td>Data Analyst</td>
                <td>Female</td>
                <td>Canada</td>
              </tr>
              <tr>
                <td>Mark Johnson</td>
                <td>28</td>
                <td>Web Developer</td>
                <td>Male</td>
                <td>Australia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p></p>
      <NoteAboutSimpaCSS subject="Simpa CSS Components" />
    </Layout>
  );
};

export default ScrollTablePage;
