import React from "react";
import Button from "../components/Button";
import marker from "../assets/images/marker.png";

export default class ArModal extends React.Component {
  render() {
    const { toggleClose } = this.props;
    return (
      <div className="model_container">
        <img src={marker} className="marker_image" />
        <div className="ar-info">
          <p className="black-small">
            After scanning the link you have to open the scanned URL from you
            mobile and please make sure you allow mobile camera access.After
            camera has been loaded point the mobile here and keep waiting..
          </p>
          <Button label="Go Back" onClick={toggleClose} />
        </div>
      </div>
    );
  }
}
