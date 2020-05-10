import React from "react";
import Slider from "react-slick";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import article from "../assets/images/articles/article1.jpg";
import Masonry from "../components/masonry.jsx"
import { MenuComponent } from "../components/Menu";
import blog from "../assets/images/blog.jpg";

const articleDetails = [
  
  {
    src: article, title: "How I created my own blog - Intro",
    linkID: 1,
     techs: ["ReactJS","AWS","Serverless"], 
     role: "It's my developer journey on how I planned and architected my blog while tackling few common problems along the way..."
  },
  // {
  //   src: calcey, title: "How I created my Blog - Part 1",
  //   // linkID: 1,
  //    techs: ["AWS", "Serverless", "Tech"], 
  //    role: "This episode is about the backend architecture how i planned to initial schema to the "
  // },
  // {
  //   src: calcey, title: "How I created my Blog - Part 2",
  //   // linkID: 1,
  //    techs: ["ReactJS", "Offline App", "PWA", "Tech"], 
  //    role: "It's my developer journey on how I planned and architected my blog while tackling few common problems along the way..."
  // },
  // {
  //   src: calcey, title: "How I created my Blog - Part 3",
  //   // linkID: 1,
  //    techs: ["CMS", "Dashboard", "Tech"], 
  //    role: "It's my developer journey on how I planned and architected my blog while tackling few common problems along the way..."
  // },

]


export class BlogPage extends React.Component {
  render() {

    const masonryOptions = {
      transitionDuration: '0.5s',
      percentPosition: true,
      gutter: 10
    };
    return (
      <div className="container-blog animated fadeIn">
               <MenuComponent/>

        <img src={blog} className="top-img-blog" />
        <div className="bottom-card-blog">
          <span className="heading">ASELA'S BLOG</span>
          <div className="blog-summary-container">
          <p>"Theres a part of me, whose always wanting to share my experiences.<br/> technical, career or could be life.."</p></div>
          <div className="masonry-container">
            <Masonry className={'grid'} // default ''
              elementType={'div'} // default 'div'
              options={masonryOptions} // default {}
              elements={articleDetails} >
            </Masonry>
          </div>
        </div>

        <div class="arrow bounce" />

      </div >
    );
  }
}

