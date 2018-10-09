import React, { Component } from 'react';

class CommentInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      msg: '',
    }
  }

  onChangeInput(e) {
    this.setState({
      name: e.target.value
    })
  }
  onChangeText(e) {
    this.setState({
      msg: e.target.value
    })
  }

  handleSubmit() {
    if (this.props.onSubmit) {
      const { name, msg } = this.state;
      this.props.onSubmit({ name, msg });
    }
    this.setState({
      msg: '',
    })
  }
  
  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input 
              value={this.state.name}
              onChange={this.onChangeInput.bind(this)}
            />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea
            value={this.state.msg}
            onChange={this.onChangeText.bind(this)}
          />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput;