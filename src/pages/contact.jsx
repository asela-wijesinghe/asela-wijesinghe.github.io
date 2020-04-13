import React from "react";
import Slider from "react-slick";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import contact from "../assets/images/contact.jpg";
import { SocialMediaLine } from "../components/socialMediaLine.jsx";

import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { MenuComponent } from "../components/Menu";

export class ContactPage extends React.Component {
  handleNewComment(comment) {
    console.log(comment.text);
  }

  render() {
    return (
      <div className="contact-container animated fadeIn">
                 <MenuComponent/>
        <div className="left-card">
          <span className="heading">CONTACT</span>
          <p>KEEP IN TOUCH WITH ME</p>

          <p className="contact-text">
            <FiPhoneCall className="icons" />
            &nbsp;&nbsp; <b>phone :</b>
            &nbsp;&nbsp;(+94)719286354
          </p>
          <p className="contact-text">
            <FiMail className="icons" />
            &nbsp;&nbsp;<b>email :</b> &nbsp;&nbsp;123azeela@gmail.com
          </p>
          <br />
          <div class="download-container">
            <p>
              <a href="data/Asela Wijesinghe.pdf" class="button" download><i class="fa fa-download"></i>Download CV</a>
            </p>
          </div>

          <SocialMediaLine black />
        </div>

        <img src={contact} className="right-img" />
      </div>
    );
  }
}
// title="Example Thread"
// url="aselawijesinghe.lk"
// category_id = "123456";
// identifier="aselawijesinghe"
