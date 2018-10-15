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
      currentUserName: '',
    }
  }
  handleSubmitComment(comment) {
    this.setState({
      comments: [comment, ...this.state.comments],
      currentUserName: comment.name
    }, () => {
      this._saveUsername(this.state.currentUserName);
    });
    
  }
  _saveUsername (username) {
    localStorage.setItem('username', username)
  }

  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)}></CommentInput>
        <CommentList comments={this.state.comments}></CommentList>
        <Post></Post>
        <Ref></Ref>
      </div>
    )
  }
}
function getPostData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(12);
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
