import ExampleLayout from "components/ExampleLayout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "TableDemo";
const description: string = `An HTML version of Oracle's ${title} example`;
const id = "table-demo";

const TableDemoPage = ({ path, location }: PageProps) => {
  return (
    <ExampleLayout
      path={path}
      hostname={location.hostname}
      htmlCode={`<!-- ${title}.html -->
<!-- ${description} -->
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://qo-op.github.io/simpa/simpa.css">
  <script src="https://qo-op.github.io/simpa/simpa.js">
  </script>
  <link rel="stylesheet"
        href="./${title}.css">
  <script src="./${title}.js">
  </script>
</head>
<body class="Frame"
      id="${id}">
  <div class="ScrollPane"
       data-overlay>
    <div class="CenterLayout"
         style="padding: .25em;">
      <div class="ScrollTable"
           data-vertical-policy="scrollbar-always"
           style="max-width: 500px;
                  height: 100px;">
        <table onclick="handleClick(event);"
               onblur="handleBlur(event);">
          <tbody>
            <tr>
              <td>Kathy</td>
              <td>Smith</td>
              <td>Snowboarding</td>
              <td style="text-align: right;">5</td>
              <td style="text-align: center;">
                <input type="checkbox">
              </td>
            </tr>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>Rowing</td>
              <td style="text-align: right;">3</td>
              <td style="text-align: center;">
                <input type="checkbox" checked>
              </td>
            </tr>
            <tr>
              <td>Sue</td>
              <td>Black</td>
              <td>Knitting</td>
              <td style="text-align: right;">2</td>
              <td style="text-align: center;">
                <input type="checkbox">
              </td>
            </tr>
            <tr>
              <td>Jane</td>
              <td>White</td>
              <td>Speed reading</td>
              <td style="text-align: right;">20</td>
              <td style="text-align: center;">
                <input type="checkbox" checked>
              </td>
            </tr>
            <tr>
              <td>Joe</td>
              <td>Brown</td>
              <td>Pool</td>
              <td style="text-align: right;">10</td>
              <td style="text-align: center;">
                <input type="checkbox">
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Sport</th>
              <th># of Years</th>
              <th>Vegetarian</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</body>
</html>
`}
      cssCode={`/* ${title}.css */
th,
td {
  white-space: nowrap;
}
`}
      jsCode={`/* ${title}.js */
function handleClick(event) {
  if (event.target.tagName !== "TD") {
    return;
  }
  const cell = event.target;
  const columnIndex = cell.cellIndex;
  if (columnIndex < 2 || columnIndex === 4) {
    return;
  }
  cell.contentEditable = true;
  cell.focus();
};
function handleBlur(event) {
  if (event.target.tagName !== "TD") {
    return;
  }
  const cell = event.target;
  const columnIndex = cell.cellIndex;
  if (columnIndex < 2 || columnIndex === 4) {
    return;
  }
  cell.contentEditable = false;
}
`}
      info={`
An HTML version of Oracle's ${title} example, using simpa.
The purpose of this example is to create a scrollable table.
It defines a table that displays data in rows and columns, with each column having a specific name.
The table is wrapped inside a ScrollTable to handle large amounts of data.
The code also includes methods to handle table interactions, such as updating cell values.
`}
    />
  );
};

export default TableDemoPage;

export const Head = () => <SEO title={title} description={description} />;
