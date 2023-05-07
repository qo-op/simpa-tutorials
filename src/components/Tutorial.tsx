import * as React from "react";

class Tutorial extends React.Component<{
  children: React.ReactNode;
}> {
  render = () => {
    return (
      <div className="Tutorial BoxLayout" data-axis="page-axis">
        <div>{this.props.children}</div>
      </div>
    );
  };
}

export default Tutorial;
