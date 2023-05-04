import * as React from "react";
import type { PageProps, HeadFC } from "gatsby";
import Layout from "components/Layout";

class AboutPage extends React.Component<PageProps> {
  render = () => {
    return (
      <Layout pageTitle="About Me">
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </Layout>
    );
  };
}

export const Head: HeadFC = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="Your description" />
  </>
);

export default AboutPage;
