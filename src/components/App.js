import React from 'react';
import ReactDOM from 'react-dom';

import AddCourse from './AddCourse';
import CourseList from './CourseList';
import MyPanel from './MyPanel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdd: false
    };
    this.showAddDialog = this.showAddDialog.bind(this);
  }

  showAddDialog() {
    this.setState({
      showAdd: !this.state.showAdd
    });
  }
  render() {
    return <div className="container-fluid">Hi there</div>;
  }
}
