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
import {Helmet} from "react-helmet";

const articleDetails = [
  
    {
      src: article, title: "How I created my own blog - Intro",
      linkID: 1,
       techs: ["ReactJS","AWS","Serverless"], 
       desc: "It's my developer journey on how I planned and architected my blog while tackling few common problems along the way..."
    },
];

  const markdown = `
  <h2>
  What is Lorem Ipsum? </h2>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. <i>Lorem Ipsum has been the industry's standard</i> dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
</p>
  <img src="https://i.imgur.com/F4VyJKC.jpg" width="100%">
  <h3>
  What is Lorem Ipsum? </h2>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. <i>Lorem Ipsum has been the industry's standard</i> dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
</p>
  <img src="https://i.imgur.com/TRPTzTe.jpg" width="100%">

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
        <Helmet>
            <meta charSet="utf-8" />
            <meta property="og:title" content={articleDetails[0].title} />
            <meta property="og:description"
                content={articleDetails[0].desc} />
            <meta property="og:image" content="https://i.imgur.com/pbYcCyP.jpg" />
            <meta property="og:url" content={"https://asela-wijesinghe.github.io/blog/"+articleDetails[0].linkID} />
            <meta property="og:type" content="website" />
            <title>{articleDetails[0].title}</title>
            <link rel="canonical" href={"https://asela-wijesinghe.github.io/blog/"+articleDetails[0].linkID} />
        </Helmet>
               <BackButton/>
               <MenuComponent/>
                   {/* <img src={article} className="top-img-blog" /> */}
        <div className="card-article">
            <div className="card-title-container">
            <div className="card-title">
          <h1 className="heading">{articleDetails[0].title}</h1>
          <h3>{articleDetails[0].desc}</h3>
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

