import React from "react";
import Button from "../components/Button";

import ReactPlayer from 'react-player'

export default class ArModal extends React.Component {

  render() {
    const { toggleClose ,videoURL } = this.props;
    return (
      <div className="model_container padding_20 ">
        
        <div className="ar-info">
        <ReactPlayer url={videoURL} 
        controls={true}
        playsinline
        width={"100%"}
        playing />
        
          <p className="black-small">
            I've been a part of different research streams mainly on motion analysis and social robotics including the award winning "Harry Potter Sorting Hat" recreation. You will find few of our sessions in media regarding them on these videos...
            <br />
             <Button label="Close" onClick={toggleClose} />
          </p>
        </div>
      </div>
    );
  }
}
