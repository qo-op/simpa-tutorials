import React from "react";
import { PageProps } from "gatsby";
import Layout from "components/Layout";

const IndexPage = ({ path }: PageProps) => {
  return (
    <Layout pageTitle={"Introduction to Simpa"} path={path}>
      <h1 className="BoxLayout" data-axis="page-axis">
        <span>Introduction to Simpa</span>
      </h1>
      <p>
        Simpa is a user interface library that helps developers to create
        Single-Page Applications. Simpa provides a set of layouts and components
        for building graphical user interfaces.
      </p>
      <p>
        In this series of tutorials, we will explore the basics of Simpa and how
        to use it in Single-Page Applications. We will cover topics such as:
      </p>
      <ul>
        <li>How to use layout managers to arrange components on the screen</li>
        <li>
          The fundamentals of Simpa composite components, such as menus, split
          panes, tabbed panes, tables and trees
        </li>
      </ul>
      <p>
        Throughout these tutorials, we will use practical examples and code
        snippets to illustrate each concept.
      </p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </Layout>
  );
};

export default IndexPage;
