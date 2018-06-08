import React, { Component } from 'react';
import EntryList from './EntryList';
import Card from './Card';

class EntryListCard extends Component {
    render() {
        if (this.props.entries.length === 0) {
            return null;
        }

        const list = <EntryList entries={this.props.entries} entryClick={this.props.entryClick} />;

        return <Card title={this.props.title} body={list} />;
    }
}

export default EntryListCard;
