import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';


class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
  }


  render() {
    return (
      <div className="comment-list">
        {this.props.comments.map((comment, i) => <Comment comment={comment} key={i} />)}
      </div>
    )
  }
}

export default CommentList;