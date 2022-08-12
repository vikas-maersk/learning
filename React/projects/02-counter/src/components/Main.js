import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  incrementHandler = () => {
    this.setState({ value: this.state.value + 1 });
  };

  decrementHandler = () => {
    this.setState({ value: this.state.value - 1 });
  };

  neutralHandler = () => {
    this.setState({ value: 0 });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div
          className="col-md-5"
          style={{ marginTop: "350px", border: "5px solid black" }}
        >
          <h1> React Counter </h1>
          <h1> {this.state.value} </h1>
          <button className="btn btn-success" onClick={this.incrementHandler}>
            Increment
          </button>
          <button className="btn btn-danger" onClick={this.decrementHandler}>
            Decrement
          </button>
          <button className="btn btn-primary" onClick={this.neutralHandler}>
            Neutral
          </button>
        </div>
      </div>
    );
  }
}

export default Main;
