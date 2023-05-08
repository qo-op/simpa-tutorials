import React from "react";
import Layout from "components/Layout";

class Blank extends React.Component<{
  location: any
}> {
  render = () => {
    return (
      <Layout pageTitle={"Simpa Tutorials"} pathname={this.props.location.pathname}>
        <p></p>
      </Layout>
    );
  };
}

export default Blank;
