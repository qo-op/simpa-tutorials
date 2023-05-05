import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component<{
  count: number;
  increment: () => void;
}> {
  render = () => {
    return (
      <div>
        <p>Count: {this.props.count}</p>
        <button onClick={this.props.increment}>Increment</button>
      </div>
    );
  };
}

const mapStateToProps = (state: { count: number }) => ({
  count: state.count,
});

const mapDispatchToProps = (
  dispatch: (action: { type: string }) => { type: string }
) => ({
  increment: () => dispatch({ type: "counter/incremented" }),
  decrement: () => dispatch({ type: "counter/decremented" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
