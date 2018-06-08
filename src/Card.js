import React, { Component } from 'react';
import CardTitle from './CardTitle';
import CardBody from './CardBody';

class Card extends Component {
    render() {
        return <div className="card">
            <CardTitle body={this.props.title} />
            <CardBody body={this.props.body} />
        </div>
    }
}

export default Card;
