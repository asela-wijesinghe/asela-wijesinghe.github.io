import React from "react";
import Button from "../components/Button";
import marker from "../assets/images/marker.png";

export default class ArModal extends React.Component {
  render() {
    const { toggleClose } = this.props;
    return (
      <div className="model_container">
        <img src={marker} className="marker_image" />
        <Button label="Go Back" onClick={toggleClose} />
      </div>
    );
  }
}
