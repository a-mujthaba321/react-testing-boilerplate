import React from 'react';

import CommentBox from './comment/CommentBox';
import CommentList from './comment/CommentList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid">
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}
