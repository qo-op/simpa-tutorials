import Layout from "components/Layout";
import { SEO } from "components/SEO";
import { PageProps } from "gatsby";
import React from "react";

const title: string = "Introduction to Simpa";
const description: string =
  "Learn how to use Simpa layouts and components to create Single-Page Applications (SPAs) with this tutorial series. Discover the basics of Simpa and explore topics such as layout managers, borders, dialogs, menus, split panes, tabbed panes, tables, and trees. Each concept is explained using practical examples and code snippets.";

const IndexPage = ({ path }: PageProps) => {
  return (
    <Layout path={path}>
      <h1
        className="BoxLayout"
        data-axis="page-axis"
        style={{ textAlign: "center" }}
      >
        <span>Introduction to Simpa</span>
      </h1>
      <p>
        Simpa is a user interface library designed to assist developers in
        creating Single-Page Applications (SPAs). It offers a collection of
        layouts and components specifically tailored for building graphical user
        interfaces.
      </p>
      <p>
        This series of tutorials aims to provide a comprehensive understanding
        of Simpa and guide developers on how to effectively utilize it in their
        Single-Page Applications. The tutorials will cover the following key
        topics:
      </p>
      <ul>
        <li>
          How to use Simpa's layout managers to organize and arrange components
          on the screen efficiently. Layout managers simplify the process of
          creating responsive and visually appealing interfaces.
        </li>
        <li>
          The fundamentals of Simpa components, such as borders, dialogs, menus,
          split panes, tabbed panes, tables, and trees.
        </li>
      </ul>
      <p>
        Throughout the tutorials, practical examples and code snippets will be
        provided to illustrate each concept clearly. By following along with
        these examples, developers will be able to grasp the concepts
        effectively and apply them in their own projects.
      </p>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <SEO title={title} description={description} />;
