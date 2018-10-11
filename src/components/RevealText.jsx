import React, { Component } from "react";
import ReactRevealText from "react-reveal-text";

export default class RevealText extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 2000);
  }

  render() {
    const textStyles = {
      color: "white",
      fontSize: "24px",
      lineHeight: "36px",
      fontFamily: "sans-serif",
      textAlign: "center",
      letterSpacing: "1em",
      paddingLeft: "1em" // to compensate for letter spacing
    };
    return (
      <div style={textStyles}>
        <div class="lds-ripple">
          <div />
          <div />
        </div>
        <ReactRevealText show={this.state.show} text="WELCOME TO THE FUTURE" />
      </div>
    );
  }
}
