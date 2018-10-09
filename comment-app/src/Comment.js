import React, { Component } from 'react';

class Comment extends Component {
  static defaultProps = {
    name: '',
    msg: ''
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