import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.intervalId = null;
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}


2//

class Graph extends React.Component {
  animationTimer = null;

  componentDidMount() {
    this.animationTimer = setInterval(() => {
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.animationTimer);
  }

  render() {
    return (
      <div className="graph-container">
        {}
      </div>
    );
  }
}
