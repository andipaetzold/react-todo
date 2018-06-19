import React, { Component } from 'react';
import Entry from './Entry';

class EntryList extends Component {
    render() {
        if (!this.props.entries) {
            return null;
        }

        let entryList;
        if (this.props.entryClick) {
            entryList = this.props.entries.map(entry => <Entry key={entry.id} entry={entry} entryClick={this.props.entryClick.bind(this, entry)} />);
        } else {
            entryList = this.props.entries.map(entry => <Entry key={entry.id} entry={entry} />);
        }

        return <ul className="list-group">{entryList}</ul>;
    }
}

export default EntryList;
