import React from "react";
import RevealText from "../components/RevealText";
import TypedText from "../components/TypedText";
import Button from "../components/Button";
import qr from "../assets/images/qr.png";
import Drawer from "react-drag-drawer";
import ArModal from "../components/ArModal.jsx";
import MediaQuery from "react-responsive";

export class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { showModal } = this.state;
    return (
      <div className="App ">
        <Drawer
          open={showModal}
          onRequestClose={this.toggleModal}
          modalElementClass={"modal"}
        >
          <ArModal toggleClose={this.toggleModal} />
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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">Research</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
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
                <Button label="I'm interested" />
              </div>
            </div>
            <MediaQuery query="(min-width: 1024px)">
              <div className="right-div">
                <img src={qr} className="qr-image" />
                <p className="white-small padding">
                  Scan the code and &nbsp;
                  <u className="modal_open">
                    <span
                      className="modal_open"
                      onClick={() => this.setState({ showModal: true })}
                    >
                      click here
                    </span>
                  </u>
                  &nbsp; to see some magic ;)
                </p>
                {/* <Button /> */}
              </div>
            </MediaQuery>
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
