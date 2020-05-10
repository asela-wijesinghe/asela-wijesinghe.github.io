import React from "react";
import Slider from "react-slick";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Masonry from "../components/masonry.jsx"
import { MenuComponent,BackButton } from "../components/Menu";
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
import ReactMarkdown from "react-markdown";
import MediaQuery from "react-responsive";


const articleDetails = [
  
    {
      src: article, title: "How I created my own blog - Intro",
      linkID: 1,
       techs: ["ReactJS","AWS","Serverless"], 
       desc: "It's my developer journey on how I planned and architected my blog while tackling few common problems along the way..."
    },
];

  const markdown = `
  # Live demo <br/>
  
  Changes are automatically rendered as you type.
  
  ## Table of Contents
  
  * Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
  * Renders actual, "native" React DOM elements
  * Allows you to escape or skip HTML (try toggling the checkboxes above)
  * If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!
  
  ## HTML block below
  
  <blockquote>
    This blockquote will change based on the HTML settings above.
  </blockquote>
  
  ## How about some code?

  
  Pretty neat, eh?
  
  ## Tables?
  
  | Feature   | Support |
  | --------- | ------- |
  | tables    | ✔ |
  | alignment | ✔ |
  | wewt      | ✔ |
  
  ## More info?
  <b>
  Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)
  </b>
  
  ---------------
  
  A component by [Espen Hovlandsdal](https://espen.codes/)
  `;
export class ArticlePage extends React.Component {
    
  render() {
    const renderShareLinks =(id)=>{
        return (
            <div className="card-title-share">
            <FacebookShareButton url={"https://asela-wijesinghe.github.io/blog/"+id} > 
            <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
           <TwitterShareButton url={"https://asela-wijesinghe.github.io/blog/"+id} > 
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
            <LinkedinShareButton url={"https://asela-wijesinghe.github.io/blog/"+id} > 
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
            <WhatsappShareButton url={"https://asela-wijesinghe.github.io/blog/"+id} > 
            <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
      </div>
        )
    }

    const masonryOptions = {
      transitionDuration: '0.5s',
      percentPosition: true,
      gutter: 10
    };
    return (
      <div className="container-article animated fadeIn">
               
               <BackButton/>
               <MenuComponent/>
               
        {/* <img src={article} className="top-img-blog" /> */}
        <div className="card-article">
            <div className="card-title-container">
            <div className="card-title">
          <h1 className="heading">{articleDetails[0].title}</h1>
          <h2>{articleDetails[0].desc}</h2>
          <MediaQuery query="(max-width: 768px)">
        {renderShareLinks(articleDetails[0].linkID)}
        </MediaQuery>
          </div>
          <MediaQuery query="(min-width: 769px)">
        {renderShareLinks(articleDetails[0].linkID)}
        </MediaQuery>
          </div>
          <div className="article-body">
        <p>
            <ReactMarkdown
        source={markdown}
        escapeHtml={false}
        /> 
        </p>

          </div>
          </div>
        <div class="arrow bounce" />

      </div >
    );
  }
}

