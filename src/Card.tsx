import * as React from 'react';
import CardBody from './CardBody';
import CardTitle from './CardTitle';

interface IProps {
    title?: string;
}

class Card extends React.Component<IProps>{
    public render() {
        return <div className="card m-4">
            <CardTitle title={this.props.title} />
            <CardBody>{this.props.children}</CardBody>
        </div>
    }
}

export default Card;
