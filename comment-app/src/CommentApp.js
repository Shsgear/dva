import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommmentList';

class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: [
        {
          name: 'ETH',
          msg: 'Ethereum',
        },
        {
          name: 'BTC',
          msg: 'Bitcoin',
        },
      ],
    }
  }
  handleSubmitComment(comment) {
    this.setState({
      comments: [comment, ...this.state.comments],
    })
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)}></CommentInput>
        <CommentList comments={this.state.comments}></CommentList>
      </div>
    )
  }
}
export default CommentApp;