import * as React from "react";

class Tutorial extends React.Component<{
  pageTitle: string;
  children: React.ReactNode;
}> {
  render = () => {
    return (
      <div className="Tutorial BoxLayout" data-axis="page-axis">
        {this.props.pageTitle
          .split(/\r?\n/)
          .map((line: string, index: number) => (
            <h1 key={index}>{line}</h1>
          ))}
        <div>{this.props.children}</div>
      </div>
    );
  };
}

export default Tutorial;
