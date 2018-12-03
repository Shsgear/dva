import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';


class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
  }


  handleDeleteComment(index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index);
    }
  }

  render() {
    return (
      <div className="comment-list">
        {this.props.comments.map((comment, i) => <Comment comment={comment} index={i} key={comment.createTime} onDeleteComment={this.handleDeleteComment.bind(this)} />)}
      </div>
    )
  }
}

export default CommentList;