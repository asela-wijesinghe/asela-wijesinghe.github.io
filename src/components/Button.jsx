import React, { Component } from "react";

export default class Button extends React.Component {
  // Using a class property instead of a constructor
  state = {
    label: "Contact"
  };
  render() {
    return <button>{this.state.label}</button>;
  }
}
