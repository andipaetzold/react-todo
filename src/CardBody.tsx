import * as React from 'react';

class CardBody extends React.Component {
    public render() {
        return <div className="card-body">
            {this.props.children}
        </div>
    }
}

export default CardBody;
