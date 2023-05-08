import * as React from "react";

class TutorialPane extends React.Component<{
  children: React.ReactNode;
}> {
  render = () => {
    return (
      <div className="TutorialPane">
        <div>{this.props.children}</div>
      </div>
    );
  };
}

export default TutorialPane;
