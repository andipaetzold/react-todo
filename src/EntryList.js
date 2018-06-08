import React, { Component } from 'react';
import Entry from './Entry';

class EntryList extends Component {
    render() {
        if (this.props.entries.length === 0) {
            return null;
        }

        const entryList = this.props.entries.map(entry => <Entry key={entry.id} entry={entry} entryClick={this.props.entryClick.bind(this, entry)} />);

        let header = null;
        if (this.props.title) {
            header = <div className="card-header">
                <h2 className="card-title">{this.props.title}</h2>
            </div>;
        }

        return <div className="card">
            {header}

            <div className="card-body">
                <ul className="list-group">{entryList}</ul>
            </div>
        </div>;
    }
}

export default EntryList;
