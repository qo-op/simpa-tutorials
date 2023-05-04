import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

class IndexPage extends React.Component<PageProps> {
  render = () => {
    return (
      <main>
      </main>
    );
  };
}

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
