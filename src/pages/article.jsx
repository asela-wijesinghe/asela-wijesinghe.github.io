import React from "react";
import Slider from "react-slick";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Masonry from "../components/masonry.jsx";
import { MenuComponent, BackButton } from "../components/Menu";
import article from "../assets/images/articles/article1.jpg";
import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";
import {
  FacebookIcon,
  InstapaperIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon
} from "react-share";
import ReactMarkdown from "react-markdown";
import MediaQuery from "react-responsive";
import { Helmet } from "react-helmet";
import { articleDetails } from "../assets/articleData.js";

export class ArticlePage extends React.Component {
  render() {
    const { articleId } = this.props.match.params;
    const renderShareLinks = id => {
      return (
        <div className="card-title-share">
          <FacebookShareButton
            url={"https://asela-wijesinghe.github.io/blog/" + id}
          >
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <TwitterShareButton
            url={"https://asela-wijesinghe.github.io/blog/" + id}
          >
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <LinkedinShareButton
            url={"https://asela-wijesinghe.github.io/blog/" + id}
          >
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
          <WhatsappShareButton
            url={"https://asela-wijesinghe.github.io/blog/" + id}
          >
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
        </div>
      );
    };

    return (
      <div className="container-article animated fadeIn">
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            property="og:title"
            content={articleDetails[articleId - 1].title}
          />
          <meta
            property="og:description"
            content={articleDetails[articleId - 1].role}
          />
          <meta property="og:image" content="https://i.imgur.com/pbYcCyP.jpg" />
          <meta
            property="og:url"
            content={
              "https://asela-wijesinghe.github.io/blog/" +
              articleDetails[articleId - 1].linkID
            }
          />
          <meta property="og:type" content="website" />
          <title>{articleDetails[articleId - 1].title}</title>
          <link
            rel="canonical"
            href={
              "https://asela-wijesinghe.github.io/blog/" +
              articleDetails[articleId - 1].linkID
            }
          />
        </Helmet>
        <BackButton />
        <MenuComponent />

        <div className="card-article">
          <img
            src={articleDetails[articleId - 1].src}
            className="top-img-blog"
          />
          <br></br>
          <br></br>
          <div className="card-title-container">
            <div className="card-title">
              <h1 className="heading">{articleDetails[articleId - 1].title}</h1>
              <h3>{articleDetails[articleId - 1].desc}</h3>
              <MediaQuery query="(max-width: 768px)">
                {renderShareLinks(articleDetails[articleId - 1].linkID)}
              </MediaQuery>
            </div>
            <MediaQuery query="(min-width: 769px)">
              {renderShareLinks(articleDetails[articleId - 1].linkID)}
            </MediaQuery>
          </div>
          <div className="article-body">
            <p>
              <ReactMarkdown
                source={articleDetails[articleId - 1].body}
                escapeHtml={false}
              />
            </p>
          </div>
        </div>
        <div class="arrow bounce" />
      </div>
    );
  }
}
