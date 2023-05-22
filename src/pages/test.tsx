import React from "react";
import { PageProps } from "gatsby";
import Layout from "components/Layout";
import { SEO } from "components/SEO";
import CodeEditor from "components/CodeEditor";

const title: string = "";
const description: string = "";

const TestPage = ({ path }: PageProps) => {
  return <CodeEditor />;
};

export default TestPage;

export const Head = () => <SEO title={title} description={description} />;
