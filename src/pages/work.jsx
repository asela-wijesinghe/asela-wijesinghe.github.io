import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Masonry from "../components/masonry.jsx";
import abt from "../assets/images/back2.jpg";
import moon from "../assets/images/projects/moon.png";
import port1 from "../assets/images/projects/port1.png";
import watch1 from "../assets/images/projects/watch1.png";
import watch2 from "../assets/images/projects/watch2.png";
import dance2 from "../assets/images/projects/dance2.jpeg";
import med from "../assets/images/projects/med.png";
import mypartner from "../assets/images/projects/myPartner.png";
import tf from "../assets/images/projects/tf.jpg";
import stock from "../assets/images/projects/stock.png";
import rex from "../assets/images/projects/rex.png";
import prod from "../assets/images/projects/prod.png";
import potter from "../assets/images/projects/potter.jpg";
import smartk from "../assets/images/projects/smartk.png";
import { MenuComponent } from "../components/Menu.jsx";

const projectDetails = [
  {
    src: watch1,
    title: "Watchit.lk Client - Video Streaming Platform",
    techs: ["react", "redux", "AWS-congnito", "SASS"],
    role: "Full Stack Developer"
  },
  {
    src: potter,
    title: "The Sorting Hat",
    techs: ["Social Robotics", "Brain Interface", "AI", "python"],
    role: "Tech Lead / Full Stack Developer"
  },
  {
    src: med,
    title: "MedicalFactory- Medical Center Software",
    techs: ["react", "firebase", "redux", "javaEE", "spring boot"],
    role: "Project Lead / Full Stack Developer"
  },

  {
    src: watch2,
    title: "Watchit.lk Dashboard - Channel Manager/Uploader",
    techs: ["react", "redux", "S3-Uploader", "Vimeo API", "JWT"],
    role: "Full Stack Developer"
  },

  {
    src: stock,
    title: "Stock Reporting App - Mobile & Web",
    techs: ["react-native", "firebase", "react", "android", "expo"],
    role: "Mobile Developer"
  },
  {
    src: mypartner,
    title: "MyPartner.lk",
    techs: ["react", "socket.io", "redux-saga"],
    role: "Project Lead / Frontend Developer"
  },

  {
    src: tf,
    title: "TuitionFactory- Tuition Solution(Desktop / Mobile)",
    techs: ["javaSE", "react-native", "firebase", "MySQL"],
    role: "Project Lead / Full Stack Developer"
  },

  {
    src: dance2,
    title: "Virtual Dancing Coach - Research Project",
    techs: ["java",  "HCI" ,"kinect", "motion analyzing", "J4K"],
    role: "Project Lead / Full Stack Developer"
  },
  {
    src: port1,
    title: "My Portfolio - asela-wijesinghe.github.io",
    techs: ["react", "wordpress", "CSS", "ARCore"],
    role: "Full Stack Developer"
  },
  {
    src: prod,
    title: "ProdMon - Production Monitoring System",
    techs: ["javaEE", "spring boot", "react", "websocket", "heroku"],
    role: "Project Lead / Full Stack Developer"
  },
  {
    src: rex,
    title: "RecruitX - Mobile App",
    techs: ["react-native", "meteor", "android", "IOS"],
    role: "Mobile Frontend Developer"
  },
  {
    src: moon,
    title: "Mooniak - Company Portfolio Website",
    techs: ["react", "CSS", "responsive design"],
    role: "Frontend Developer"
  },

  {
    src: smartk,
    title: "SmartKade - smartPOS",
    techs: ["react", "firebase", "gcloud", "AWS"],
    role: "Project Lead / Full Stack Developer"
  }
];
export class WorkPage extends React.Component {
  render() {
    const masonryOptions = {
      transitionDuration: "0.5s",
      percentPosition: true,
      gutter: 10
    };
    return (
      <div className="container-work animated fadeIn">
        <MenuComponent />
        <img src={abt} className="top-img-work" />
        <div className="bottom-card-work">
          <span className="heading">WORK</span>
          <div className="project-summary-container">
            <p>Software Development &nbsp;| &nbsp;</p>
            <p>Mobile Application Development &nbsp;|&nbsp; </p>
            <p>Web Development </p>
          </div>
          <div className="masonry-container">
            <Masonry
              className={"grid"} // default ''
              elementType={"div"} // default 'div'
              options={masonryOptions} // default {}
              elements={projectDetails}
            ></Masonry>
          </div>
          <center>
            <div className="project-summary-container column">
              <h5 className="big-num">20+</h5>
              <p>All projects</p>
            </div>
          </center>
          <div class="arrow bounce" />
        </div>
      </div>
    );
  }
}
