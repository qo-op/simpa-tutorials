import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const title: string = "How to Use Scrollable Tables with HTML and CSS";
const description: string =
  "Explore how to effectively use scrollable tables in HTML and CSS to handle large amounts of data within limited space. Learn about ScrollTable, a powerful component that combines the functionality of a table with scrollbars, enabling users to view and interact with sizable tables. Discover how ScrollTable provides vertical and/or horizontal scrolling when the content exceeds the dimensions of the container. The fixed column and row headers in ScrollTable ensure consistent visibility, allowing users to easily identify the associated data points even while scrolling. Dive into a practical example showcasing the implementation of a ScrollTable using a div container and a table with specified column names and data. Gain insights on the proper arrangement of elements, including the tbody for table data and the thead for column headers, to ensure optimal ScrollTable functionality. Witness how scrollbars become visible only when the content extends beyond the visible area. Additionally, explore the option of using row headers to enhance the table by providing labels or identifiers for each row.";

const ScrollTablePage = ({ path }: PageProps) => {
  return (
    <Layout path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>How to Use Scrollable Tables</span>
        <span>with HTML and CSS</span>
      </h1>
      <p>
        ScrollTable combines the functionality of a table with scrollbars to
        accommodate large amounts of data within a limited space. It allows
        users to view and interact with a sizable table by providing vertical
        and/or horizontal scrolling when the table's content exceeds the
        dimensions of its container.
      </p>
      <p>
        In a ScrollTable component, the <b>column and row headers</b> are
        designed to <b>remain visible even when scrolling</b> through the
        table's content. This means that as you scroll vertically or
        horizontally within the table, the column headers for each column and
        the row headers for each row will stay fixed at the top or left side of
        the table, respectively.
      </p>
      <div className="CenterLayout">
        <div
          className="ScrollTable"
          data-row-header
          style={{ maxWidth: "250px", height: "200px" }}
        >
          <table>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>35</td>
                <td>Engineer</td>
                <td>Male</td>
                <td>United States</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Teacher</td>
                <td>Female</td>
                <td>Canada</td>
              </tr>
              <tr>
                <td>Michael Johnson</td>
                <td>42</td>
                <td>Doctor</td>
                <td>Male</td>
                <td>Australia</td>
              </tr>
              <tr>
                <td>Sarah Brown</td>
                <td>31</td>
                <td>Lawyer</td>
                <td>Female</td>
                <td>United Kingdom</td>
              </tr>
              <tr>
                <td>Robert Wilson</td>
                <td>39</td>
                <td>Artist</td>
                <td>Male</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Emily Davis</td>
                <td>25</td>
                <td>Writer</td>
                <td>Female</td>
                <td>France</td>
              </tr>
              <tr>
                <td>David Lee</td>
                <td>33</td>
                <td>Software Developer</td>
                <td>Male</td>
                <td>South Korea</td>
              </tr>
              <tr>
                <td>Anna Taylor</td>
                <td>29</td>
                <td>Nurse</td>
                <td>Female</td>
                <td>New Zealand</td>
              </tr>
              <tr>
                <td>William Chen</td>
                <td>37</td>
                <td>Business Analyst</td>
                <td>Male</td>
                <td>China</td>
              </tr>
              <tr>
                <td>Olivia Martinez</td>
                <td>26</td>
                <td>Marketing Manager</td>
                <td>Female</td>
                <td>Mexico</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Occupation</th>
                <th>Gender</th>
                <th>Country</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <p>
        The fixed column and row headers in ScrollTable ensure that users can
        identify the column and row associated with each data point, especially
        when dealing with large tables that may require significant scrolling.
      </p>
      <p>Here's an example of how to use ScrollTable:</p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<div class="ScrollTable"
     style="max-width: 500px;">
  <table>
    <!-- table data -->
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>35</td>
        <td>Engineer</td>
        <td>Male</td>
        <td>United States</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>28</td>
        <td>Teacher</td>
        <td>Female</td>
        <td>Canada</td>
      </tr>
      <tr>
        <td>Michael Johnson</td>
        <td>42</td>
        <td>Doctor</td>
        <td>Male</td>
        <td>Australia</td>
      </tr>
    </tbody>
    <!-- column headers -->
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Occupation</th>
        <th>Gender</th>
        <th>Country</th>
      </tr>
    </thead>
  </table>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        In this example, we create a div container and set its class to
        "ScrollTable". Inside the div container, we create a table with five
        columns: "Name", "Age", "Occupation", "Gender" and "Country".
      </p>
      <p>
        Please note that in the table element, we have two child elements: tbody
        and thead. The tbody element contains the table data, while the thead
        element holds the column headers. To ensure proper functionality of the
        ScrollTable, it is important to arrange the elements in the following
        order: tbody should be placed first, followed by thead.
      </p>
      <p>
        When you run this code, you will see a table displayed with the
        specified column names and data. If the size of your screen is
        sufficiently large, scrollbars will not be visible. The scrollbars
        become visible only when the content of the table extends beyond the
        visible area.
      </p>
      <div className="CenterLayout">
        <div className="ScrollTable" style={{ maxWidth: "500px" }}>
          <table>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>35</td>
                <td>Engineer</td>
                <td>Male</td>
                <td>United States</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Teacher</td>
                <td>Female</td>
                <td>Canada</td>
              </tr>
              <tr>
                <td>Michael Johnson</td>
                <td>42</td>
                <td>Doctor</td>
                <td>Male</td>
                <td>Australia</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Occupation</th>
                <th>Gender</th>
                <th>Country</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <p></p>
      <hr />
      <h2>Example with Row Headers</h2>
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
      <p>Here's an example of creating a ScrollTable with row headers:</p>
      <div className="SyntaxHighlighter">
        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>
          {`...
<!-- ScrollTable with data-row-header="true" -->
<div class="ScrollTable"
     data-row-header="true"
     style="max-width: 250px;">
  <table>
    <!-- table data -->
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>35</td>
        <td>Engineer</td>
        <td>Male</td>
        <td>United States</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>28</td>
        <td>Teacher</td>
        <td>Female</td>
        <td>Canada</td>
      </tr>
      <tr>
        <td>Michael Johnson</td>
        <td>42</td>
        <td>Doctor</td>
        <td>Male</td>
        <td>Australia</td>
      </tr>
    </tbody>
    <!-- column headers -->
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Occupation</th>
        <th>Gender</th>
        <th>Country</th>
      </tr>
    </thead>
  </table>
</div>
...`}
        </SyntaxHighlighter>
      </div>
      <p>
        In this example, we create a div container and set its class to
        "ScrollTable". We then enable the data-row-header attribute by setting
        it to "true".
      </p>
      <p>
        When you run this code, you will see a window containing the ScrollTable
        with the first column cells as row headers.
      </p>
      <div className="CenterLayout">
        <div
          className="ScrollTable"
          data-row-header="true"
          style={{ maxWidth: "250px" }}
        >
          <table>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>35</td>
                <td>Engineer</td>
                <td>Male</td>
                <td>United States</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>28</td>
                <td>Teacher</td>
                <td>Female</td>
                <td>Canada</td>
              </tr>
              <tr>
                <td>Michael Johnson</td>
                <td>42</td>
                <td>Doctor</td>
                <td>Male</td>
                <td>Australia</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Occupation</th>
                <th>Gender</th>
                <th>Country</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <p></p>
      <NoteAboutSimpaCSS subject="Simpa CSS Components" />
    </Layout>
  );
};

export default ScrollTablePage;

export const Head = () => <SEO title={title} description={description} />;
