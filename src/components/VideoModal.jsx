import React from "react";
import Button from "../components/Button";
import ReactPlayer from 'react-player'

export default class ArModal extends React.Component {

  render() {
    const { toggleClose ,videoURL } = this.props;
    return (
      <div className="model_container padding_20">
        
        <div className="ar-info">
        <ReactPlayer url={videoURL} 
        controls={true}
        playing width="100%"/>
          <p className="black-small">
            After scanning the qr code you have to open the scanned URL from you
            mobile and please make sure you allow mobile camera access for the
            browser.After camera has been loaded point the mobile to here and
            keep waiting..
            <br />
             <Button label="Close" onClick={toggleClose} />
          </p>
         
        </div>
      </div>
    );
  }
}
