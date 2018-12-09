import React from "react";
import RevealText from "../components/RevealText";
import TypedText from "../components/TypedText";
import Button from "../components/Button";
import qr from "../assets/images/qr.png";
import Drawer from "react-drag-drawer";
import ArModal from "../components/ArModal.jsx";
import InterestedModel from "../components/InterestedModel.jsx";
import MediaQuery from "react-responsive";
import { SocialMediaLine } from "../components/socialMediaLine.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      showArModel: false,
      showInterestedModel: false
    };
    this.toggleArModal = this.toggleArModal.bind(this);
    this.toggleInterestedModal = this.toggleInterestedModal.bind(this);
  }

  toggleArModal() {
    this.setState({ showArModel: !this.state.showArModel });
  }

  toggleInterestedModal() {
    this.setState({ showInterestedModel: !this.state.showInterestedModel });
  }

  render() {
    const { showArModel, showInterestedModel } = this.state;
    return (
      <div className="App ">
        <Drawer
          open={showArModel}
          onRequestClose={this.toggleArModal}
          modalElementClass={"modal"}
        >
          <ArModal toggleClose={this.toggleArModal} />
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
          <label>
            <input type="checkbox" />
            <span className="menu">
              <span className="hamburger" />
            </span>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {/* <li>
                <Link href="#">Resume</Link>
              </li> */}
            </ul>
          </label>
          <RevealText />
          <div className="main-div">
            <div className="left-div">
              <div className="res-div">
                <h3 className="white-text resp-text">Hello, There..</h3>
                <p className="white-text white-back resp-text">i am a</p>
                <TypedText
                  strings={[
                    "Believer",
                    "Technopreneur",
                    "Full Stack Engineer",
                    "Product Developer"
                    // "HTML characters &times; &copy;"
                  ]}
                />
              </div>
              <div className="res-div">
                <p className="white-small right-padding">
                  Surf through my work and if you are interested you can hire me
                  as a developer or you can outsource the project to my
                  company...
                </p>
                <Button
                  label="I'm interested"
                  onClick={() => this.setState({ showInterestedModel: true })}
                />
              </div>
            </div>
            <MediaQuery query="(min-width: 769px)">
              <div className="right-div">
                <img src={qr} className="qr-image" />
                <p className="white-small padding">
                  Wanna see some magic? Scan the code & <br />
                  <u className="modal_open">
                    <span
                      className="modal_open"
                      onClick={() => this.setState({ showArModel: true })}
                    >
                      click here
                    </span>
                  </u>
                  &nbsp;
                </p>
                <SocialMediaLine />
              </div>
            </MediaQuery>
          </div>
          <div className="footer-left">
            <p className="footer-text">
              Copyright &copy; 2018. All rights reserved | &nbsp;
            </p>
          </div>
          {/* <SocialIcon
              style={socialButtonStyles}
              url="https://www.facebook.com/asela.wijesinghe"
            />
            <SocialIcon
              style={socialButtonStyles}
              url="https://www.linkedin.com/in/aselawijesinghe-15ntaps/"
            />
            <SocialIcon
              style={socialButtonStyles}
              url="  https://www.meetup.com/members/220513781/"
              network="meetup"
            />

            <SocialIcon
              style={socialButtonStyles}
              color="#ccc"
              url="https://github.com/asela-wijesinghe"
            />
            <SocialIcon
              style={socialButtonStyles}
              url="https://stackoverflow.com/users/5472761/aze?tab=profile"
              color="#FF9653"
            />
            <SocialIcon
              style={socialButtonStyles}
              url="https://www.instagram.com/azelawijesinghe/"
              color="#FF4571"
            /> */}

          <div className="footer-right">
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
