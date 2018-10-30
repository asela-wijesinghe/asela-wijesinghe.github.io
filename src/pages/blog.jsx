import React from "react";
import ReactDisqusComments from "react-disqus-comments";

export class CommentsSection extends React.Component {
  handleNewComment(comment) {
    console.log(comment.text);
  }

  render() {
    return (
      <div className="comments-container">
        <ReactDisqusComments
          className="comments-section"
          shortname="aselawijesinghe"
          onNewComment={this.handleNewComment}
        />
      </div>
    );
  }
}
// title="Example Thread"
// url="aselawijesinghe.lk"
// category_id = "123456";
// identifier="aselawijesinghe"
