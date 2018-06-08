import React, { Component } from 'react';
import EntryList from './EntryList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [
        {
          id: 1,
          name: 'TODO 1'
        },
        {
          id: 2,
          name: 'TODO 2'
        },
        {
          id: 3,
          name: 'TODO 3'
        },
      ]
    };
  }

  render() {
    return (
      <div className="container">
        <EntryList entries={this.state.entries} />
      </div>
    );
  }
}

export default App;
