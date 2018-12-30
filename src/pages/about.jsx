import React from "react";
import Slider from "react-slick";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import abt from "../assets/images/back4.jpg";
import logo1 from "../assets/images/logo1.jpg";
import prof from "../assets/images/prof.png";
import logo2 from "../assets/images/logo2.jpg";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.jpg";
import logo5 from "../assets/images/logo5.png";
import logo6 from "../assets/images/logo6.png";
import logo7 from "../assets/images/logo7.jpg";
export class AboutPage extends React.Component {
  render() {
    return (
      <div className="container-about animated fadeIn">
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

        <img src={abt} className="top-img-about" />
        <div className="bottom-card-about">
          <span className="heading">ABOUT</span>
          <div className="row responsive">
            <div className="column divider">
              <h2 className="left-padding">Experience</h2>
              <div className="row">
                <img src={logo1} className="avatar" />
                <div className="column">
                  <h4>Co-Founder | CTO | Full Stack Developer</h4>
                  <p>15NTAP Solutions</p>
                  <p>2015-2018</p>
                </div>
              </div>
              <div className="row">
                <img src={logo2} className="avatar" />
                <div className="column">
                  <h4>Co-Founder | Head of Product Development</h4>
                  <p>Tuition Factory</p>
                  <p>2016-2018</p>
                </div>
              </div>
              <div className="row">
                <img src={logo3} className="avatar" />
                <div className="column">
                  <h4>Mobile | Full Stack Developer</h4>
                  <p>Leafycode</p>
                  <p>2016-2017</p>
                </div>
              </div>
              <div className="row">
                <img src={logo4} className="avatar" />
                <div className="column">
                  <h4>General | Marketing executive</h4>
                  <p>Tuition Factory</p>
                  <p>2014-2015</p>
                </div>
              </div>
            </div>
            <div className="column ">
              <h2 className="left-padding">Education</h2>
              <div className="row">
                <img src={logo5} className="avatar" />
                <div className="column">
                  <h4>BSc(Special) in Computer Science</h4>
                  <p>University of Sri Jayawardhenepura</p>
                  <p>2015-2019</p>
                </div>
              </div>
              <div className="row">
                <img src={logo6} className="avatar" />
                <div className="column">
                  <h4>
                    CMJD (Comprehensive Master in Java Developing) | ABSD
                    (Advanced Business Solution Developer)
                  </h4>
                  <p>Institute of Java and Software Engineering</p>
                  <p>2013-2015</p>
                </div>
              </div>
              <div className="row">
                <img src={logo7} className="avatar" />
                <div className="column">
                  <h4>A/L Maths Stream | Z-Score: 1.398</h4>
                  <p>Royal College, Colombo-07</p>
                  <p>Batch of 2012</p>
                </div>
              </div>
            </div>
          </div>
          {/* <span className="heading">ACTIVITY</span>
          <div className="row responsive">

          </div> */}
        </div>

        <div class="arrow bounce" />

      </div >
    );
  }
}

// <img src={prof} className="prof-pic" />
