import CopyToClipboardSyntaxHighlighter from "components/CopyToClipboardSyntaxHighlighter";
import Layout from "components/Layout";
import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

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
        Scrollable tables are a useful way to handle large amounts of data
        within a limited space. They provide vertical and/or horizontal
        scrolling when the content of the table exceeds the dimensions of its
        container, allowing users to view and interact with the table
        effectively.
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
        ScrollTable ensures that the column and row headers remain visible even
        when scrolling through the table's content. This fixed positioning of
        headers helps users identify the associated column and row for each data
        point, particularly in large tables that require significant scrolling.
      </p>
      <p>Here's an example of how to use ScrollTable:</p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
</head>
<body>
  <!-- ScrollTable -->
  <div class="ScrollTable"
       style="max-width: 500px">
    <table>
      <!-- Table Data -->
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
      <!-- Column Headers -->
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
</body>
</html>`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In this example, a div container with the class "ScrollTable" is
        created, and its maximum width is set to 500 pixels. Inside the div
        container, a table is defined with five columns representing the data:
        "Name", "Age", "Occupation", "Gender", and "Country". The table rows and
        column headers are structured using the tbody and thead elements,
        respectively. It's crucial to maintain the order of tbody before thead
        for proper functionality.
      </p>
      <p>
        When you run this code, a table will be displayed with the specified
        column names and data. If the table's content exceeds the visible area,
        scrollbars will appear to enable scrolling.
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
        Additionally, you can include row headers in the ScrollTable by using
        the data-row-header="true" attribute. Here's an example:
      </p>
      <div className="SyntaxHighlighter">
        <CopyToClipboardSyntaxHighlighter>
          {`<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
</head>
<body>
  <!-- ScrollTable -->
  <!-- data-row-header="true" -->
  <div class="ScrollTable"
       data-row-header="true"
       style="max-width: 250px">
    <table>
      <!-- Table Data -->
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
</body>
</html>
`}
        </CopyToClipboardSyntaxHighlighter>
      </div>
      <p>
        In this modified example, the data-row-header="true" attribute is added
        to enable row headers. The first column cells in the table will serve as
        row headers.
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
