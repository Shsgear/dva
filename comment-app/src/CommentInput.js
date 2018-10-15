import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }
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

  _saveUserName(name) {
    window.localStorage.setItem('name', name);
  }
  _loadUsername () {
    const name = localStorage.getItem('name')
    if (name) {
      this.setState({ name })
    }
  }

  handleSubmit() {
    const { name, msg } = this.state;
    if (this.props.onSubmit) {
      this.props.onSubmit({ name, msg });
    }
    this.setState({
      name,
      msg: '',
    })
    this._saveUserName(name);
  }
  _loadUserName() {
    const username = localStorage.getItem('username');
    if (username) {
      this.setState({
        name: username
      })
    }
  }
  componentDidMount() {
    this.input.focus();
    this._loadUserName();
  }

  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input
              ref={ (input) => { this.input = input } }
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