import React, { Component } from 'react';

class Entry extends Component {
    render() {
        if (!this.props.entry) {
            return null;
        }

        if (!this.props.entryClick) {
            return <li className="list-group-item">{this.props.entry.name}</li>;
        } else {
            return <li className="list-group-item" onClick={this.props.entryClick}>{this.props.entry.name}</li>;
        }
    }
}

export default Entry;
