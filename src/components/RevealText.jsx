import React, { Component } from "react";
import ReactRevealText from "react-reveal-text";
import MediaQuery from "react-responsive";

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
      color: "rgba(255, 255, 255, 0.7)",
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
        <MediaQuery query="(min-width: 768px)">
          <ReactRevealText
            show={this.state.show}
            text="WELCOME TO MY PROFILE"
          />
        </MediaQuery>
      </div>
    );
  }
}
