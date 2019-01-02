import React from "react";
import Slider from "react-slick";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import contact from "../assets/images/contact.jpg";
import { SocialMediaLine } from "../components/socialMediaLine.jsx";

import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

export class ContactPage extends React.Component {
  handleNewComment(comment) {
    console.log(comment.text);
  }

  render() {
    return (
      <div className="contact-container animated fadeIn">
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
