import React, { Component } from 'react';

export default class CommentBox extends Component {
  state = { comment: '' };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    //-TODO-
    e.preventDefault();
    this.setState({
      comment: ''
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea name="comment" onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}
