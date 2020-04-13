import React from "react";
import RevealText from "../components/RevealText";
import TypedText from "../components/TypedText";
import Button from "../components/Button";
import qr from "../assets/images/qr.png";
import Drawer from "react-drag-drawer";
import VideoModal from "../components/VideoModal.jsx";
import InterestedModel from "../components/InterestedModel.jsx";
import MediaQuery from "react-responsive";
import { SocialMediaLine } from "../components/socialMediaLine.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MenuComponent } from "../components/Menu";
import Slick from "../components/slick";


import Rupavahini from "../assets/images/videos/Rupavahini.png";
import ChannelEye from "../assets/images/videos/channelEye.png";
import Siyatha from "../assets/images/videos/Siyatha.png";

const sliderData = [
  { title: "ChannelEye - RiseNShine", url: ChannelEye , videoURL: "https://www.facebook.com/RiseAndShineLive/videos/788793621552736/"},  
  { title: "Rupavahini KnowledgeFirst", url:Rupavahini, videoURL: "https://youtu.be/woNvL0nmsZ4?list=PLVsj5fppngPT7cAWK44FnVFvjKgX9fjQy&t=1228"},  
  { title: "SiyathaTV Morning Show", url:Siyatha,videoURL: "https://youtu.be/9A7tUvSYMpw"},  
  ]

export class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedVideo: null,
      showVideoModel: false,
      showInterestedModel: false
    };
    this.toggleVideoModal = this.toggleVideoModal.bind(this);
    this.toggleInterestedModal = this.toggleInterestedModal.bind(this);
  }

  toggleVideoModal() {
    this.setState({ showVideoModel: !this.state.showVideoModel });
  }

  toggleInterestedModal() {
    this.setState({ showInterestedModel: !this.state.showInterestedModel });
  }

  render() {
    const { showVideoModel, showInterestedModel,selectedVideo } = this.state;
    return (
      <div className="App ">
        <Drawer
          open={showVideoModel}
          onRequestClose={this.toggleVideoModal}
          modalElementClass={"modal"}
        >
          <VideoModal
          
          videoURL={selectedVideo} 
          toggleClose={this.toggleVideoModal} />
        </Drawer>
        <Drawer
          open={showInterestedModel}
          onRequestClose={this.toggleInterestedModal}
          modalElementClass={"lg-modal"}
        >
          <InterestedModel toggleClose={this.toggleInterestedModal} />
        </Drawer>
        <div className="bg-img animated fadeIn">
          <br />
         <MenuComponent/>
          <RevealText />
          
          <div className="main-div">
            <div className="left-div animated slideInLeft">
              <div className="res-div">
                <h3 className="white-text resp-text">Hello, There..</h3>
                <p className="white-text white-back resp-text">i am a</p>
                <TypedText
                  strings={[
                    "Believer",
                    "Technopreneur",
                    "UX Lover",
                    "Full Stack Engineer",
                    "Product Developer"
                    // "HTML characters &times; &copy;"
                  ]}
                />
              </div>
              <div className="res-div">
                <p className="white-small right-padding">
                  Surf through my work, if you are interested you can hire me to develop a tailor made software solution for you..
                  
                </p>
                <Button
                  label="I'm interested"
                  onClick={() => this.setState({ showInterestedModel: true })}
                />
              </div>
            </div>

         
            <MediaQuery query="(min-width: 769px)">
              
            
              <div className="right-div animated slideInRight fadeIn">
            
                <p className="white-small padding">
                  <center>
                <div style={{  maxWidth: "250px", alignSelf : "center"}}>
                                  <Slick 
                sliderData={sliderData}
                 onClick={(videoURL) => this.setState({
                         showVideoModel: true ,
                         selectedVideo: videoURL
                        })}/>
                        
                </div>
                </center>
                  Wanna know me better? here are some videos from our latest research products including "The Sorting Hat"<br />
                 &nbsp;
                </p>
                <SocialMediaLine />
              </div>
            </MediaQuery>
          </div>
   
          <div className="footer-left animated slideInUp fadeIn" >
         
            <p className="footer-text">
              Copyright &copy;{new Date().getFullYear()}. All rights reserved | &nbsp;
            </p>
          </div>
      
          <div className="footer-right animated slideInUp fadeIn">
        
            <p className="footer-text">Made with</p>
            <div class="lds-heart">
              <div />
            </div>
            <p className="footer-text">by Asela Wijesinghe</p>
          </div>
        </div>
      </div>
    );
  }
}
