import React, { Component } from 'react';
import Entry from './Entry';

class EntryList extends Component {
    render() {
        const entryList = this.props.entries.map(entry => <Entry key={entry.id} entry={entry} entryClick={this.props.entryClick.bind(this, entry)} />);

        return <ul className="list-group">{entryList}</ul>;
    }
}

export default EntryList;
