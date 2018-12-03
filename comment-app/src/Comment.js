import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Comment extends Component {
  static propTypes = {
    comment: Proptypes.object.isRequired,
    onDeleteComment: Proptypes.func,
    index: Proptypes.number
  }
  constructor(props) {
    super(props);
    this.state = {
      timeString: '',
    }
  }
  componentWillMount() {
    // console.log('will mount', this.props.comment);
    this._updateTimeString();
    this._timer = setInterval(
      this._updateTimeString.bind(this),
      5000
    )
  }
  componentWillUnmount() {
    clearInterval(this._timer);
    this._timer = null;
  }

  
  _updateTimeString () {
    const { createTime } = this.props.comment;
    const duration = (+Date.now() - createTime) / 1000;
    console.log(createTime, duration);
    this.setState({
      timeString: duration > 60
        ? `${Math.round(duration / 60)}分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }
  handleDeleteComment() {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index);
    }
  }
  _getProcessedContent(content) {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }
  render() {
    const { msg, name, createTime } = this.props.comment;
    return (
      <div className="comment-list">
        <p>· {name}: </p>
        {/* <p>{msg}</p> */}
        <p dangerouslySetInnerHTML={{__html: this._getProcessedContent(msg)}}></p>
        <span>{ this.state.timeString }</span>
        <button className='comment-delete' style={ { float: "right" } } onClick={this.handleDeleteComment.bind(this)}>
          删除
        </button>
      </div>
    )
  }
}

export default Comment;