import React, { Component } from 'react';
import Card from './Card';
import NewEntry from './NewEntry';

class NewEntryCard extends Component {
    render() {
        const newEntry = <NewEntry addEntry={this.props.addEntry} />;

        return <Card title="New entry" body={newEntry} />;
    }
}

export default NewEntryCard;
