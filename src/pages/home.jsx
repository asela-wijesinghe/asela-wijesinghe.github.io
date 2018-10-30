import React from "react";
import RevealText from "../components/RevealText";
import TypedText from "../components/TypedText";
import Button from "../components/Button";
import qr from "../assets/images/HIRO.jpg";

export class HomePage extends React.Component {
  render() {
    return (
      <div className="App ">
        <div className="bg-img animated fadeIn">
          <br />
          <label>
            <input type="checkbox" />
            <span class="menu">
              <span class="hamburger" />
            </span>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
            </ul>
          </label>
          <RevealText />
          <div className="main-div">
            <div className="left-div">
              <h3 className="white-text">Hello, There..</h3>
              <p className="white-text white-back">i am a</p>
              <TypedText
                strings={[
                  "Believer",
                  "Full Stack Developer",
                  "Technopreneur"
                  // "HTML characters &times; &copy;"
                ]}
              />
              <h5 className="white-small right-padding">
                Surf through my porfolio and if you are interested to do some
                awesome work with me let me know...
              </h5>
              <Button />
            </div>
            <div className="right-div">
              <img src={qr} className="qr-image" />
              <h5 className="white-small padding">
                Scan the QR CODE to see some magic
              </h5>
              {/* <Button /> */}
            </div>
          </div>
          <div className="footer">
            <p className="footer-text">Made with</p>
            <div class="lds-heart">
              <div />
            </div>
            <p className="footer-text">by @Asela Wijesinghe</p>
          </div>
        </div>
      </div>
    );
  }
}
