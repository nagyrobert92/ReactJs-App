import React, { Component } from "react";
import User from "./User";

export default class UserBoard extends Component {
  render() {
    return (
      <div>
        <User name="Danny boy" />
        <User name="Cyborg" />
      </div>
    );
  }
}
