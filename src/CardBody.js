import React, { Component } from 'react';

class CardBody extends Component {
    render() {
        return <div className="card-body">
            {this.props.body}
        </div>
    }
}

export default CardBody;
