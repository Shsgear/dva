import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommmentList';

class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      currentUserName: '',
    }
  }
  componentWillMount() {
    this._loadComments();
  }
  handleSubmitComment(comment) {
    console.log('comment', comment);
    this.setState({
      comments: [comment, ...this.state.comments],
      currentUserName: comment.name
    }, () => {
      this._saveUsername(this.state.currentUserName);
      this._saveComments(this.state.comments);
    });
    
  }
  _loadComments() {
    let comments = localStorage.getItem('comments');
    // console.log(comments);
    if (comments) {
      comments = JSON.parse(comments);
      this.setState({ comments });
    }
  }
  _saveComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  _saveUsername (username) {
    localStorage.setItem('username', username)
  }
  handleDeleteComment(index) {
    console.log(index);
    const { comments } = this.state;
    comments.splice(index, 1);
    this.setState({ comments });
    this._saveComments(comments);
  }
  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)}></CommentInput>
        <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)}></CommentList>
        <Post></Post>
        <Ref></Ref>
      </div>
    )
  }
}
function getPostData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('response from server');
    }, 1000)
  })
}
class Post extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
    }
  }
  componentWillMount () {
    this.get();
  }
  componentDidMount() {
    console.log(this.button);
  }
  async get() {
    this.setState({
      content: '数据加载中...',
    })
    
    const content = await getPostData();
    this.setState({
      content
    })
  }
  render () {
    return (
      <div>
        <div className='post-content'>
         { this.state.content }
        </div>
        <button ref={(btn) => {this.button=btn}} onClick={() => {this.get()}}>刷新</button>
      </div>
    )
  }
}

class Ref extends Component {
  getHeight() {
   const height = window.getComputedStyle(this.p, null).height;
   console.log(height)
  }
  static defaultProps = {
    content: '撒大撒大所大所'
  }
  render () {
    return (
    <p ref={(p) => {this.p = p}} onClick={() => {this.getHeight()}}>{this.props.content}</p>
    )
  }
}
export default CommentApp;
