import React, { Component } from 'react';
import Card from './Card';
import NewEntry from './NewEntry';

class NewEntryCard extends Component {
    render() {
        return <Card title="New entry">
            <NewEntry addEntry={this.props.addEntry} />
        </Card>;
    }
}

export default NewEntryCard;
