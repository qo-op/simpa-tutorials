import React from "react";
import Layout from "components/Layout";

class IndexPage extends React.Component {
  render = () => {
    return (
      <Layout pageTitle={"Simpa Tutorials"}>
        <p>
          Simpa is a user interface library that assists developers to create
          Single-Page Applications. Simpa provides a set of layouts and
          components for building graphical user interfaces.
        </p>
        <p>
          In this series of tutorials, we will explore the basics of Simpa and
          how to use it in Single-Page Applications. We will cover topics such
          as:
        </p>
        <ul>
          <li>
            How to use layout managers to arrange components on the screen
          </li>
          <li>
            The fundamentals of Simpa composite components, such as menus, split
            panes, tabbed panes, tables and trees
          </li>
        </ul>
        <p>
          Throughout these tutorials, we will use practical examples and code
          snippets to illustrate each concept.
        </p>
      </Layout>
    );
  };
}

export default IndexPage;
