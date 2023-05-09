import React from "react";
import { PageProps } from "gatsby";
import Layout from "components/Layout";

const Blank = ({ path }: PageProps) => {
  return (
    <Layout pageTitle={"Simpa Tutorials"} path={path} blank={true}>
      <p></p>
    </Layout>
  );
};

export default Blank;
