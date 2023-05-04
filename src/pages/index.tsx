import * as React from "react";
import type { HeadFC } from "gatsby";
import { Link } from "gatsby";
import Layout from "components/Layout";

class IndexPage extends React.Component {
  render = () => {
    return (
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    );
  };
}

export const Head: HeadFC = () => <title>Home Page</title>;

export default IndexPage;
