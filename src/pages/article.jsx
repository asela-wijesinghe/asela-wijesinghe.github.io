import React from "react";
import Slider from "react-slick";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Masonry from "../components/masonry.jsx"
import { MenuComponent } from "../components/Menu";
import article from "../assets/images/articles/article1.jpg";
import {
    FacebookShareButton,
    InstapaperShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
  } from "react-share";
  import {
    FacebookIcon,
    InstapaperIcon,
    LinkedinIcon,
    TwitterIcon,
    WhatsappIcon,
  } from "react-share";

export class ArticlePage extends React.Component {
  render() {

    const masonryOptions = {
      transitionDuration: '0.5s',
      percentPosition: true,
      gutter: 10
    };
    return (
      <div className="container-article animated fadeIn">
               <MenuComponent/>

        {/* <img src={article} className="top-img-blog" /> */}
        <div className="card-article">
            <div className="card-title-container">
            <div className="card-title">
          <h1 className="heading">7 Things to Build When You Feel Bored as a Programmer</h1>
          <h2>It’s always a great time to learn new things and improve your skills</h2>
          </div>
          <div className="card-title-share">
   
              <FacebookShareButton url={"shareUrl"} > 
              <FacebookIcon size={32} round={true} />
              </FacebookShareButton>

             <TwitterShareButton url={"shareUrl"} > 
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>

              <LinkedinShareButton url={"shareUrl"} > 
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>

              <WhatsappShareButton url="asd" >  
              <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>
        
              
        </div>
          </div>
          <div className="article-body">
          <p>You’ve probably been thinking about an exciting and fun side project that you could work on. Although you want to build something, you’re not really sure about what to build. As a result of this, you feel bored.
Why not build something fun and learn some new things instead?
The best way to improve your skills is by actually building something. So let’s improve your skills while building one of the fun and challenging things that are listed in this piece.
1. Self-Driving Lego Car

Photo by Praveesh Palakeel on Unsplash
A couple of years ago I’ve worked on a kind of similar project like this one. The goal was to create a car made of Lego that could write a certain word on a piece of paper.
This project aims to make a car using either Lego or Lego technic that could drive without bumping into any objects. You’ll need a Raspberry Pi (or Arduino) for this project, some Lego, and some ultrasonic sensors so you can avoid any obstacles.
The combination of software and hardware is what makes this project so much fun. If you’ve never touched a Raspberry Pi (or Arduino) I would highly recommend a project like this to you.
What you’ll learn:
The basic usage of an Arduino (or Raspberry Pi).
Reading sensors.
The interaction between software and hardware.
</p>
          </div>
          </div>
        <div class="arrow bounce" />

      </div >
    );
  }
}

