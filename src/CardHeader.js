import React, { Component } from 'react';

class CardHeader extends Component {
    render() {
        if (!this.props.title) {
            return null;
        }

        return <div className="card-header">
            <h2 className="card-title">{this.props.title}</h2>
        </div>
    }
}

export default CardHeader;
