import React, { Component } from 'react';
import EntryList from './EntryList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [
        {
          id: 1,
          name: 'TODO 1',
          done: true,
        },
        {
          id: 2,
          name: 'TODO 2',
          done: false
        },
        {
          id: 3,
          name: 'TODO 3',
          done: false
        },
      ]
    };
  }

  render() {
    return (
      <div className="container">
        <EntryList entries={this.state.entries} />
        <EntryList title="Done" entries={this.state.entries} />
      </div>
    );
  }
}

export default App;
