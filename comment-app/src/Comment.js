import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Comment extends Component {
  static propTypes = {
    comment: Proptypes.object.isRequired,
  }

  
  render() {
    const {msg, name} = this.props.comment;
    return (
      <div className="comment-list">
        <p>· {name}: </p>
        <p>{msg}</p>
      </div>
    )
  }
}

export default Comment;