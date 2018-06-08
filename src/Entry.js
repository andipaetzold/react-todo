import React, { Component } from 'react';

class Entry extends Component {
    render() {
        return <li className="list-group-item" onClick={this.props.entryClick.bind(this, this.props.entry)}>{this.props.entry.name}</li>;
    }
}

export default Entry;
