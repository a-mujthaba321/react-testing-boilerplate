import React, { Component } from 'react';

import { Tab, Tabs } from 'react-bootstrap';

class MyPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   showAdd: false
    };

    // this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Tab 1">
              Tab 1 content
            </Tab>
            <Tab eventKey={2} title="Tab 2">
              Tab 2 content
            </Tab>
            <Tab eventKey={3} title="Tab 3" disabled>
              Tab 3 content
            </Tab>
          </Tabs>;
        </div>
      </div>
    );
  }
}

export default MyPanel;
