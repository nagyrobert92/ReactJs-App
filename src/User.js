import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <div>
        <p>
          User: <b>{this.props.name}</b>
        </p>
      </div>
    );
  }
}
