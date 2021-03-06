import React from "react";
import Slider from "react-slick";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import abt from "../assets/images/back4.png";
import logo1 from "../assets/images/logo1.jpg";
import prof from "../assets/images/prof.png";
import logo2 from "../assets/images/logo2.jpg";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.jpg";
import logo5 from "../assets/images/logo5.png";
import logo6 from "../assets/images/logo6.png";
import logo7 from "../assets/images/logo7.jpg";
import logo8 from "../assets/images/logo8.jpg";
import logo9 from "../assets/images/logo9.jpg";
import Masonry from "../components/masonry.jsx";
import act1 from "../assets/images/activity/act1.jpg";
import act2 from "../assets/images/activity/act2.png";
import act3 from "../assets/images/activity/act3.jpg";
import act4 from "../assets/images/activity/act4.jpg";
import act5 from "../assets/images/activity/act5.jpg";
import act6 from "../assets/images/activity/act6.jpg";
import act7 from "../assets/images/activity/act7.jpg";
// import act9 from "../assets/images/activity/act9.jpg";
import act11 from "../assets/images/activity/act11.jpg";
import act10 from "../assets/images/activity/act10.jpg";
import calcey from "../assets/images/activity/calcey.jpg";
import icsr from "../assets/images/activity/icsr.jpg";
import kelaniya from "../assets/images/activity/kelaniya.jpg";
import act8 from "../assets/images/activity/act8.jpeg";
import hri from "../assets/images/activity/hri.png";

import { MenuComponent } from "../components/Menu";

const projectDetails = [
  {
    src: hri,
    title: "Global 2nd Place - Human Robotics Interaction 2020",
    techs: [],
    role: "ACM/IEEE International Conference (Cambridge, UK)"
  },

  {
    src: icsr,
    title: "Global Winners - Hardware Innovation",
    techs: [],
    role: "ICSR 2019 (Madrid, Spain)"
  },
  {
    src: calcey,
    title: "Public Session @Calcey Technologies",
    techs: [],
    role: "Discover Magic in the Hat"
  },
  {
    src: kelaniya,
    title: "Guest Session",
    techs: [],
    role: "Industrial Management, University of Kelaniya"
  },
  {
    src: act6,
    title: "Panelist",
    techs: [],
    role: "Inspire 2017 - Rotaract (USJP)"
  },

  {
    src: act3,
    title: "Guest Speaker",
    techs: [],
    role: "Be-Digitalized 2018 - Rotaract (USJP) "
  },

  {
    src: act11,
    title: "One of Sri Lankan Finalists",
    techs: [],
    role: "GSEA 2019 ( Global Student Entreprenuer Awards )"
  },
  {
    src: act10,
    title: "Contributor to Opensource",
    techs: [],
    role: "Opensource.lk"
  },
  {
    src: act2,
    role: "SL Dev Talks - Podcast Series",
    techs: [],
    title: "Vlogger | Co-host"
  },

  {
    src: act1,
    role: "Youthhack - Startup Competition 2017",
    techs: [],
    title: "Champions - Sri Lanka"
  },

  {
    src: act5,
    title: "Startup Mentorship",
    techs: [],
    role: "Venture Frontier -Startup Bootcamp 2017"
  },
  {
    src: act8,
    title: "Meetup Seeker",
    techs: [],
    role: "Meetup.com | RSVP.lk"
  },
  // { src: act9, title: "Recognition for projects", techs: [], role: "CMJD / ABSD - IJSE" },

  {
    src: act4,
    title: "Competitor - Final 15",
    techs: [],
    role: "Launch Pad - Startup Competition 2018"
  },
  {
    src: act7,
    title: "Hackathon Participant",
    techs: [],
    role: "IEEEXtreme, Let Me Hack, Real Hack..."
  }
];

export class AboutPage extends React.Component {
  render() {
    const masonryOptions = {
      transitionDuration: "0.5s",
      percentPosition: true,
      gutter: 10
    };
    return (
      <div className="container-about animated fadeIn">
        <MenuComponent />

        <img src={abt} className="top-img-about" />
        <div className="bottom-card-about">
          <span className="heading">ABOUT</span>
          <div className="row responsive">
            <div className="column divider">
              <h2 className="left-padding">Experience</h2>
              <div className="row">
                <img src={logo9} className="avatar" />
                <div className="column">
                  <h4>Senior Software Engineer</h4>
                  <p>Mitra Innovation (Pvt)Ltd</p>
                  <p>2020</p>
                </div>
              </div>
              <div className="row">
                <img src={logo1} className="avatar" />
                <div className="column">
                  <h4>Co-Founder | CTO | Lead Developer</h4>
                  <p>15NTAP Solutions</p>
                  <p>2015-2019</p>
                </div>
              </div>
              <div className="row">
                <img src={logo8} className="avatar" />
                <div className="column">
                  <h4>Software Engineer</h4>
                  <p>Calcey Technologies LLC</p>
                  <p>2019-2020</p>
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
                  <p>CV.lk</p>
                  <p>2014-2015</p>
                </div>
              </div>
            </div>
            <div className="column ">
              <h2 className="left-padding">Education</h2>
              <div className="row">
                <img src={logo5} className="avatar" />
                <div className="column">
                  <h4>BSc (Hons) in Computer Science</h4>
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
          <span className="heading">ACTIVITIES</span>
          <br></br>
          <div className="masonry-container">
            <Masonry
              className={"grid"} // default ''
              elementType={"div"} // default 'div'
              options={masonryOptions} // default {}
              elements={projectDetails}
            ></Masonry>
          </div>
        </div>

        <div class="arrow bounce" />
      </div>
    );
  }
}

// <img src={prof} className="prof-pic" />
