import React from "react";
import Slider from "react-slick";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Masonry from "../components/masonry.jsx";
import { MenuComponent } from "../components/Menu";
import blog from "../assets/images/blog.jpg";

import { articleDetails } from "../assets/articleData.js";

export class BlogPage extends React.Component {
  render() {
    const masonryOptions = {
      transitionDuration: "0.5s",
      percentPosition: true,
      gutter: 10
    };
    return (
      <div className="container-blog animated fadeIn">
        <MenuComponent />

        <img src={blog} className="top-img-blog" />
        <div className="bottom-card-blog">
          <span className="heading">ASELA'S BLOG</span>
          <div className="blog-summary-container">
            <p>
              "Theres a part of me, whose always wanting to share my
              experiences.
              <br /> technical, career or could be life.."
            </p>
          </div>
          <div className="masonry-container">
            <Masonry
              className={"grid"} // default ''
              elementType={"div"} // default 'div'
              options={masonryOptions} // default {}
              elements={articleDetails}
            ></Masonry>
          </div>
        </div>

        <div class="arrow bounce" />
      </div>
    );
  }
}
