import React, { Component } from 'react';
import Entry from './Entry';
import CardHeader from './CardHeader';

class EntryList extends Component {
    render() {
        if (this.props.entries.length === 0) {
            return null;
        }

        const entryList = this.props.entries.map(entry => <Entry key={entry.id} entry={entry} entryClick={this.props.entryClick.bind(this, entry)} />);

        return <div className="card">
            <CardHeader title={this.props.title} />

            <div className="card-body">
                <ul className="list-group">{entryList}</ul>
            </div>
        </div>;
    }
}

export default EntryList;
