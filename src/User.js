import React, { Component } from "react";

export default class User extends Component {
  state = { present: true };

  toggle = () => {
    this.setState({
      present: !this.state.present
    });
  };

  render() {
    return (
      <div>
        <p>
          User: <b>{this.props.name}</b> is present :
          {this.state.present ? " Yes" : " No"}
        </p>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}
