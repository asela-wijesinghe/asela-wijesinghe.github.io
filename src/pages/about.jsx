import React from "react";
import Slider from "react-slick";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class AboutPage extends React.Component {
  handleNewComment(comment) {
    console.log(comment.text);
  }

  render() {
    return (
      <div className="container animated fadeIn">
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
        <br />
        <br />
        <span className="heading">ABOUT</span>
      </div>
    );
  }
}
