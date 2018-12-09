import React from "react";
import Slider from "react-slick";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const SamplePrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
};

export class WorkPage extends React.Component {
  handleNewComment(comment) {
    console.log(comment.text);
  }

  render() {
    const settings = {
      className: "center",
      infinite: false,
      slidesToScroll: 1,
      slidesToShow: 3,
      vertical: false,
      dots: false,
      nextArrow: <SamplePrevArrow />,
      prevArrow: <SamplePrevArrow />
    };
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
        <span className="heading">WORK</span>
        <Slider {...settings}>
          <div className="work-card">
            <h3>1</h3>
          </div>
          <div className="work-card">
            <h3>1</h3>
          </div>
          <div className="work-card">
            <h3>1</h3>
          </div>
          <div className="work-card">
            <h3>1</h3>
          </div>
          <div className="work-card">
            <h3>1</h3>
          </div>
          <div className="work-card">
            <h3>1</h3>
          </div>
          <div className="work-card">
            <h3>1</h3>
          </div>
          <div className="work-card">
            <h3>1</h3>
          </div>
          <div className="work-card">
            <h3>1</h3>
          </div>
          <div className="work-card">
            <h3>1</h3>
          </div>
          <div className="work-card">
            <h3>1</h3>
          </div>
          <div className="work-card">
            <h3>1</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
// title="Example Thread"
// url="aselawijesinghe.lk"
// category_id = "123456";
// identifier="aselawijesinghe"
