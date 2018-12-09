import React from "react";
import Slider from "react-slick";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import abt from "../assets/images/back4.jpg";

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
          <div class="arrow bounce" />
        </div>
      </div>
    );
  }
}
