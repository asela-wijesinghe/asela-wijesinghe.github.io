import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import abt from "../assets/images/back2.jpg";

export class WorkPage extends React.Component {
  render() {
    return (
      <div className="container-work animated fadeIn">
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

        <img src={abt} className="top-img-work" />
        <div className="bottom-card-work">
          <span className="heading">WORK</span>
          <div class="arrow bounce" />
        </div>
      </div>
    );
  }
}
