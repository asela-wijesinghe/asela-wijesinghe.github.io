import React, { Component } from "react";

export default class Loader extends React.Component {
  render() {
    const textStyles = {
      position: "absolute",
      color: "black",
      fontSize: "24px",
      lineHeight: "36px",
      textAlign: "center",
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    };
    return (
      <div style={textStyles}>
        <div class="lds-ripple-2">
          <div />
          <div />
        </div>
        <br />
        <h3 className="animated fadeIn">Loading...</h3>
      </div>
    );
  }
}
