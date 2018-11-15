import React, { Component } from "react";

export default class Button extends React.Component {
  // Using a class property instead of a constructor

  render() {
    return <button {...this.props}>{this.props.label}</button>;
  }
}
