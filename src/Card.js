import React, { Component } from 'react';
import CardTitle from './CardTitle';
import CardBody from './CardBody';

class Card extends Component {
    render() {
        return <div className="card m-4">
            <CardTitle title={this.props.title} />
            <CardBody>{this.props.children}</CardBody>
        </div>
    }
}

export default Card;
