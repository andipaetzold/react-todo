import React, { Component } from 'react';

class Entry extends Component {
    render() {
        return <li className="list-group-item">{this.props.entry.name}</li>;
    }
}

export default Entry;
